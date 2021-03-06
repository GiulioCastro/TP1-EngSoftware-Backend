const express = require('express');
const router = express.Router();

const {Apartment} = require('../models');

router.get('/getById/:id', (req, res) => {    
    Apartment.findById(req.params.id, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.get('/getAll', (req, res) => {
    Apartment.find({}, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.post('/insert', async (req, res) => {
    const newApartment = new Apartment(req.body);
    await newApartment.save((error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

router.put('/update', async (req, res) => {
    await Apartment.updateOne({_id: req.body._id}, req.body, null, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.delete('/delete/:id', async (req, res) => {
    await Apartment.deleteOne({_id: req.params.id}, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

module.exports = router;