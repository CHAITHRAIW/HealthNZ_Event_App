const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'eventsdb',
  password: 'admin',
  port: 5432,
});

app.get('/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT name FROM events');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching events:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// New route to send messages to the Solace broker
app.post('/send-message', async (req, res) => {
  const { topic, payloadStrings, interval } = req.body;

  if (!Array.isArray(payloadStrings)) {
    return res.status(400).json({ error: 'payloadStrings must be an array of strings' });
  }

  const message = { 
    topic, 
    payloadStrings, 
    interval: interval !== null ? interval : 0 // Default to 0 if interval is null 
  };

  try {
    console.log('Payload to Solace:', JSON.stringify(message, null, 2)); // Log the payload
    const response = await axios.post('http://localhost:8080/', message, {
      headers: { 'Content-Type': 'application/json' },
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error('Error sending message inside the backend:', err.message);
    if (err.response) {
      // Log detailed error information from the response
      console.error('Response data:', err.response.data);
      console.error('Response status:', err.response.status);
      console.error('Response headers:', err.response.headers);
      res.status(err.response.status).json({ error: err.response.data });
    } else {
      res.status(500).json({ error: 'Failed to send message inside the backend' });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
