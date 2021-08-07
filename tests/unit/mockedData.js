const uidArrayForFirst5Entries = [ '2', '3', '5', '9', '11' ]

const startShipDataForFirstFiveEntries = {
	"message": "ok",
	"total_records": 36,
	"total_pages": 8,
	"previous": null,
	"next": "https://www.swapi.tech/api/starships?page=2&limit=5",
	"results": [
		{
			"uid": "2",
			"name": "CR90 corvette",
			"url": "https://www.swapi.tech/api/starships/2"
		},
		{
			"uid": "3",
			"name": "Star Destroyer",
			"url": "https://www.swapi.tech/api/starships/3"
		},
		{
			"uid": "5",
			"name": "Sentinel-class landing craft",
			"url": "https://www.swapi.tech/api/starships/5"
		},
		{
			"uid": "9",
			"name": "Death Star",
			"url": "https://www.swapi.tech/api/starships/9"
		},
		{
			"uid": "11",
			"name": "Y-wing",
			"url": "https://www.swapi.tech/api/starships/11"
		}
	]
}

const secondShipData = {
	"message": "ok",
	"result": {
		"properties": {
			"model": "CR90 corvette",
			"starship_class": "corvette",
			"manufacturer": "Corellian Engineering Corporation",
			"cost_in_credits": "3500000",
			"length": "150",
			"crew": "30-165",
			"passengers": "600",
			"max_atmosphering_speed": "950",
			"hyperdrive_rating": "2.0",
			"MGLT": "60",
			"cargo_capacity": "3000000",
			"consumables": "1 year",
			"pilots": [],
			"created": "2020-09-17T17:55:06.604Z",
			"edited": "2020-09-17T17:55:06.604Z",
			"name": "CR90 corvette",
			"url": "https://www.swapi.tech/api/starships/2"
		},
		"description": "A Starship",
		"_id": "5f63a34fee9fd7000499be1e",
		"uid": "2",
		"__v": 0
	}
}

const crudeShipDataFor5Entries = [
    {
      message: 'ok',
      result: {
        properties:  {
            model: 'CR90 corvette',
            starship_class: 'corvette',
            manufacturer: 'Corellian Engineering Corporation',
            cost_in_credits: '3500000',
            length: '150',
            crew: '30-165',
            passengers: '600',
            max_atmosphering_speed: '950',
            hyperdrive_rating: '2.0',
            MGLT: '60',
            cargo_capacity: '3000000',
            consumables: '1 year',
            pilots: [],
            created: '2020-09-17T17:55:06.604Z',
            edited: '2020-09-17T17:55:06.604Z',
            name: 'CR90 corvette',
            url: 'https://www.swapi.tech/api/starships/2'
          },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be1e',
        uid: '2',
        __v: 0
      }
    },
    {
      message: 'ok',
      result: {
        properties: {
            model: 'Imperial I-class Star Destroyer',
            starship_class: 'Star Destroyer',
            manufacturer: 'Kuat Drive Yards',
            cost_in_credits: '150000000',
            length: '1,600',
            crew: '47,060',
            passengers: 'n/a',
            max_atmosphering_speed: '975',
            hyperdrive_rating: '2.0',
            MGLT: '60',
            cargo_capacity: '36000000',
            consumables: '2 years',
            pilots: [],
            created: '2020-09-17T17:55:06.604Z',
            edited: '2020-09-17T17:55:06.604Z',
            name: 'Star Destroyer',
            url: 'https://www.swapi.tech/api/starships/3'
          },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be1f',
        uid: '3',
        __v: 0
      }
    },
    {
      message: 'ok',
      result: {
        properties: {
            model: 'Sentinel-class landing craft',
            starship_class: 'landing craft',
            manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
            cost_in_credits: '240000',
            length: '38',
            crew: '5',
            passengers: '75',
            max_atmosphering_speed: '1000',
            hyperdrive_rating: '1.0',
            MGLT: '70',
            cargo_capacity: '180000',
            consumables: '1 month',
            pilots: [],
            created: '2020-09-17T17:55:06.604Z',
            edited: '2020-09-17T17:55:06.604Z',
            name: 'Sentinel-class landing craft',
            url: 'https://www.swapi.tech/api/starships/5'
          },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be20',
        uid: '5',
        __v: 0
      }
    },
    {
      message: 'ok',
      result: {
        properties:{
            model: 'DS-1 Orbital Battle Station',
            starship_class: 'Deep Space Mobile Battlestation',
            manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
            cost_in_credits: '1000000000000',
            length: '120000',
            crew: '342,953',
            passengers: '843,342',
            max_atmosphering_speed: 'n/a',
            hyperdrive_rating: '4.0',
            MGLT: '10',
            cargo_capacity: '1000000000000',
            consumables: '3 years',
            pilots: [],
            created: '2020-09-17T17:55:06.604Z',
            edited: '2020-09-17T17:55:06.604Z',
            name: 'Death Star',
            url: 'https://www.swapi.tech/api/starships/9'
          },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be21',
        uid: '9',
        __v: 0
      }
    },
    {
      message: 'ok',
      result: {
        properties:{
            model: 'BTL Y-wing',
            starship_class: 'assault starfighter',
            manufacturer: 'Koensayr Manufacturing',
            cost_in_credits: '134999',
            length: '14',
            crew: '2',
            passengers: '0',
            max_atmosphering_speed: '1000km',
            hyperdrive_rating: '1.0',
            MGLT: '80',
            cargo_capacity: '110',
            consumables: '1 week',
            pilots: [],
            created: '2020-09-17T17:55:06.604Z',
            edited: '2020-09-17T17:55:06.604Z',
            name: 'Y-wing',
            url: 'https://www.swapi.tech/api/starships/11'
          },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be22',
        uid: '11',
        __v: 0
      }
    }
  ]

const finalShipDataFor5Entries = [
    {
      model: 'CR90 corvette',
      starship_class: 'corvette',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '3500000',
      length: '150',
      crew: '30-165',
      passengers: '600',
      max_atmosphering_speed: '950',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      cargo_capacity: '3000000',
      consumables: '1 year',
      pilots: [],
      created: '2020-09-17T17:55:06.604Z',
      edited: '2020-09-17T17:55:06.604Z',
      name: 'CR90 corvette',
      url: 'https://www.swapi.tech/api/starships/2'
    },
    {
      model: 'Imperial I-class Star Destroyer',
      starship_class: 'Star Destroyer',
      manufacturer: 'Kuat Drive Yards',
      cost_in_credits: '150000000',
      length: '1,600',
      crew: '47,060',
      passengers: 'n/a',
      max_atmosphering_speed: '975',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      cargo_capacity: '36000000',
      consumables: '2 years',
      pilots: [],
      created: '2020-09-17T17:55:06.604Z',
      edited: '2020-09-17T17:55:06.604Z',
      name: 'Star Destroyer',
      url: 'https://www.swapi.tech/api/starships/3'
    },
    {
      model: 'Sentinel-class landing craft',
      starship_class: 'landing craft',
      manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
      cost_in_credits: '240000',
      length: '38',
      crew: '5',
      passengers: '75',
      max_atmosphering_speed: '1000',
      hyperdrive_rating: '1.0',
      MGLT: '70',
      cargo_capacity: '180000',
      consumables: '1 month',
      pilots: [],
      created: '2020-09-17T17:55:06.604Z',
      edited: '2020-09-17T17:55:06.604Z',
      name: 'Sentinel-class landing craft',
      url: 'https://www.swapi.tech/api/starships/5'
    },
    {
      model: 'DS-1 Orbital Battle Station',
      starship_class: 'Deep Space Mobile Battlestation',
      manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
      cost_in_credits: '1000000000000',
      length: '120000',
      crew: '342,953',
      passengers: '843,342',
      max_atmosphering_speed: 'n/a',
      hyperdrive_rating: '4.0',
      MGLT: '10',
      cargo_capacity: '1000000000000',
      consumables: '3 years',
      pilots: [],
      created: '2020-09-17T17:55:06.604Z',
      edited: '2020-09-17T17:55:06.604Z',
      name: 'Death Star',
      url: 'https://www.swapi.tech/api/starships/9'
    },
    {
      model: 'BTL Y-wing',
      starship_class: 'assault starfighter',
      manufacturer: 'Koensayr Manufacturing',
      cost_in_credits: '134999',
      length: '14',
      crew: '2',
      passengers: '0',
      max_atmosphering_speed: '1000km',
      hyperdrive_rating: '1.0',
      MGLT: '80',
      cargo_capacity: '110',
      consumables: '1 week',
      pilots: [],
      created: '2020-09-17T17:55:06.604Z',
      edited: '2020-09-17T17:55:06.604Z',
      name: 'Y-wing',
      url: 'https://www.swapi.tech/api/starships/11'
    }
  ]
    

module.exports = {
    uidArrayForFirst5Entries, crudeShipDataFor5Entries, startShipDataForFirstFiveEntries, secondShipData, finalShipDataFor5Entries
 }