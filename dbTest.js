const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
const Dog = require('./models/Dog')
const Application = require ('./models/Application')

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

function createApp(data) {
    Application.create(data)
    .then(function(newApp) {
        console.log(newApp)
        return newApp.save()
    })
    .catch(function(err) {
        console.log(err)
    })
    .finally(function() {
        mongoose.connection.close()
    })
}

dogData = {
    name: 'Indy',
    gender: 'Male',
    breed: 'Labrador',
    weight: 80,
    age: '7 years',
    adoptionFee: 200
}

appData = {
    name:'Nicole Prati',
    phone: '467-208-5403',
    emailAddress: 'nicoleprati@gmail.com',
    numberOfPets: 1,
    message: 'This doggo WILL be mine'
}

createApp(appData)

// createDog(dogData)