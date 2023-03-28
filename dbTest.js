const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
const Dog = require('./models/Dog')

function createDog(data) {
    Dog.create(data)
    .then(function(newDog) {
        console.log(newDog)
        return newDog.save()
    })
    .catch(function(err) {
        console.log(err)
    })
    .finally(function() {
        mongoose.connection.close()
    })
}

data = {
    name: 'Oreo',
    gender: 'Male',
    breed: 'Husky',
    weight: 100,
    age: 5,
    adoptionFee: 150
}

createDog(data)