const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    course_id: String,
    name: String,
    content: String,
    date: String
})

module.exports = mongoose.model('Lesson', Lesson);