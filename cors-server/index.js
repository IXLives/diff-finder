const express = require('express');
const axios = require('axios')
const app = express();
const cors = require('cors')

app.use(cors);
app.get('/api/players', cors({
  origin: "https://ixlives.github.io/",
  optionsSuccessStatus: 200
}), async (req, res) => {
    try {
      const response = await axios.get('https://api.pandascore.co/lol/players?Page[Size]=100', {
        headers: {
            'Authorization': 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            'Content-Type': 'application/json'
        }
      });
  
      res.json(response.data);
    } catch (error) {
      console.error('Proxy server error:', error);
      res.status(500).json({ error: 'An error occurred while proxying the request.' });
    }
  });
app.get('/api/teams', cors({
  origin: "https://ixlives.github.io/",
  optionsSuccessStatus: 200
}), async (req, res) => {
try {
    const response = await axios.get('https://api.pandascore.co/lol/teams?Page[Size]=100', {
        headers: {
            'Authorization': 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            'Content-Type': 'application/json'
        }
    });

    res.json(response.data);
} catch (error) {
    console.error('Proxy server error:', error);
    res.status(500).json({ error: 'An error occurred while proxying the request.' });
}
}); 
app.listen(3000, () => {
    console.log('listening on port 3000')
})