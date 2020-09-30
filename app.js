const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//ENABLE CORS
app.use(cors());

app.use(express.json());

//IMPORT ROUTES
const {HouseRoute, ApartmentRoute} = require('./routes/');

app.use('/houses', HouseRoute);
app.use('/apartments', ApartmentRoute);

//CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(error) console.log('Error while connecting to MongoDB', error);
    else console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => console.log('Conection to MongoDB was lost', error));

//PORT TO LISTEN
app.listen(process.env.PORT || '3001', () => {
    console.log(`Web server listening on port ${process.env.PORT || '3001'}`);
});