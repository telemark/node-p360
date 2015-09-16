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

tap.throws(
  function withNoCallback () {
    var options = {'gotOptions': 'hellYeah!'}
    n360(options)
  },
  {message: 'Missing required input: callback'},
  'Throws if callback is not supplied'
)
