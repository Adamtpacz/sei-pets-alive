const express = require('express')
const router = express.Router()

const dogsCtrl = require('../controllers/dogs')

// GET index route for dogs resource
router.get('/', dogsCtrl.index)

module.exports = router