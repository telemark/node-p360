'use strict'

var p360 = require('../index')
var config = require('../config')

var clientService = 'contacts'
var clientMethod = 'SynchronizePrivatePerson'
var args = {
  'parameter': {
    'FirstName': 'Halvtann',
    'MiddleName': 'I',
    'LastName': 'Fotfjar',
    'PersonalIdNumber': '26118645945',
    'Email': 'halvtann.fotfjar@t-fk.no'
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
