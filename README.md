
<p align="center">
    <a href="https://github.com/nuxt/nuxt.js" target="_blank">
    <img width="100" src="https://camo.githubusercontent.com/4aa5532ee9baf623c95b901372002dfa4e97ff01/687474703a2f2f696d6775722e636f6d2f56344c746f49492e706e67">
    </a>
    <a href="https://github.com/eggjs/egg/" target="_blank">
        <img width="250" src="https://raw.githubusercontent.com/eggjs/egg/master/docs/assets/egg-logo.png">
    </a>
</p>

# Egg-Nuxt

> [Egg](https://eggjs.org/) + [Nuxt.js](https://nuxtjs.org) = 🔥

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]
[![lincense image][lincense-image]][lincense-url]

[npm-image]: https://img.shields.io/npm/v/nuxt-egg.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nuxt-egg
[travis-image]: https://api.travis-ci.org/liyanlong/nuxt-egg.svg?branch=master
[travis-url]: https://travis-ci.org/liyanlong/nuxt-egg
[codecov-image]: https://codecov.io/github/liyanlong/nuxt-egg/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/liyanlong/nuxt-egg?branch=master
[david-image]: https://img.shields.io/david/liyanlong/nuxt-egg.svg?style=flat-square
[david-url]: https://david-dm.org/liyanlong/nuxt-egg
[download-image]: https://img.shields.io/npm/dm/nuxt-egg.svg?style=flat-square
[download-url]: https://npmjs.org/package/nuxt-egg
[lincense-image]: https://img.shields.io/npm/l/nuxt-egg.svg
[lincense-url]: https://github.com/liyanlong/nuxt-egg/blob/master/LICENSE

## Requirement

- `node >= 6.0.0`

## Quick Usage

```bash
$ npm install -g vue-cli
$ vue init nuxt-egg/starter my_project
or 
$ npm install -g egg-init
$ egg-init --package=egg-boilerplate-nuxt my_project

$ cd my_prject
$ npm install
$ npm run dev
```

## Direct Structure
> Look at [egg-framework](https://eggjs.org/zh-cn/basics/structure.html)

```
nuxt-egg-project
├── .nuxt
├── resources
|   ├── pages
│   ├── assets
│   |   └── css
│   |   └── img
│   ├── static
│   ├── layouts
│   ├── middleware
│   ├── plugins
│   ├── components
├── package.json
├── app.js (option)
├── agent.js (option)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (option)
│   |   └── user.js
│   ├── middleware (option)
│   |   └── response_time.js
│   ├── schedule (option)
│   |   └── my_task.js
│   ├── public (option)
│   |   └── reset.css
│   ├── view (option)
│   |   └── home.tpl
│   └── extend (option)
│       ├── helper.js (option)
│       ├── request.js (option)
│       ├── response.js (option)
│       ├── context.js (option)
│       ├── application.js (option)
│       └── agent.js (option)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (option)
|   ├── config.local.js (option)
|   └── config.unittest.js (option)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```
##  Nuxt.js Changes

- The Nuxt config file is now in  `config.[dev].js`, `dev` allow set `default`, `unittest`, `local`, `prod`
- The Nuxt project directory is `resources` (default)

### config.default.js

```js
const path = require('path');
exports.nuxt = {
  srcDir: path.join(__dirname, '../resources'),
  rootDir: path.dirname(__dirname),
}
```
**Or you can also do this**

```js
// config/config.default.js
exports.nuxt = require('./config.nuxt.js');

// config/config.nuxt.js
module.exports = {
  srcDir: ''
  rootDir: ''
}
```

## Live Demo

- [nuxt-egg-examples](https://github.com/liyanlong/nuxt-egg-examples)
- [http://nuxt-egg.liylblog.com/](http://nuxt-egg.liylblog.com/)

## Documentation

- [Egg.js](https://eggjs.org/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [EggJS license](https://github.com/eggjs/egg/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)

### Note
- egg-init doesn't support download image now, so the logo.png will not be open normal.
