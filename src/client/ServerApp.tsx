import * as React from 'react';
import { Provider } from 'mobx-react';
import { StaticRouter } from 'react-router';
import * as lodash from 'lodash';
import 'babel-polyfill';

import { Router } from './modules/common/Router';
import { stores } from './store';


export function ServerApp({initialData = {}, location}): JSX.Element {

    const initedStores = lodash.mapValues(stores, (store, name) =>
        initialData[name] ? new store(initialData[name]) : new store()
    );

    const context = {};

    return (
        <Provider { ...initedStores } >
            <StaticRouter
                location={location}
                context={context}
            >
                <Router />
            </StaticRouter>
        </Provider>
    );
}
