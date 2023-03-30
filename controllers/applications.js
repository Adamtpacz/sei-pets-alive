const Application = require('../models/Application')
const Dog = require('../models/Dog')

module.exports = {
    create,
    new: newApplication,
    edit,
    updateOne,
    delete: deleteOne
}

function newApplication(req, res) {
    Dog.findById(req.params.id)
        .then(function (dog) {
            res.render('applications/new', { title: 'Add Application', dog })
        }).catch(function (err) {
            console.log(err)
            res.redirect(`/dog/${req.params.id}`)
        })
}

function create(req, res) {
    Dog.findById(req.params.id)
        .then(function (dog) {
            Application.create({
                name: req.body.name,
                phone: req.body.phone,
                emailAddress: req.body.emailAddress,
                numberOfPets: req.body.numberOfPets,
                address: req.body.address,
                message: req.body.message,
                dog: dog._id,
                user: req.user._id,
                userName: req.user.name,
                userAvatar: req.user.avatar
            }).then(function () {
                // console.log(req.body)
                res.redirect(`/dogs/${req.params.id}`)

            })
                .catch(function (err) {
                    console.log(err)
                    res.redirect(`/dogs/${req.params.id}`)
                })

        }).catch(function (err) {
            console.log(err)
            res.redirect(`/dogs/${req.params.id}`)

        })
}

function edit(req, res) {
    Application.findById(req.params.id)
        .then(function (application) {
            console.log('this is the application', application)
            res.render('applications/edit', { title: 'Edit Application', application })
        }).catch(function (err) {
            console.log(err)
            res.redirect('/')
        })
}

function updateOne(req, res) {
    Application.findByIdAndUpdate(req.params.appId , req.body, { new: true })
        .then(function (application) {
            console.log('this is the updated application', application)

            res.redirect(`/dogs/${req.params.dogId}`)


        }).catch(function (err) {
            console.log(err)
            res.redirect(`/dogs/${req.params.id}`)
        })
}

function deleteOne(req, res) {
    // console.log('This is the req:', req.body)

    Dog.findById(req.body.dog)
    .then(function(dog) {
        console.log('This is the dog:', dog)
        Application.deleteOne({_id: req.params.id})
        .then(function(results) {
            console.log('These are the results:', results)
            res.redirect(`/dogs/${dog._id}`)
        })
        .catch(function(err) {
            console.log(err)
            res.redirect(`/dogs`)
        })
    })
    .catch(function(err) {
        console.log(err)
        res.redirect('/dogs')
    })
}
