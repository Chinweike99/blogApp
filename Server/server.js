import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './Routes/userRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT
app.use(express.json());
app.use(cors());

app.use('/app/user', router)

// Connect to mongodb
mongoose.connect(process.env.MONGOOSE_URL)
.then(()=> console.log("Successfully Connected"))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("Hello, and Welcome to backend")
})

app.listen(port, ()=> {
    console.log(`Listening to http://localhost:${port}`);
})