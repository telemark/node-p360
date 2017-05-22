'use strict'

const soap = require('soap')
const isFn = require('is-fn')
const servicePath = require('./lib/servicePath')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options')
      return callback ? callback(error, null) : reject(error)
    }

    if (callback && !isFn(callback)) {
      throw new Error('Callback must be a function')
    }

    if (!options.p360) {
      const error = new Error('Missing required input: options.p360')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.clientService) {
      const error = new Error('Missing required input: options.clientService')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.clientMethod) {
      const error = new Error('Missing required input: options.clientMethod')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.args) {
      const error = new Error('Missing required input: options.args')
      return callback ? callback(error, null) : reject(error)
    }

    const service = servicePath(options)

    soap.createClient(service.url, (error, client) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else {
        client.setSecurity(new soap.BasicAuthSecurity(options.p360.user, options.p360.password))
        client.setEndpoint(service.endpoint)
        client[options.clientMethod](options.args, (err, result) => {
          if (err) {
            return callback ? callback(err, null) : reject(err)
          }
          if (options.showRequest) {
            console.log(client.lastRequest)
          }
          if (result[service.resultTag].Successful !== true && result[service.resultTag].Successful !== 'true') {
            return callback ? callback(result) : reject(result)
          } else {
            return callback ? callback(null, result) : resolve(result)
          }
        })
      }
    })
  })
}
