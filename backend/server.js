const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const authRoute=require('./routes/authRoute');
const hotelRoute = require('./routes/hotelRoute'); 
const connectDB = require('./db');
const app=express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoute);
app.use('/api/auth/hotels', hotelRoute);

const PORT=5000;
app.listen(PORT,()=>{
    console.log("sever is running");
});