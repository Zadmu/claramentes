const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    id: String,
    type: String,
    admins: Array,
    name: String,
    lessons: Array,
    discription: String,
    user_ids: Array,
    comments: Array,
})

module.exports = mongoose.model('Course', Course);