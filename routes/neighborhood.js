const express = require('express');
const router = express.Router();

const {Neighborhood} = require('../models');

router.get('/getAll', (req, res) => {
    Neighborhood.find({}, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.post('/insert', async (req, res) => {
    const newNeighborhood = new Neighborhood(req.body);
    await newNeighborhood.save((error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

router.delete('/delete/:name', async (req, res) => {
    await newNeighborhood.deleteOne({name: req.params.name}, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});


module.exports = router;