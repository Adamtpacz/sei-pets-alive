const Dog = require('../models/Dog')

module.exports = {
    index
}

function index(req, res) {
    Dog.find({})
    .then(function(dogs) {
        res.render('dogs/index', {dogs, title: 'All Dogs'})
    })
    .catch(function(err) {
        console.log(err)
        res.redirect('/')
    })
}