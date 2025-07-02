import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
    {
        origin: process.env.CLIENT_URL || "*", // Allow all origins for development
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});