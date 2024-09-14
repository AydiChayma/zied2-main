// Database Connection
const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
    host: 'localhost', // Replace with your DB host
    port: 3306,        // Replace with your DB port
    user: 'root',      // Replace with your DB username
    password: 'admin', // Replace with your DB password
    database: 'my_platform' // Replace with your DB name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});