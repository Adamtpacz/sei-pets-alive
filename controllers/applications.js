const Application = require('../models/Application')
const Dog = require('../models/Dog')

module.exports = {
    create,
    new: newApplication,
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
                message: req.body.message


            }).then(function () {
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
