<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/assets/image/logo.svg"></img>
---
[![Maintainability](https://api.codeclimate.com/v1/badges/022c3d76d9caaf459fbc/maintainability)](https://codeclimate.com/github/noydb/oworms-ui/maintainability)

<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/assets/image/oh-worm.jpg"></img>

command used to generate
project: `ng new oworms-ui --package-manager=yarn --routing --style=scss --prefix=ow`

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

run with angular cli:\
`yarn start-regular` (`ng serve`)

run with a proxy pointed to `localhost:8080`:\
`yarn start-local` (`ng serve --proxy-config=local.proxy.conf.json`)

run on an express server:\
`yarn start` (`node server.js`)\

**Note**: one must provide values for `api_host` and `api_port` in `environment.prod.ts` when running
either command that points to a locally hosted api.

[click here to setup locally hosted api](https://github.com/noydb/oworms-api#readme)

---
the details you capture under about -> credentials will be passed as query params (`u` & `bna`) to 
"protected" endpoints
