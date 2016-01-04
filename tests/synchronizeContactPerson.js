'use strict'

var p360 = require('../index')
var config = require('../config')
var clientService = 'contacts'
var clientMethod = 'SynchronizeContactPerson'
var args = {
  'parameter': {
    'Enterprise': '985994196', // Orgnr of company/department
    'ExternalId': '26118645164', // Personnummer
    'FirstName': 'Halvtann',
    'LastName': 'Fotfjes',
    'Email': 'halvard.halvtann@t-fk.no',
    'PrivateAddress': {
      'Country': 'NOR',
      'StreetAddress': 'Lovestreet 42',
      'ZipCode': '1337',
      'ZipPlace': 'Telemark'
    }
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
