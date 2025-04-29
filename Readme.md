[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# css
  
  Simple CSS manipulation.

## Installation

    $ npm install @pirxpilot/css

## Example

```js
var css = require('css');
var div = document.getElementById('header');

// get
css(div, 'position'); // "relative"

// set one at a time
css(div, 'position', 'fixed');

// set many at a time
css(div, {
  position: 'fixed',
  top: '24px'
});

// use dashes if you want
css(div, 'font-size', '16px');

// you can omit "px" and it will be added automatically
css(div, 'font-size', 16);
```

## API

### css(el, property)
  
  Get the current value of a CSS `property` of an `el`.

### css(el, property, value)

  Set the `value` of a CSS `property` on an `el`.

### css(el, properties)

  Set the value of a dictionary of `properties` on an `el`.

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/css
[npm-url]: https://npmjs.org/package/@pirxpilot/css

[build-url]: https://github.com/pirxpilot/css/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/css/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@pirxpilot/css
[deps-url]: https://libraries.io/npm/@pirxpilot%2Fcss
