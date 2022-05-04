const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

        // sacar los datones que es importante
        var data = response.data.bpi
        var valores = [
                    `${data.USD.code} `+`${data.USD.rate}`,
                    `${data.EUR.code} `+`${data.EUR.rate}`,
                    `GBP `+`${data.GBP.rate}`,
                ]
        

       console.log("el valor actual de btc es :")
       valores.forEach(datos=>console.log(datos))
        

       
    })