const axios = require('axios');

const apiKey = 'nLWMMF3c567DLus9Tc1QVpAQzlOuBPji';

async function find() {
    axios.get('https://api.os.uk/search/places/v1/find?maxresults=1&query=Ordnance%20Survey,%20Adanac%20Drive,%20DD2&key=' + apiKey)
    .then(function(response) {
        var response = JSON.stringify(response.data, null, 2);
        console.log(response);
    });
}
find();