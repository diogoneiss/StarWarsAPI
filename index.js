const axios = require('axios');
const retryAxios = require('retry-axios');

const baseEndpoint = 'https://www.swapi.tech/api/starships/';

//used to configure retryAxios
const rAxiosConfig = {
    backoffType: 'exponential',
}

// list with all the ships in SW universe
async function getAllSpaceshipsRequest(limit) {
    const results = await axios.get(baseEndpoint+'?page=1&limit='+limit, rAxiosConfig);
    // console.log(results);
    return results.data;
}

//fills a new array with additional data from each ship. Uses array od uid's  as argument
async function fillShipData(allShips) {
    const newArray = [];

    //for loop over the array values
    for (let i = 0; i < allShips.length; i++) {
        const uid = allShips[i];
        const spaceship = await getShipData(uid);
        console.log(spaceship);
        newArray.push(spaceship.result.properties);
    }


    return newArray;
}

//gets a single instance of a ship, in a cleaned format
async function getShipData(id) {
    const result = await axios.get(baseEndpoint + '/' + id, rAxiosConfig);
    return result.data;
}



//creates an array of uid's from the results of the getAllSpaceshipsRequest request
function createStarshipIdArray(data) {


    const originalArray = data.results;

    const cleanArray = originalArray.map(e => e.uid);

    return cleanArray;
}

//returns just the desired data
function cleanStarshipInstance(data) {
   //Right now it doesnt do much, but with a front end this method is useful

    return data.result;
}

const mainFunc = async () => {



    //iterate over the results and do a get request for each of the url
    const allShips = await getAllSpaceshipsRequest(10);
    const shipArray =  createStarshipIdArray(allShips);
    const finalShipData = await fillShipData(shipArray);

    console.log(fillShipData)

}

mainFunc();


module.exports = {
    getShipData, fillShipData, getAllSpaceshipsRequest, mainFunc, cleanStarshipInstance, createStarshipIdArray
}