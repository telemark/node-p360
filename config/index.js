'use strict'

var config = {
  p360: {
    user: 'domene/brukernavn', // username
    password: 'passord', // passord
    url: 'http://tfk-fh-siweb01t.login.top.no:8088/SI.WS.Core/SIF/ContactService.svc?wsdl',
    endpoint: 'http://tfk-fh-siweb01t.login.top.no:8088/SI.WS.Core/SIF/ContactService.svc',
    options: {
       namespaces: ['targetNamespace', 'typedNamespace'],
       override: true
    }
    }
}

module.exports = config
