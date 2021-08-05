# oworms-ui

<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/asset/oh-worm.jpg"></img>

command used to generate project: `ng new oworms-ui --package-manager=yarn --routing --style=scss --strict --prefix=ow`

[Explanation of Name](https://memedocumentation.tumblr.com/post/163767097995/explained-oh-worm-meme)

[Swagger Documentation](https://oworms-api.herokuapp.com/swagger-ui/)

[Hosted Application](https://oworms.herokuapp.com)

[API Source Code](https://github.com/benj-power/oworms-api)

---
### Building

dev build:\
`yarn build`

production build:\
`ng build --aot --configuration production`

---
### Running

To run this app with the proxy pointed to the heroku API:\
`yarn start-regular` AKA `ng serve`

To run this app with the proxy pointed to a local API:\
`yarn start-local` AKA `ng serve --proxy-config=local.proxy.conf.json`

To run this app on an express server with the proxy pointed to the Heroku API:\
`yarn start` AKA `node server.js`\
**Note: this command will be used when deploying this app to Heroku** (see `package.json` -> `scripts` -> `heroku-postbuild`)
