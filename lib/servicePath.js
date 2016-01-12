'use strict'

function servicePath (srv, url) {
  var service = {
    url: url + srv + '.svc?wsdl',
    endpoint: url + srv + '.svc'
  }
  return service
}

module.exports = servicePath
