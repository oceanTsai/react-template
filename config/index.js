// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // disable by default for clients should not
        // get your source code from sourceMap.
        // feel free to turn it on when you need sourceMap
        // in production
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report,
        //cssModules: true
        API_HOST: '',
        PRE_FIX: '/order',
    },
    dev: {
        env: require('./dev.env'),
        index: path.resolve(__dirname, '../dist/dev/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/dev'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report,
        //cssModules: true
        API_HOST: 'http://localhost:8080',
        PRE_FIX: ''
    },
    local:{
        env: require('./local.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
        //cssModules: true,
        API_HOST: 'http://localhost:8080',
        PRE_FIX:''
    }
};
