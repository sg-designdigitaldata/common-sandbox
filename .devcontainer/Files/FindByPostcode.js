const axios = require('axios');

const apiKey = 'nLWMMF3c567DLus9Tc1QVpAQzlOuBPji';

// Get postcode from command line arguments
const postcode = process.argv[2]; // e.g., "SO16 0AS"

if (!postcode) {
    console.error('Please provide a postcode. Example: node findByPostcode.js "SO16 0AS"');
    process.exit(1);
}

async function findByPostcode(postcode) {
    try {
        const url = `https://api.os.uk/search/places/v1/postcode?postcode=${encodeURIComponent(postcode)}&key=${apiKey}`;

        const response = await axios.get(url);
        const results = response.data.results;

        if (results && results.length > 0) {
            console.log(`Found ${results.length} addresses:\n`);
            results.forEach((result, i) => {
                console.log(`${i + 1}. ${result.DPA.ADDRESS}`);
            });
        } else {
            console.log('No addresses found for that postcode.');
        }
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
    }
}

findByPostcode(postcode);
