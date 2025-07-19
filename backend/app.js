import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from "express";
const app = express();

import connectToDB from './db/db.js';
connectToDB();

app.use(cors());
app.get('/', (req, res) => {
    res.send("Heloo")
});

export default app;