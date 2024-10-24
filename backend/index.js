require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');

const app = express();
const PORT = process.env.PORT || 5000; // Make sure to match the PORT you want to use

// Middlewares
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to match your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Check if routes directory exists
try {
    const routes = readdirSync('./routes');
    routes.forEach((route) => {
        app.use('/api', require('./routes/' + route));
    });
} catch (error) {
    console.error('Error loading routes:', error);
    process.exit(1);
}

// Start server
const server = () => {
    db().then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port:', PORT);
        });
    }).catch((error) => {
        console.error('DB Connection Error:', error);
        process.exit(1); // Exit process with failure
    });
};

server();
