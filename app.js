const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.use(express.json());

//IMPORT ROUTES
const {HouseRoute, ApartmentRoute, AddressRoute} = require('./routes/');

app.use('/houses', HouseRoute);
app.use('/apartments', ApartmentRoute);
app.use('/addresses', AddressRoute);

//CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(error) console.log('Error while connecting to MongoDB.', error);
    else console.log('Connected to MongoDB.');
});

mongoose.connection.on('error', (error) => console.log('Conection to MongoDB was lost.', error));

//PORT TO LISTEN
app.listen(process.env.PORT || '3001');