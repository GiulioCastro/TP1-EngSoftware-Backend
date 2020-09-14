const express = require('express');
const router = express.Router();

const Apartment = require('../models/apartment');

router.get('/getById', (req, res) => {
    res.send('/apartment/getById');
});

router.post('/insert', async (req, res) => {
    const apartment = new Apartment(req.body);
    await apartment.save((error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

module.exports = router;