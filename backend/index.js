const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

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
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
