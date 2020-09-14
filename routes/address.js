const express = require('express');
const router = express.Router();

const Address = require('../models/address');

router.get('/getById', (req, res) => {
    res.send('/address/getById');
});

router.post('/insert', async (req, res) => {
    const address = new Address(req.body);
    await address.save((error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

module.exports = router;