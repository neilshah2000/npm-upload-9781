## Install
`npm i npm-upload-9781`

## About
This module exposes the core MDS library, plus some helper libs - events, commands and sql

## Exposes

`events` - Minima Events helper lib
`commands` - Minima Commands helper lib
`sql` - Minima Sql helper lib
`MDS` - Paddy's code MDS.js library. Don't need to use because everything is wrapped in the events, commands and sql libs. But it's here if you need an escape hatch
`Decimal` - Helper libs use Decimal.js for floating point numbers. Use this import rather than import Decimal.js directly so your app code and lib code is on the same version

## TODO
- Implement all methods in commands
- Update command methods with tsdoc annotation
- Check existing type info and add more


# Sample App

[Using this library in a react javascript app](https://github.com/neilshah2000/npm-mds-install-test)