import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import connectToDB from './db/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user-routes.js"
import captainRoutes from "./routes/captain-routes.js"

connectToDB();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/captains', captainRoutes)

app.get('/', (req, res) => {
    res.send("Heloo")
});

export default app;