'use strict'

var p360 = require('../index')
var config = require('../config')
var clientService = 'ContactService'
var clientMethod = 'GetPrivatePersons'
var args = {
  'parameter': {
    'Name': 'Geir'
//    'PersonalIdNumber': '',
//    'Recno': ''
  }
}

var options = {
  'p360': config.p360,
  'clientService': clientService,
  'clientMethod': clientMethod,
  'args': args
}

p360(options, function (error, data) {
  if (error) {
    console.error(JSON.stringify(error))
  } else {
    console.log(JSON.stringify(data, null, 4))
  }
})
