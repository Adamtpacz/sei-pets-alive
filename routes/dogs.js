const express = require('express')
const router = express.Router()

const dogsCtrl = require('../controllers/dogs')

// GET index route for dogs resource
router.get('/', dogsCtrl.index)

// GET show route for dogs resource
router.get('/:id', dogsCtrl.show)


module.exports = router
