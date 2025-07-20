import dotenv from 'dotenv';
import connectToDB from './db/db.js';
connectToDB();
dotenv.config();

import cors from 'cors';
import express from "express";
import userRoutes from "./routes/user-routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send("Heloo")
});

export default app;