'use strict'

var config = {
  p360: {
    user: process.env.P360WS_USER || 'domain/username', // username
    password: process.env.P360WS_PASSWORD || 'password', // passord
    baseUrl: process.env.P360WS_BASEURL || 'http://tfk-fh-siweb01.login.top.no:8088/SI.WS.Core/SIF/',
    options: {
      ignoredNamespaces: true
    }
  }
}

module.exports = config

