//Install express server
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const HOST = 'https://oworms-api.herokuapp.com';
const PORT = 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/oworms'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/oworms/index.html'));
});

app.use('/o', createProxyMiddleware({
    target: HOST,
    changeOrigin: true
}));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${ HOST }:${ process.env.PORT || PORT }`);
});

// Authorization
// app.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// })
// ;
