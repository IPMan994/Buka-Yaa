const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Tambahkan cors
const app = express();
const port = 4000;

// Middleware untuk mengizinkan CORS
app.use(cors()); // Tambahkan ini untuk mengizinkan akses dari semua origin

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint untuk menerima data log interaksi
app.post('/api/log', (req, res) => {
    const { response } = req.body;

    if (!response) {
        return res.status(400).json({ error: 'Response is required' });
    }

    // Menyimpan response ke dalam file log.txt
    const logMessage = `${new Date().toISOString()} - ${response}\n`;
    fs.appendFile('./log/log.txt', logMessage, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
            return res.status(500).json({ error: 'Failed to write log' });
        }
        console.log('Log saved:', logMessage);
        res.status(200).json({ message: 'Log saved successfully' });
    });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});