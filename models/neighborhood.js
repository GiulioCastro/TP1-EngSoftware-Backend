const mongoose = require('mongoose');

const NeighborhoodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        tags: { type: [String], index: true }
    },
});

module.exports = mongoose.model('neighborhood', NeighborhoodSchema);;