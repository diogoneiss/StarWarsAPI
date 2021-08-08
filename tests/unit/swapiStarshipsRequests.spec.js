
const mainFiles = require('../../library.js');
const axios = require('axios');
const mockedData = require('./mockedData.js');

/**
 * This is a unit test for getShipRequests.js, checking if the data expected by the API is correct and the functions work.
 */ 

describe("Checking to see if I can get n ships", () => {
    it("Endpoint should return 5 starships in crude format", async () => {
       const endpointReturn = await mainFiles.getAllSpaceshipsRequest(5);

       expect(endpointReturn).toBeDefined();
       expect(endpointReturn).toBeInstanceOf(Object);

       //eu já comparo profundamente o objeto retornado mas, caso o objeto mude a ordem dos id's, ainda consigo saber 
       //se o endpoint está retornando os results corretamente
       expect(endpointReturn).toHaveProperty('results')

       //igualdade profunda de objs
       expect(endpointReturn).toEqual(mockedData.startShipDataForFirstFiveEntries);
    });
});

describe("Checking to see if the individual ships endpoint works", () => {
    it("Endpoint should return starship data for a given uid", async () => {
       const endpointReturn = await mainFiles.getShipData(2);
      
       expect(endpointReturn).toBeDefined();
       expect(endpointReturn).toBeInstanceOf(Object);
       expect(endpointReturn.data).toEqual(mockedData.shipDataForUid2);
    });
});




describe("Getting all the starship data for a given 5 uid array", () => {
    it("Json should have all the desired properties", async () => {
  
        // [ '2', '3', '5', '9', '11' ]
        const desiredUids = mockedData.uidArrayForFirst5Entries;

       const endpointReturn = await mainFiles.fillShipData(desiredUids);
         //check to see if matches mocked data

        expect(endpointReturn).toBeDefined();
       expect(endpointReturn.length).toBe(5);
       expect(endpointReturn).toEqual(mockedData.crudeShipDataFor5Entries)

       
    });
});


