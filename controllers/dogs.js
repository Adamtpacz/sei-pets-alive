const Dog = require('../models/Dog')
const Application = require('../models/Application')

module.exports = {
    index,
    show,


}

function index(req, res) {
    Dog.find({})
        .then(function (dogs) {
            res.render('dogs/index', { dogs, title: 'All Dogs' })
        })
        .catch(function (err) {
            console.log(err)
            res.redirect('/')
        })
}

function show(req, res) {
    Dog.findById(req.params.id)
        .then(function (dog) {
            console.log(dog._id)
            Application.find({ dog: dog._id })

                .then(function (applications) {
                    res.render('dogs/show', { title: 'Dog', dog, applications })
                })

        })
        .catch(function (err) {
            console.log(err)
            res.redirect('/dogs/')
        })
}
