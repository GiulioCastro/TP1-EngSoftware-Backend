const mongoose = require('mongoose');

const HouseSchema = mongoose.Schema({
    _addressId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
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
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('house', HouseSchema);