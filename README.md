[![Build Status](https://travis-ci.org/telemark/node-p360.svg?branch=master)](https://travis-ci.org/telemark/node-p360)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# node-p360
Node module for Public 360

## Usage

```javascript
var p360 = require('node-p360')
var config = require('./config')
var args = { 'parameter': { 'Name': 'Geir' } }
var clientMethod = 'GetContactPerson'

var options = {
  'p360': config.p360,
  'clientMethod': clientMethod,
  'args': args
}

p360(options, function (error, data) {
  if (error) {
    console.error(JSON.stringify(error))
  } else {
    console.log(JSON.stringify(data))
  }
})
```