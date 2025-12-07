const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addCourse: async function (courseId, stdId, grade) {
        return prisma.course_student.create({
            data: {
                course_id: courseId,
                student_id: stdId,
                grade
            }
        });
    },
    removeCourse: async function (courseId, stdId) {
        return prisma.course_student.delete({
            where: {
                course_id_student_id: {
                    course_id: courseId,
                    student_id: stdId
                }
            }
        });
    },
    findStudentsByCourseId: async function (courseId) {
        return prisma.course_student.findMany({
            where: { course_id: courseId },
            include: { students: true }
        });
    }
}
