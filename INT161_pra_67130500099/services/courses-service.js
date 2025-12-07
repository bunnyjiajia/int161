const courseRepo = require("../repositories/courses-repository");

async function getAllCourses(params) {
    return await courseRepo.findAll(params);
}

async function getStdInCourses(courseId) {
    return await courseRepo.findStudentsByCourseId(courseId);
}

module.exports = {getAllCourses,getStdInCourses}