const merge = require('webpack-merge');
const devEnv = require('./dev.env');
const prodEnv = require('./prod.env');

module.exports = merge(devEnv, prodEnv, {
    NODE_ENV: '"local"'
});
