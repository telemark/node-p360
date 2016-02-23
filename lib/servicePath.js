'use strict'

function servicePath (options) {
  var service = {
    url: options.p360.baseUrl + options.clientService + '.svc?wsdl',
    endpoint: options.p360.baseUrl + options.clientService + '.svc',
    resultTag: options.clientMethod + 'Result'
  }
  return service
}

module.exports = servicePath
