const express = require('express')
const router = express.Router()

const applicationsCtrl = require('../controllers/applications')
router.post('/dogs/:id/applications', applicationsCtrl.create)

router.get('/dogs/:id/applications/new', applicationsCtrl.new)

router.get('/dogs/:id/applications/edit', applicationsCtrl.edit)
router.put('/dogs/:id/appications', applicationsCtrl.updateOne)


module.exports = router
