'use strict'

const test = require('ava')
const n360 = require('../../index')

test('It requires an options object to be supplied', async t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  try {
    await n360(options)
  } catch (error) {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  }
})

test('It requires options.p360 to exist', async t => {
  const options = {
    p360: false
  }
  const expectedErrorMessage = 'Missing required input: options.p360'
  try {
    await n360(options)
  } catch (error) {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  }
})

test('It requires options.clientService to exist', async t => {
  const options = {
    p360: true,
    clientService: false
  }
  const expectedErrorMessage = 'Missing required input: options.clientService'
  try {
    await n360(options)
  } catch (error) {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  }
})

test('It requires options.clientMethod to exist', async t => {
  const options = {
    p360: true,
    clientService: true,
    clientMethod: false
  }
  const expectedErrorMessage = 'Missing required input: options.clientMethod'
  try {
    await n360(options)
  } catch (error) {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  }
})

test('It requires options.args to exist', async t => {
  const options = {
    p360: true,
    clientService: true,
    clientMethod: true,
    args: false
  }
  const expectedErrorMessage = 'Missing required input: options.args'
  try {
    await n360(options)
  } catch (error) {
    t.true(error.message.includes(expectedErrorMessage), expectedErrorMessage)
  }
})
