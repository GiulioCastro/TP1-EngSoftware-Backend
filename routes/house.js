const express = require('express');
const router = express.Router();

const {House, Address} = require('../models');

router.get('/:id', (req, res) => {    
    House.findById(req.params.id, (error, data) => {
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.post('/insert', async (req, res) => {
    const newHouse = new House(req.body);
    await newHouse.save((error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

router.put('/update', async (req, res) => {
    await House.updateOne({_id: req.body._id}, req.body, null, (error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});

router.delete('/delete/:id', async (req, res) => {
    await House.deleteOne({_id: req.params.id}, (error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    });
});


module.exports = router;