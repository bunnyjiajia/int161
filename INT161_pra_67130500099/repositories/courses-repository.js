const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async function (
        pageRequest = { page:1, pageSize:1 },
        sortRe = { sortBy:'id', order:'asc' },
    ) {
        const { page, pageSize } = pageRequest
        const { sortBy, order } = sortRe

        const validOrder = order === 'desc' ? 'desc' : 'asc'

        const totalItems = await prisma.courses.count()
        const data = await prisma.courses.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: {
                [sortBy]: validOrder
            }
        })

        return {
            data,
            page,
            pageSize,
            totalPages: Math.ceil(totalItems / pageSize)
        }
    },

    findStudentsByCourseId: async function (courseId) {
        return prisma.course_student.findMany({
            where: { course_id : courseId },
            include: {
                students: true
            }
        })
    }
}
