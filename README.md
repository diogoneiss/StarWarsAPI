# StarWarsAPI

Asks the user a distance in Mega Light years and outputs how many stops should a starship take to do so.

Consumes the StarWars API to get all the ships velocities and autonomy.

- [StarWarsAPI](#starwarsapi)
  - [Usage](#usage)
  - [Development](#development)
  - [Architecture](#architecture)
    - [tests folder](#tests-folder)
    - [index.js](#indexjs)
    - [library.js](#libraryjs)
    - [output.txt](#outputtxt)

## Usage

Install dependencies by running `yarn` or `npm install`, then proceed to use the scripts listed in [package.json](./package.json).

To run the app, use `yarn start`
To test the app, use `yarn test` or `jest test`

## Development

This project was written first in the [library.js](./library.js) file, with the desired behaviors for functions written in a test suite.

The [index.js](./index.js) file was written much later, responsible for interfacing with the user.

## Architecture

___

### [tests folder](./tests/unit)

All the tests for the functions in this project, following TDD procedures.

- [mockedData.js](./tests/unit/mockedData.js) has example data from the API for testing (however subject to API changes)
- [shipDataManipulations.js](./tests/unit/shipDataManipulations.spec.js) has tests for data manipulation functions
- [swapiStarshipsRequests.js](./tests/unit/swapiStarshipsRequests.spec.js) has tests for the API calls

### [index.js](./index.js)

Runtime functions, main file referenced in [package.json](package.json).

### [library.js](./library.js)

Library with used functions.

### [output.txt](./output.txt)

Static output for the API, with the desired data for 36 ships. Used for debugging purposes, as the API tends to restrict too many accesses.
