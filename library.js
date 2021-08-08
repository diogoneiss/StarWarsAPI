const axios = require('axios');
const retryAxios = require('retry-axios');

const baseEndpoint = 'https://www.swapi.tech/api/starships/';

//used to configure retryAxios. Needed in case of too many requests error
const rAxiosConfig = {
    backoffType: 'exponential',
}

/**
 * @description gets the desired number of spaceships from star wars api, without much info
 * @param {Number} numberOfSpaceships desired number of spaceships
 * @returns {Array} returns a crude array of the data of all the spaceships
 */ 
async function getAllSpaceshipsRequest(limit) {
    const results = await axios.get(baseEndpoint+'?page=1&limit='+limit, rAxiosConfig);
    // console.log(results);
    return results.data;
}


/** 
 * @description gets a single instance of a ship, in a cleaned format
 * @param {String} uid desired uid
 * @returns {Object} returns an object with the data of the ship
 * 
 */ 
async function getShipData(uid) {
    const result = await axios.get(baseEndpoint + uid, rAxiosConfig);
    return result.data;
}



/**
 * @description creates an array of uid's from the results of the getAllSpaceshipsRequest request
 * @param {Array} data, in the crude format of the getAllSpaceshipsRequest request
 * @returns {Array} array of uid's
 */ 
function createStarshipIdArray(data) {


    const originalArray = data.results;

    const cleanArray = originalArray.map(e => e.uid);

    return cleanArray;
}

/**
 * @description this function takes an array of uid's and makes a get request for each one
 * and returns an array of all the spaceships
 * @param {Array} shipArray
 * @returns {Array} array of all spaceships
 * 
 */ 
 async function fillShipData(allShips) {

    const promisesArray = allShips.map(e =>  getShipData(e));
 
    return Promise.all(promisesArray)
 
 }

/**
 * @description cleans the data from the previous step
 * @param {Array} data, in the crude format of the fillShipData request
 * @returns {Array} array of cleaned spaceships
 */ 
function cleanStarshipData(data) {

   const cleanedArray = data.map(e => e.result.properties);

    return cleanedArray;
}

/**
 * @description gets all ship info for a desired number of starships, with complete info
 * @param {Number} numberOfSpaceships desired number of spaceships
 * @returns {Array} returns an array of spaceships with all the info
 */ 
const requestStarshipData = async (numberOfSpaceships = 36) => {

    //I could've gotten the total number of ships from a dummy 1 ship request, but I already now its 36 and it wont change 


    if(numberOfSpaceships > 36) {
        throw new Error('too many ships requested');
    }

    //iterate over the results and do a get request for each of the url
    const allShips = await getAllSpaceshipsRequest(numberOfSpaceships);

    //cleans the data to leave just uid's
    const shipUidArray =  createStarshipIdArray(allShips);
   // console.log(shipUidArray);
    //gets all the data for the uid in an array
    const crudeShipData = await fillShipData(shipUidArray);

    //cleans the returned data in the previous step
   return cleanStarshipData(crudeShipData);

}
requestStarshipData(30).then( e=> console.log(e)).catch(e=> console.log("Erro "+e));

module.exports = {
    getShipData, fillShipData, getAllSpaceshipsRequest, requestStarshipData, cleanStarshipData, createStarshipIdArray
}