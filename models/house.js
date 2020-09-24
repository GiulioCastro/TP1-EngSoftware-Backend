const mongoose = require('mongoose');

const Address = require('./address');

const HouseSchema = mongoose.Schema({
    address: {
        type: Address,
        required: true,
    },
    roomsQuantity: {
        type: Number,
        required: true,
    },
    suitesQuantity: {
        type: Number,
        required: true,
    },
    livingRoomsQuantity: {
        type: Number,
        required: true,
    },
    parkingSpaces: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    hasCloset: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rentValue: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('house', HouseSchema);