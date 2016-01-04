'use strict'

var config = {
  p360: {
    user: 'domain/username', // username
    password: 'password', // passord
    baseUrl: 'http://tfk-fh-siweb01.login.top.no:8088/SI.WS.Core/SIF/',
    services: {
      contacts: {
        url: 'ContactService.svc?wsdl',
        endpoint: 'ContactService.svc'
      },
      cases: {
        url: 'CaseService.svc?wsdl',
        endpoint: 'CaseService.svc'
      },
      documents: {
        url: 'DocumentService.svc?wsdl',
        endpoint: 'DocumentService.svc'
      },
      users: {
        url: 'UserService.svc?wsdl',
        endpoint: 'UserService.svc'
      },
      files: {
        url: 'UserService.svc?wsdl',
        endpoint: 'UserService.svc'
      }
    },
    options: {
      ignoredNamespaces: true
    }
  }
}

module.exports = config

