const express = require('express')
const router = express.Router()

// Import Routes
const index = require('./_modules/main')
const login = require('./_modules/login')

router.use('/api', index)
router.use('/api/login', login)

module.exports = router