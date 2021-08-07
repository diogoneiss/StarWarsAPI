
const mainFiles = require('../../index.js');
const axios = require('axios');


describe("Checking to see if the endpoint works", () => {
    it("Endpoint should return big list of starships", async () => {
       const endpointReturn = await mainFiles.getAllSpaceshipsRequest(5);
       
       expect(endpointReturn).toBeDefined();
    });
});

describe("Checking to see if the ships endpoint works", () => {
    it("Endpoint should return starship data for a given uid", async () => {
       const endpointReturn = await mainFiles.getShipData(2);
      
       expect(endpointReturn).toBeDefined();
    });
});

describe("Extracting data from the starship json file", () => {
    it("Json should be cleaned to have just necessary data for a given data json", async () => {
        //this SHOULDVE been mocked, to make the test atomic, but for a small project wont matter
       const endpointReturn = await mainFiles.getShipData(2);
      
       const cleanedData = mainFiles.cleanStarshipInstance(endpointReturn);
       expect(cleanedData).toBeDefined();
    });
});

describe("Creating array of starships uids from the endpoint", () => {
    it("Array should have a lot of uids, starting with 2", async () => {
        //this SHOULDVE been mocked, to make the test atomic, but for a small project wont matter
       const endpointReturn = await mainFiles.getAllSpaceshipsRequest(5);
      
       const cleanedData = mainFiles.createStarshipIdArray(endpointReturn);
       expect(cleanedData.length).toBeGreaterThan(3);
       expect(cleanedData[0]).toBe("2");
    });
});