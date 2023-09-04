const express = require('express');
const axios = require('axios')
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})
app.get('/api/players', async (req, res) => {
    try {
      // Make a request to the external API
      const response = await axios.get('https://api.pandascore.co/lol/players?Page[Size]=100', {
        headers: {
            'Authorization': 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            'Content-Type': 'application/json'
        }
      }); // Replace with the actual external API URL.
  
      // Send the response from the external API to the client
      res.json(response.data);
    } catch (error) {
      // Handle errors
      console.error('Proxy server error:', error);
      res.status(500).json({ error: 'An error occurred while proxying the request.' });
    }
  });
app.get('/api/teams', async (req, res) => {
try {
    // Make a request to the external API
    const response = await axios.get('https://api.pandascore.co/lol/teams?Page[Size]=100', {
        headers: {
            'Authorization': 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            'Content-Type': 'application/json'
        }
    }); // Replace with the actual external API URL.

    // Send the response from the external API to the client
    res.json(response.data);
} catch (error) {
    // Handle errors
    console.error('Proxy server error:', error);
    res.status(500).json({ error: 'An error occurred while proxying the request.' });
}
}); 
app.listen(8080, () => {
    console.log('listening on port 8080')
})