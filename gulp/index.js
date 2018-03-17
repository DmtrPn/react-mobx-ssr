const compileClient = require('./compileClient');
const compileServer = require('./compileServer');
const cleanClient = require('./cleanClient');
const cleanServer = require('./cleanServer');
const cleanBuild = require('./cleanBuild');
const makeBundle = require('./makeBundle');
const buildStyles = require('./buildStyles');
const buildSprite = require('./buildSprite');
const generateIconType = require('./generateIconType');
const typeCssModules = require('./typeCssModules');
const tslint = require('./tslint');
const csscomb = require('./csscomb');
const externalStyles = require('./buildExternalStyles');
const fonts = require('./fonts');
const collectPngIcons = require('./collectPngIcons');
const makeServer = require('./makeServer');
const collectImages = require('./collectImages');

module.exports = {
    compileClient,
    compileServer,
    cleanClient,
    cleanServer,
    cleanBuild,
    makeBundle,
    buildStyles,
    buildSprite,
    generateIconType,
    typeCssModules,
    tslint,
    csscomb,
    externalStyles,
    fonts,
    collectPngIcons,
    makeServer,
    collectImages
};
