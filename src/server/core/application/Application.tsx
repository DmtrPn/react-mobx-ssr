import * as express from 'express';
import { Response, Request, NextFunction } from 'express';
import * as hemlet from 'helmet';
import * as path from 'path';
import * as React from 'react';
import { useExpressServer } from 'routing-controllers';
import { matchPath } from 'react-router-dom';
import { renderToNodeStream } from 'react-dom/server';


import { Launcher } from './launcher';
import { Html } from './Html';
import { locations } from '../../../client/modules/common/Router';
import { ServerApp } from '../../../client/ServerApp';

const PUBLIC_PATH = path.join(__dirname, '../../../../public');
const API_BASIC_URL = '/api';

class Application {

    private app: express.Application;

    constructor() {
    }

    public async init(
        controllers?: Function[] | string[],
        middlewares?: Function[] | string[]
    ): Promise<void> {

        this.app = express();

        this.app.use(hemlet());

        useExpressServer(this.app, {
            defaults: {
                undefinedResultCode: 204
            },
            defaultErrorHandler: false,
            controllers,
            middlewares
        });

        this.app.use(
            express.static(PUBLIC_PATH)
        );

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            if (req.url.startsWith(API_BASIC_URL) && !res.finished) {
                res.status(200).end(`Router ${req.url} not found`);
            } else {
                next();
            }
        });

        this.app.get('*', (req, res) => {
            const promises = [];
            // use `some` to imitate `<Switch>` behavior of selecting only
            // the first to match
            const isClientRout = locations.some(route => {
                const match = matchPath(req.path, route);
                if (match && match.isExact && route.loadData) {
                    promises.push(route.loadData());
                }
                return match && match.isExact;
            });

            if (isClientRout) {
                Promise.all(promises).then(data => {
                    const initialData = data[0];

                    res.set({
                        'Content-Type': 'text/html', 'Transfer-Encoding': 'chunked', 'X-Powered-By': 'Express'
                    });
                    renderToNodeStream(<Html initialData={JSON.stringify(initialData)}>
                    <ServerApp
                        initialData={initialData}
                        location={req.path}
                    />
                    </Html>).pipe(res);
                }).catch(error => {
                    console.log(error.config);
                });
            }
        });
    }

    public start(): void {
        const launcher = this.createLauncher();
        launcher.launch();
    }

    protected createLauncher(): Launcher {
        return new Launcher(this.app);
    }
}

export { Application };
