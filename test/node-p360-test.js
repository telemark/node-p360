'use strict'

var tap = require('tap')
var n360 = require('../index')

tap.test('It requires an options object to be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  n360(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires an options object to be supplied', function (test) {
  var options = {
    p360: false
  }
  var expectedErrorMessage = 'Missing required input: options.p360'
  n360(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires an options object to be supplied', function (test) {
  var options = {
    p360: true,
    clientService: false
  }
  var expectedErrorMessage = 'Missing required input: options.clientService'
  n360(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires an options object to be supplied', function (test) {
  var options = {
    p360: true,
    clientService: true,
    clientMethod: false
  }
  var expectedErrorMessage = 'Missing required input: options.clientMethod'
  n360(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires an options object to be supplied', function (test) {
  var options = {
    p360: true,
    clientService: true,
    clientMethod: true,
    args: false
  }
  var expectedErrorMessage = 'Missing required input: options.args'
  n360(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.throws(
  function withNoCallback () {
    var options = {
      p360: true,
      clientService: true,
      clientMethod: true,
      args: true
    }
    n360(options)
  },
  {message: 'Missing required input: callback'},
  'Throws if callback is not supplied'
)
