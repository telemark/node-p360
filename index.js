'use strict'

var soap = require('soap')
var isFn = require('is-fn')

function getDataFrom360 (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!callback) {
    throw new Error('Missing required input: callback')
  }

  if (!isFn(callback)) {
    throw new Error('Callback must be a function')
  }
  var endpoint = options.p360.baseUrl + options.p360.services[options.clientService].endpoint
  var url = options.p360.baseUrl + options.p360.services[options.clientService].url

  soap.createClient(url, options.p360.options, function (error, client) {
    if (error) {
      return callback(error, null)
    } else {
      client.setSecurity(new soap.BasicAuthSecurity(options.p360.user, options.p360.password))
      client.setEndpoint(endpoint)
      client[options.clientMethod](options.args, function (err, result) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, result)
        }
      })
    }
  })
}

module.exports = getDataFrom360
