const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        match: /\d{3}-\d{3}-\d{4}/
    },
    emailAddress: {
        type: String,
        required: true
    },
    address: String,
    numberOfPets: {
        type: Number,
        required: true
    },
    message: String,

}, {timestamps: true})

module.exports = mongoose.model('Application', applicationSchema)
