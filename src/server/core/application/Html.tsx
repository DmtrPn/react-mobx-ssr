import * as React from 'react';

const Html = (props) => {
    return (
        <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>ssr react mobx bpl</title>
                <link href="/static/styles.css" media="all" rel="stylesheet" />
                <link href="/static/externalStyles.css" media="all" rel="stylesheet" />
            </head>
            <body>
                <div id="app">{props.children}</div>
                <script id="initial-data" type="text/plain" data-json={props.initialData} />
                <script src="/static/bundle.js" />
            </body>
        </html>
    );
};

export {
    Html
};
