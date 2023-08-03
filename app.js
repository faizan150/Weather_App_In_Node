const Request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=2efa3057b4a811f0ebaea8884b5e9871&query=33.5651,73.0169'

// Request({url: url, json:true},(error,response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     console.log('The current Temperature is '+ response.body.current.temperature+' And It feels like ' + response.body.current.feelslike);
// })



const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXVoYW1tYWRmYWl6YW4xMjUiLCJhIjoiY2xrdTBvMmUzMGpmczNxcG51ZzB6enE3MiJ9.WlYSyRi-BeMb-t2Q8GcDjw&limit=1'

Request({url:mapBoxUrl, json:true}, (error,response) => {
    console.log('The Latitude for '+response.body.features[0].place_name+' is '+response.body.features[0].center[0]+' Longitude '+response.body.features[0].center[1]+' latitude');
})