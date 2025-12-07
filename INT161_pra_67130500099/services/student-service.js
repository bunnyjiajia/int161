const stdRepo = require("../repositories/student-repository");

async function getStdById(courseId) {
    return await stdRepo.findStudentsByCourseId(courseId);
}

async function addCoursetostd(courseId, stdId, grade) {
    return await stdRepo.addCourse(courseId, stdId, grade);
}

async function removeCourse(courseId, stdId) {
    return await stdRepo.removeCourse(courseId, stdId);
}

module.exports = { getStdById, addCoursetostd, removeCourse };
