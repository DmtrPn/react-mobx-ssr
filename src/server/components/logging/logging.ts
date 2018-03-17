const intel = require('intel');

import { TerminalConfig } from './TerminalConfig';

const config = new TerminalConfig();

intel.config({ ...config });

const Main = intel.getLogger('main');
const Express = intel.getLogger('express');

export { Main, Express };
