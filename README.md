[![Build Status](https://travis-ci.org/telemark/node-p360.svg?branch=master)](https://travis-ci.org/telemark/node-p360)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/node-p360.svg)](https://greenkeeper.io/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [node-p360](#node-p360)
  - [Installation](#installation)
    - [From npm](#from-npm)
    - [From GitHub](#from-github)
  - [SIF documentation](#sif-documentation)
  - [Usage](#usage)
  - [Examples](#examples)
    - [Persons](#persons)
      - [Search private persons](#search-private-persons)
      - [Search contact persons](#search-contact-persons)
      - [Create contact person](#create-contact-person)
      - [Create private person](#create-private-person)
    - [Cases](#cases)
      - [Search cases](#search-cases)
      - [Create case](#create-case)
      - [Update case](#update-case)
    - [Documents](#documents)
      - [Update document](#update-document)
      - [Get documents](#get-documents)
  - [Disclaimer](#disclaimer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# node-p360

Node module for Public 360 from [Tieto](https://www.tieto.no/)

## Installation

```bash
$ npm install p360 --save
```

## SIF documentation

SI Integration Framework (SIF) is public 360s SOAP-webservice.

For a full list of calls and callbacks see the documentation  [here](https://github.com/telemark/skoleskyss-arbeid/blob/master/biztalk/GenericWebServiceLayer.pdf)

## Usage

```JavaScript
const p360 = require('p360')
const config = require('./config')

const clientService = 'ContactService'
const clientMethod = 'GetContactPersons'
const args = {
  'parameter': {
     'Name': 'Geir'
  }
}

const options = {
  'showRequest': true, // use this to console.log soap-request
  'p360': config.p360,
  'clientService': clientService,
  'clientMethod': clientMethod,
  'args': args
}

p360(options, (error, data) => {
  if (error) {
    console.error(JSON.stringify(error))
  } else {
    console.log(JSON.stringify(data))
  }
})
```

## Examples

### Persons

#### Search private persons
[See example to search for private persons](examples/getPrivatePersonsName.js)


**Result:**
```javascript
{
    "GetPrivatePersonsResult": {
        "Successful": true,
        "PrivatePersons": {
            "PrivatePersonBase": [
                {
                    "Email": "hallgeir.hall@t-fk.no",
                    "FirstName": "Hallgeir",
                    "LastName": "Hall",
                    "MobilePhone": "+47 90 00 00 00",
                    "PersonalIdNumber": "",
                    "PrivateAddress": {
                        "Area": "TELEMARK",
                        "Country": "NOR",
                        "County": "SELJORD",
                        "State": "",
                        "StreetAddress": "Hygdedalen 42",
                        "ZipCode": "3840",
                        "ZipPlace": "SELJORD"
                      }
                }
            ]
        }
    }
}
```

#### Search contact persons
[See example to search for contact persons](examples/getContactPersonsName.js)

**Result:**
```javascript
{
    "GetContactPersonsResult": {
        "Successful": true,
        "ContactPersons": {
            "ContactPersonBase": [
                {
                    "Email": "Geir.Gasodden@t-fk.no",
                    "ExternalId": "",
                    "FirstName": "Geir",
                    "LastName": "Gåsodden",
                    "MobilePhone": "+47 95 55 27 59",
                    "PrivateAddress": {
                        "Area": "",
                        "Country": "NOR",
                        "County": "",
                        "State": "",
                        "StreetAddress": "",
                        "ZipCode": "",
                        "ZipPlace": ""
                    }
                },
                {
                    "Email": "geir.grastein@t-fk.no",
                    "ExternalId": "",
                    "FirstName": "Geir",
                    "LastName": "Gråstein",
                    "MobilePhone": "+47 93 00 00 00",
                    "PrivateAddress": {
                        "Area": "",
                        "Country": "NOR",
                        "County": "",
                        "State": "",
                        "StreetAddress": "",
                        "ZipCode": "",
                        "ZipPlace": ""
                    }
                }
            ]
        }
    }
}
```

#### Create contact person
[See example to create contact persons](examples/synchronizeContactPerson.js)

**Result:**
```javascript
{
    "SynchronizeContactPersonResult": {
        "Successful": true,
        "Recno": 209464
    }
}
```

#### Create private person
[See example to create contact persons](examples/synchronizePrivatePerson.js)

**Result:**
```javascript
{
    "SynchronizePrivatePersonResult": {
        "Successful": true,
        "Recno": 209465
    }
}
```

### Cases

#### Search cases
[See example to search for cases](examples/getCasesTitle.js)

**Result:**

#### Create case
[See example to create case](examples/createCase.js)

**Result:**

#### Update case
[See example to update case](examples/updateCaseTitle.js)

**Result:**

### Documents

[See example to update case](examples/createDocument.js)

**Result:**

#### Update document

**Result:**

#### Get documents

**Result:**

## Disclaimer

This is not an official module from Tieto

## License
[MIT](LICENSE)

![Robohash image of node-p360](https://robots.kebabstudios.party/node-p360.png "Robohash image of node-p360")
