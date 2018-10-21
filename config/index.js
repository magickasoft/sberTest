import { defaultsDeepAll } from 'lodash/fp';
const defaultConfig = require('./default.json');

let localConfig = {};

try {
    localConfig = localConfig = process.env.NODE_ENV === 'development' ?
        require('./development.json') :
        require('./production.json');
} catch (e) {
    // pass
}

export default defaultsDeepAll([
    localConfig,
    defaultConfig
]);
