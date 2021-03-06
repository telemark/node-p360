'use strict'

const test = require('ava')
const n360 = require('../../index')

test('It requires an options object to be supplied', t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  n360(options, (error, data) => {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  })
})

test('It requires options.p360 to exist', t => {
  const options = {
    p360: false
  }
  const expectedErrorMessage = 'Missing required input: options.p360'
  n360(options, (error, data) => {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  })
})

test('It requires options.clientService to exist', t => {
  const options = {
    p360: true,
    clientService: false
  }
  const expectedErrorMessage = 'Missing required input: options.clientService'
  n360(options, (error, data) => {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  })
})

test('It requires options.clientMethod to exist', t => {
  const options = {
    p360: true,
    clientService: true,
    clientMethod: false
  }
  const expectedErrorMessage = 'Missing required input: options.clientMethod'
  n360(options, (error, data) => {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  })
})

test('It requires options.args to exist', t => {
  const options = {
    p360: true,
    clientService: true,
    clientMethod: true,
    args: false
  }
  const expectedErrorMessage = 'Missing required input: options.args'
  n360(options, (error, data) => {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  })
})
