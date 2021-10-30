const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    interested_topics: Array,
    fullName: String,
    username: String,
    birthday: String,
    group_ids: Array,
    course_ids: Array,
})

module.exports = mongoose.model('User', User);