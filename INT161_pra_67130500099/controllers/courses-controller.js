const stdService = require("../services/student-service");

async function addCourseSTD(req, res) {
    try {
        const stdId = Number(req.params.id);
        const { course_id, grade } = req.body;

        if (isNaN(stdId) || !course_id || grade == null) {
            return res.status(400).send({ error: "Missing or Invalid fields" });
        }

        const result = await stdService.addCoursetostd(course_id, stdId, grade);
        res.status(200).json(result);

    } catch (e) {
        if (e.code === 'P2002') {
            return res.status(409).send({ error: "Course already exists" });
        }
        res.status(500).json({ error: e.message });
    }
}

async function removeCourseSTD(req, res) {
    try {
        const stdId = Number(req.params.id);
        const course_id = Number(req.params.course_id);

        if (isNaN(stdId) || isNaN(course_id)) {
            return res.status(400).send({ error: "Missing or Invalid fields" });
        }

        await stdService.removeCourse(course_id, stdId);
        res.status(204).send();

    } catch (e) {
        if (e.code === 'P2001') {
            return res.status(404).json({ error: "course not found" });
        }
        res.status(500).json({ error: e.message });
    }
}

module.exports = { addCourseSTD, removeCourseSTD };
