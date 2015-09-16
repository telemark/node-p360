'use strict'

var soap = require('soap')
var config = require('./config')

var args = { 'parameter': { 'Name': 'Geir' } }

soap.createClient(config.p360.url, config.p360.options, function(err, client) {
  client.setSecurity(new soap.BasicAuthSecurity(config.p360.user, config.p360.password))
  client.setEndpoint(config.p360.endpoint)
  client.GetContactPersons(args, function(err, result) {
    console.log(result)
  })
})
