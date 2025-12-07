require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/CourseSTD')

app.use(express.json());
app.use('/api', router);
app.use((req,res) => {
    res.status(404).send('Not Found');
})



module.exports = app;
