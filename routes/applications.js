const express = require('express')
const router = express.Router()

const applicationsCtrl = require('../controllers/applications')

router.post('/dogs/:id/applications', applicationsCtrl.create)

router.get('/dogs/:id/applications/new', applicationsCtrl.new)

router.get('/applications/:id/edit', applicationsCtrl.edit)
router.put('/dogs/:dogId/applications/:appId', applicationsCtrl.updateOne)

router.delete('/applications/:id', applicationsCtrl.delete)

module.exports = router
