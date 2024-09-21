import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT
// const port = 3006;

app.get('/', (req, res) => {
    res.send("Hello, and Welcome to backend")
})

app.listen(port, ()=> {
    console.log(`Listening to http://localhost:${port}`);
})