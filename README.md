# Nuxt.js with Egg
	
> [Egg](https://eggjs.org/) + [Nuxt.js](https://nuxtjs.org) = :zap:
	

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

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

## Requirement

- `node >= 4.0.0`
- `nuxt latest`


## Installation

```bash
$ npm install nuxt-egg --save
```


## Usage
**package.json**
```json
{
  "scripts": {
    "dev": "egg-bin dev",
    "start": "NODE_ENV=production egg-bin dev"
  },
  "egg": {
    "framework": "nuxt-egg"
  }
}
```

## Direct Structure
> 点击查看 [egg-framework](https://eggjs.org/zh-cn/basics/structure.html) 目录结构

```
nuxt-egg-project
├── .nuxt
├── client
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
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
└── nuxt.config.js
```

##  Nuxt Config
**config.default.js**
```js
  exports.nuxt = require('../nuxt.config.js');
  
```
**nuxt.config.js**
```js
'use strict';
const path = require('path');

module.exports = {
  rootDir: process.cwd(),
  srcDir: path.join(process.cwd(), './client'),
};
```

## Documentation

- [Egg](https://eggjs.org/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [Egg license](https://github.com/eggjs/egg/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
