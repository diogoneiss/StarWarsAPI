
const mainFiles = require('../../library.js');
const axios = require('axios');
const mockedData = require('./mockedData.js');

/**
 * This is a unit test for getShip.js, checking if the data manipulation functions are working properly.
 */ 

describe("Creating array of starships uids from the endpoint", () => {
    it("Array should have a lot of uids, starting with 2", () => {
      
       const cleanedData = mainFiles.createStarshipIdArray(mockedData.startShipDataForFirstFiveEntries);

       //check to see if matches mocked data

       expect(cleanedData.length).toBe(5);
       expect(cleanedData[0]).toBe("2");
       expect(cleanedData).toEqual(mockedData.uidArrayForFirst5Entries);
    });
});

describe("Cleaning data from the starship data array", () => {
    it("Json should be cleaned to have just necessary data for a given starship json", () => {
    
       const cleanedData = mainFiles.cleanStarshipData(mockedData.crudeShipDataFor5Entries);
       expect(cleanedData).toBeDefined();
       expect(cleanedData).toEqual(mockedData.finalShipDataFor5Entries);
    });
});

describe.only("Converting every time unit to days", () => {
    it("Week should be turned to 7 days", () => {
    
       const originalData = "1 week"
       const outputData = mainFiles.convertTimeToDays(originalData);

       expect(outputData).toBeDefined();
       expect(outputData).toBe(7);
    });
    it("Weeks should be turned to days", () => {
    
        const originalData = "7 weeks"
        const outputData = mainFiles.convertTimeToDays(originalData);
 
        expect(outputData).toBeDefined();
        expect(outputData).toBe(7*7);
     });
     it("Years should be turned to days", () => {
    
        const originalData = "3 years"
        const outputData = mainFiles.convertTimeToDays(originalData);
 
        expect(outputData).toBeDefined();
        expect(outputData).toBe(365*3);
     });

});

