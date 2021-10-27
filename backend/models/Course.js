const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    id: String,
    type: String,
    admins: Array,
    name: String,
    lessons: Array,
    topics: Array,
    description: String,
    user_ids: Array,
    comments: Array,
    picture: String,
    qualification: String,
})

module.exports = mongoose.model('Course', Course);