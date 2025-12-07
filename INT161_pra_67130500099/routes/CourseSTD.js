const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courses-controller')
const stdController = require('../controllers/student-controller')

router.get('/67130500099/courses', courseController.getCourse)
router.get('/67130500099/courses/:id/students', courseController.getStdById)


router.post('/67130500099/students/:id/courses', stdController.addCourseSTD)
router.delete('/67130500099/students/:id/courses/:course_id', stdController.removeCourseSTD)

module.exports = router