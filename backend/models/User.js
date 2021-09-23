const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    intrested_topics: Array,
    first_name: String,
    last_name: String,
    username: String,
    birthday: String,
    group_ids: Array,
    course_ids: Array,
})

module.exports = mongoose.model('User', User);