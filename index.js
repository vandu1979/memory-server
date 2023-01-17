import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
// for every express application inatlize the 'App'
const app = express();
dotenv.config();
//now we can use all different method on that "App" instance
// first do some general set up
// setting up bodyParser so that properly send out our request
// Middleware 

app.use(bodyParser.json({ limit: "30 mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello to memories API')
// })

//Connections
//MongoDB Atlas: https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://Vandana12:test123@sei.pvhxva8.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
// use mongoose to connect to uour database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)=>{console.log(error.message)});
// mongoose.connect(CONNECTION_URL).then(()=>{
//     console.log('...')})

// mongoose.set('useFindAndModify', false);--> Deprecated now, AKA  no longer necesary, using this instead:Ln 23 and 24
mongoose.set("strictQuery", true);
