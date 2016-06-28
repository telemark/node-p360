'use strict'

var p360 = require('./index')
var config = require('./config')

var clientService = 'UserService'
var clientMethod = 'GetUsers'
var args = {
  'parameter': {
    'UserId': 'login\\engj' // The ID that identifies the User (typically "domain\user").
//  'ContactExternalId': 'test' // Search users associated with the given contact external id
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

