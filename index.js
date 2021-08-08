const { requestStarshipData } = require("./library")

require("./library.js")


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Qual distância você deseja calcular, em MGLT? (megalights years) `, requestedDistance => {
      const allData = requestStarshipData();
      console.log("Serão necessários os seguintes números de paradas para chegar ao destino, por nave: ");
      const result = allData.map(data => { 
        //MGLT = MGLT / h
        const distanceInWeeks = requestedDistance / (24 * 7);
        //TODO: calculate the ship's time

        //TODO: with time in hands, calculate the ships stops


        let awnser = 0;
        
        console.log(`[ship name]: ${awnser}`);
    })
   
    readline.close()
  })
  