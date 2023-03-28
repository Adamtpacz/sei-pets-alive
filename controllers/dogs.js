const Dog = require('../models/Dog')

module.exports = {
    index,
    show
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

function show(req,res){
    Dog.findById(req.params.id)
        .then(function(dog){
            res.render('dogs/show', {title:'Dog', dog})
        })
        .catch(function (err) {
            console.log(err)
            res.redirect('/dogs/')
        })
}