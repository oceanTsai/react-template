/**
 * @author
 * @name 
 * @class
 * @description 
 * process is node.js global object
 */

require('./check-versions')();
const opn = require('opn');
const chalk = require('chalk');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.local.conf');
const config = require('../config');
const param = config.local;
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(param.env.NODE_ENV);
}
const { 
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
    proxyTable,
    assetsPublicPath, 
    assetsSubDirectory
} = param
// default port where dev server listens for incoming traffic
const port = process.env.PORT || param.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!param.autoOpenBrowser;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    });
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(options.filter || context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
app.use(
    path.posix.join(assetsPublicPath, assetsSubDirectory), //staticPath
    express.static('./static')
);

const uri = 'http://localhost:' + port;
const ip = 'http://' + require('internal-ip').v4() + ':' + port;

devMiddleware.waitUntilValid(function () {
    console.log(chalk.cyan('- Local: ' + uri + '\n'));
    console.log(chalk.cyan('- On your Network: ' + ip + '\n'));
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    };
});