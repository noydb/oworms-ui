<img src="https://github.com/noydb/oworms-ui/blob/develop/src/assets/image/logo.svg"></img> oworms-ui
---
[Hosted Application](https://oworms.herokuapp.com) || [Swagger](https://oworms-api.herokuapp.com/swagger-ui/) || [API Source Code](https://github.com/benj-power/oworms-api) || [Prototype](https://jamieneslotech.invisionapp.com/console/share/KH37M1CTRA/839061901)

[![Maintainability](https://api.codeclimate.com/v1/badges/022c3d76d9caaf459fbc/maintainability)](https://codeclimate.com/github/noydb/oworms-ui/maintainability)

---

### Getting Started

1. Run `yarn` or `npm install`
2. Run `ng serve --proxy-config=proxy.conf.json` to point an API proxy to [localhost:8080](https://github.com/noydb/oworms-api#readme) OR
3. Run `npm run start-l` OR
4. Run `yarn start-l`

#### Development build
`yarn build` or `npm run build`

#### Production build
`ng build --aot --configuration production`

#### Express server
`node server.js` or `npm start` or `yarn start`

#### Angular CLI project generation
`ng new oworms-ui --package-manager=yarn --routing --style=scss --prefix=ow`

---

**Note: the details you capture on the credentials page will be passed as query params (`u` & `bna`) for protected endpoints**

---

### Features
- Viewing words, creating, updating words
- linking tags to words
- liking/favouriting words
- receive an email everytime a word is created or updated
- filtering by any of the available fields, driven by query parameters (e.g. https://oworms.herokuapp.com/o/all?pos=verb,adjective&tags=informal,politics)
- retrieve a random word
- view statistics on the application & the words
- import spreadsheet of words
- export all words to csv
- fully responsive

### Planned Features
- Full implementation of ui design
- allowing multiple parts of speech and definitions to be linked to one word
- linking of synonyms and antonyms
- ability to delete words
- automated creation of words, adding word with assistance/wizard
- more detailed statistics, daily, weekly stats, graphs, etc

---

### Why this app? 
A convenient way to store and find words. I was previously using a simple spreadsheet but as it grew, adding words proved to be inefficient and frankly annoying. Being able to store and find words my way. Sure, one can find any word in existence on the internet, but I wanted a more elegant way to view words. If I google a word and it happens to also be the name of a company, the company will appear first (thanks SEO) and not the word.
