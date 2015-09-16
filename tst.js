'use strict'

var p360 = require('./index')
var config = require('./config')
var args = { 'parameter': { 'Name': 'Geir' } }
var clientMethod = 'GetContactPersons'

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
