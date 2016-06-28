'use strict'

var p360 = require('./index')
var config = require('./config')

var clientService = 'UserService'
var clientMethod = 'SynchronizeUser'
var args = {
  'parameter': {
    'Login': 'login\\testpers1', // * Login name
    'ContactExternalId': '', // * Reference to the user’s contact person
    // 'IsActive': '', True/false. Default: True
    'Role': '', // Code from the Sysroles code table, (using the configured language), or recno on the format “recno:123”
    'EnterpriseId': '', // * The role’s organization unit. Set to either it’s external id or enterprise number, or recno on the format “recno:123”
    'FromDate': '', // A date the profile is valid from
    'ToDate': '', // A date the profile is valid to
    'AccessGroups': [
      {
        'AccessGroup': '', // Name of the access group, or recno on the format “recno:123”
        'FromDate': '', // A date the membership is valid from
        'ToDate': '' // A date the membership is valid to
      }
    ]
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
