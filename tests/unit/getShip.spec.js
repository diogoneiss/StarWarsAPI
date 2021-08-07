
const mainFiles = require('../../index.js');
const axios = require('axios');
const mockedData = require('./mockedData.js');
jest.setTimeout(60000);

let allShipsUidArray = [];
let allShipsData = [];


describe("Checking to see if I can get all", () => {
    it("Endpoint should return big list of starships", async () => {
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

describe("Checking to see if the ships endpoint works", () => {
    it("Endpoint should return starship data for a given uid", async () => {
       const endpointReturn = await mainFiles.getShipData(2);
      
       expect(endpointReturn).toBeDefined();
       expect(endpointReturn).toBeInstanceOf(Object);
       expect(endpointReturn.data).toEqual(mockedData.shipDataForUid2);
    });
});

describe("Creating array of starships uids from the endpoint", () => {
    it("Array should have a lot of uids, starting with 2", async () => {
      
       const cleanedData = mainFiles.createStarshipIdArray(mockedData.startShipDataForFirstFiveEntries);

       //check to see if matches mocked data

       expect(cleanedData.length).toBe(5);
       expect(cleanedData[0]).toBe("2");
       expect(cleanedData).toEqual(mockedData.uidArrayForFirst5Entries);
    });
});


describe("Getting all the data for a given uid array", () => {
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

describe("Cleaning data from the starship data array", () => {
    it("Json should be cleaned to have just necessary data for a given starship json", async () => {
    
       const cleanedData = mainFiles.cleanStarshipData(mockedData.crudeShipDataFor5Entries);
       expect(cleanedData).toBeDefined();
       expect(cleanedData).toEqual(mockedData.finalShipDataFor5Entries);
    });
});

