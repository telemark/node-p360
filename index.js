'use strict'

var soap = require('soap')
var isFn = require('is-fn')
var servicePath = require('./lib/servicePath')

function getDataFrom360 (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.p360) {
    return callback(new Error('Missing required input: options.p360'), null)
  }

  if (!options.clientService) {
    return callback(new Error('Missing required input: options.clientService'), null)
  }

  if (!options.clientMethod) {
    return callback(new Error('Missing required input: options.clientMethod'), null)
  }

  if (!options.args) {
    return callback(new Error('Missing required input: options.args'), null)
  }

  if (!callback) {
    throw new Error('Missing required input: callback')
  }

  if (!isFn(callback)) {
    throw new Error('Callback must be a function')
  }
  var service = servicePath(options.clientService, options.p360.baseUrl)

  soap.createClient(service.url, function (error, client) {
    if (error) {
      return callback(error, null)
    } else {
      client.setSecurity(new soap.BasicAuthSecurity(options.p360.user, options.p360.password))
      client.setEndpoint(service.endpoint)
      client[options.clientMethod](options.args, function (err, result) {
        if (err) {
          return callback(err, null)
        } else if (result[service.resultTag].Successful !== true) {
          return callback(result)
        } else {
          return callback(null, result)
        }
      })
    }
  })
}

module.exports = getDataFrom360
