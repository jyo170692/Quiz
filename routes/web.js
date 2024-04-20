const express = require('express')
const router = express.Router()



const QuirController = require('../Controllers/QuizController')


router.get('/',QuirController.home)
router.post('/insert',QuirController.insert)
router.get('/submit',QuirController.submit)
router.get('/view',QuirController.view)


module.exports = router