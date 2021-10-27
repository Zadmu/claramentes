const { isInteger } = require('formik');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    username: String,
    imgLink: String,
    comment: String,
    likes: Number,
    date: String,
    course_id: String,
    group_id: String
})

module.exports = mongoose.model('Comment', Comment);