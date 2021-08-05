//Install express server
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const APP = express();
const HOST = 'https://oworms-api.herokuapp.com';
const PORT = 8080;

// serve only static files from dist directory
APP.use(express.static(__dirname + '/dist/oworms'));

// proxy conf for prod
APP.use('/api', createProxyMiddleware({
    target: HOST,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
}));

// send requests to dist folder and serve index.html (SPA)
APP.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/oworms/index.html'));
});

// Start the app by listening on the default Heroku port
APP.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${ HOST }:${ process.env.PORT || PORT }`);
});
