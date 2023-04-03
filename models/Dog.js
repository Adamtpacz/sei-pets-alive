
const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum:['Male', 'Female']
    },
    breed:{
        type: String,
        required: true
    },
    weight:{
        type: Number
    },
    age:{
        type: String,
        required: true
    },
    adoptionFee:{
        type: Number,
        min: 0,
        max: 200
    }
}, {timestamps: true})


module.exports = mongoose.model('Dog', dogSchema)