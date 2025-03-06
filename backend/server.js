import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb';

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start server
app.listen(port, () => console.log(`Server started on port: ${port}`));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});
