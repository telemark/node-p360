'use strict'

var p360 = require('../index')
var config = require('../config')

var clientService = 'DocumentService'
var clientMethod = 'CreateDocument'
var data = 'base64'
var args = {
  'parameter': {
    'Title': 'Dokument tittel',
    'Archive': '2', // Codetable: Document archive
    'Status': '6', // Codetable: Document status
    'Category': '110', // Codetable: Document category
    'ResponsiblePersonRecno': '', // Recnr ansvarlig person
    'ResponsibleEnterpriseRecno': '213419', // Recnr ansvarlig virksomhet
    'Contacts': [
      {
        'ReferenceNumber': '14059733381', // Personnummer
        'Role': '5' // Mottaker
      }
    ],
    'SendersReference': '',
    'AccessCode': '13', // Codetable: Accesscode
    'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
    'AccessGroup': 'Gruppenavn', // Codetable: Tilgangsgruppe navn
    'Files': [
      {
        'Title': 'Fil tittel',
        'Format': 'PDF', // Codetable: File format
        'Base64Data': data, // Must be base64 encoded
        'VersionFormat': 'A', // Codetable: File status
        'Category': '1' // Codetable: File category
      }
    ]
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
