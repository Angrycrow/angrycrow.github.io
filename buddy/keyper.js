// keyper.js
require('dotenv').config();

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// ... (rest of your code)

async function initMap() {
  // ... (rest of your map initialization)
}

// ... (rest of your functions)

window.initMap = initMap;
