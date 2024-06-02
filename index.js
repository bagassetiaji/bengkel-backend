const express = require('express');
const cors = require('cors');
const PORT = 5000;  // Pastikan port ini sesuai dengan yang Anda gunakan

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import router
const router = require('./router');

// Menggunakan router dengan path yang lebih eksplisit
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
