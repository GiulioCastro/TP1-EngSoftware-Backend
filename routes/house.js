const express = require('express');
const router = express.Router();

const {House, Address} = require('../models');

router.get('/getById', (req, res) => {
    res.send('/house/GetById');
});

router.post('/insert', async (req, res) => {
    const house = new House(req.body);
    await house.save((error, data) => {
        console.log(error, data);
        if(error) res.json({status: false, error});
        else res.json({status: true, data});
    })
})

router.post('/insertWithAddress', async (req, res) => {
    const house = new House(req.body.house);
    const address = new Address(req.body.address);
    /* await address.save((error, data) => {
        console.log(error, data);
        if(!error) {
            await house.save((error, data) => {
                console.log(error, data);
                if(error) res.json({status: false, error});
                else res.json({status: true, data});
            })
        } else {
            res.json({status: true, data});
        }
    }) */
})

module.exports = router;