const { requestStarshipData, convertTimeToDays } = require("./library")
const readlineSync = require("readline-sync");


let requestedDistance = readlineSync.question('Qual distância você deseja calcular, em MGLT? (megalights years)?\nDistancia: ');

console.log(`\nSerão necessários os seguintes números de paradas para percorrer ${requestedDistance} em MGLT, por nave: `);

requestStarshipData()
    .then(result => {
        result.map(data => {
            //MGLT = MGLT per h
            const maxDaysWithoutStop = convertTimeToDays(data.consumables);
            const shipSpeed = data.MGLT;
           
            if ( maxDaysWithoutStop === 0 || shipSpeed === "unknown") {
                console.log(`* [${data.name}] autonomy or speed are unknown, can't calculate.`);
            } else {
                //maxDaysWithoutStop * shipSpeed gives me MGLT/day, now i need to cancel the /day part, multiplying by 24
                console.log(`* [${data.name}] will take ${Math.floor(requestedDistance / (maxDaysWithoutStop * shipSpeed * 24 ))} stops to reach the destination`);
            }
        });
    })
    .catch(err => console.log(err));


