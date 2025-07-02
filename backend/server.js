import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import path from 'path';
import connectDB from './config/db.js';

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

// MongoDB connection
connectDB();

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});