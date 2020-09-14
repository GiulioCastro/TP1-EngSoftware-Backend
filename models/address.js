const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    zipCode: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    streetName: {
        type: String,
        required: true,
    },
    streetNumber: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('addresses', AddressSchema);