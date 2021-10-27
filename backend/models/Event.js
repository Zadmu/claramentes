const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    id: String,
    course_id: String,
    description: String,
    date_created: String,
    due_date: String,
    header: String
})

module.exports = mongoose.model('Event', Event);