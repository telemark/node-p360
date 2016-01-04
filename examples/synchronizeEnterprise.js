'use strict'

var p360 = require('../index')
var config = require('../config')
var clientService = 'contacts'
var clientMethod = 'SynchronizeEnterprise'
var args = {
  'parameter': {
    'Name': 'Departmentname',
    'EnterpriseNumber': '26118645164', // Orgnr
    'ParentEnterpriseNumber': '1111',
    'PhoneNumber': '35917000',
    'Email': 'halvard.halvtann@t-fk.no',
    'PostAddress': {
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
