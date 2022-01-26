<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/assets/image/logo.svg"></img>
---
[![Maintainability](https://api.codeclimate.com/v1/badges/022c3d76d9caaf459fbc/maintainability)](https://codeclimate.com/github/noydb/oworms-ui/maintainability)

<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/assets/oh-worm.jpg"></img>

command used to generate project: `ng new oworms-ui --package-manager=yarn --routing --style=scss --strict --prefix=ow`

[Explanation of Name](https://memedocumentation.tumblr.com/post/163767097995/explained-oh-worm-meme)

[Swagger Documentation](https://oworms-api.herokuapp.com/swagger-ui/)

[Hosted Application](https://oworms.herokuapp.com)

[API Source Code](https://github.com/benj-power/oworms-api)

[Full Design + Prototype by the Glorious Design Team @ Neslo](https://jamieneslotech.invisionapp.com/console/share/KH37M1CTRA/839061901)

---
### Building

dev build:\
`yarn build`

production build:\
`ng build --aot --configuration production`

---
### Running

To run this app with the proxy pointed to the heroku API:\
`yarn start-regular` (`ng serve`)

To run this app with the proxy pointed to a local API:\
`yarn start-local` (`ng serve --proxy-config=local.proxy.conf.json`)

To run this app on an express server with the proxy pointed to the Heroku API:\
`yarn start` (`node server.js`)\
**Note: this command will be used when deploying this app to Heroku** (`package.json` -> `scripts` -> `heroku-postbuild`)

### Other

