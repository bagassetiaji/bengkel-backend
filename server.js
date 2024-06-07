const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import router
const router = require('./router');
app.use('/api', router); // Gunakan router untuk semua rute dengan prefix /api

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.js"));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});
