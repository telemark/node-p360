'use strict'

function servicePath (srv, url) {
  var service = {
    url: url + srv + '.svc?wsdl',
    endpoint: url + srv + '.svc',
    resultTag: srv + 'Result'
  }
  return service
}

module.exports = servicePath
