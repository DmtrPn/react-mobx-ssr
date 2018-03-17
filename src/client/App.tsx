import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as lodash from 'lodash';
import 'babel-polyfill';

import { stores } from './store';
import { Router } from './modules/common/Router';

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json')) || {};

const initedStores = lodash.mapValues(stores, (store, name) =>
    initialData[name] ? new store(initialData[name]) : new store()
);

hydrate(
    <Provider { ...initedStores } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
