'use strict'

var p360 = require('../index')
var config = require('../config')

var clientService = 'CaseService'
var clientMethod = 'CreateCase'
var args = {
  'parameter': {
    'Title': 'Sakstittel',
    'UnofficialTitle': 'Uoffisiell sakstittel',
    'Status': 'B', // Under behandling
    'SubArchive': '200052', // Codetable: Noark subarchive
    'AccessCode': '13', // Codetable: Accesscode
    'AccessGroup': 'Gruppenavn', // Tilgangsgruppe navn
    'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
    'ArchiveCodes': [
      {
        'Sort': '1',
        'ArchiveType': 'FAGKODE PRINSIPP', // Codetable: Noark classification
        'ArchiveCode': 'N06' // Codetable: Noark classification code
      },
      {
        'Sort': '2',
        'ArchiveType': 'Fnr', // Codetable: Noark classification
        'ArchiveCode': '14059733381',
        'IsManualText': 'False'
      }
    ],
    'Keywords': 'Stikkord',
    'Contacts': [
      {
        'ReferenceNumber': '14059733381',
        'Role': '9' // Codetable: Contact - Case Role
      }
    ],
    'ResponsiblePersonIdNumber': '',
    'ResponsibleEnterpriseRecno': '213419' // Recnr ansvarlig virksomhet
  }
}

var options = {
  'p360': config.p360,
  'clientService': clientService,
  'clientMethod': clientMethod,
  'args': args
}

p360(options, function (error, data) {
  if (error) {
    console.error(JSON.stringify(error))
  } else {
    console.log(JSON.stringify(data, null, 4))
  }
})
