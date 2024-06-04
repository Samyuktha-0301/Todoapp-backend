const express = require("express")
const mongoose = require('mongoose')
const cors=require("cors")
const routes=require('./routes/Todoroute')
require('dotenv').config()

const app = express()

const PORT = process.env.port || 5000
const connectThis = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo connected");
    }
    catch (err) {
        console.log(err);
    }
}
app.use(express.json());

app.use(cors());
app.use(routes);



app.listen(PORT, () => {
    connectThis();
    console.log('Listening on: ${PORT)')

})