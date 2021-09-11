
# koa-compose

[![NPM version][npm-image]][npm-url]
[![Node.js CI](https://github.com/koajs/compose/actions/workflows/node.js.yml/badge.svg?branch=master&event=push)](https://github.com/koajs/compose/actions/workflows/node.js.yml)
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

 Compose middleware specifically for Koa.

## Installation

```js
$ npm install koa-compose
```

## Maintainers

- Lead: @jonathanong [@jongleberry](https://twitter.com/jongleberry)

## API

### fn = compose([a, b, c, ...])

  Compose the given middleware and return middleware.

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/koa-compose.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-compose
[codecov-image]: https://img.shields.io/codecov/c/github/koajs/compose/next.svg?style=flat-square
[codecov-url]: https://codecov.io/github/koajs/compose
[david-image]: http://img.shields.io/david/koajs/compose.svg?style=flat-square
[david-url]: https://david-dm.org/koajs/compose
[license-image]: http://img.shields.io/npm/l/koa-compose.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-compose.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-compose


koa-compose 涉及到的设计模式叫职责链模式~

https://github.com/reduxjs/redux/blob/master/src/compose.ts

有余力的小伙伴，也可以看看redux 的compose~根据测试用例看compose

我写过redux compose~
https://lxchuan12.gitee.io/redux/#_5-2-redux-compose-functions