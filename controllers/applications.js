const Application = require('../models/Application')
const Dog = require('../models/Dog')

module.exports = {
    create,
    new: newApplication,
    edit,
    updateOne

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
                dog: dog._id


            }).then(function () {
                console.log(req.body)
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

function edit(req, res){
    Application.findById(req.params.id)
    .then(function(application){
    res.render('applications/edit',  {title: 'Edit Application', application})
}).catch(function(err){
    console.log(err)
    res.redirect('/dogs/')
})
}

function updateOne(req, res){
    Application.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then(function(Application){
        return application.save()
    }).then(function(applicatino){
    console.log(application)

    res.redirect(`/dogs/${req.params.id}`)
    })
    .catch(function (err) {
        console.log(err)
        res.redirect(`/dogs/${req.params.id}`)
})
}
