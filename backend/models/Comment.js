const { isInteger } = require('formik');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    id: String,
    user_id: String,
    comment: String,
    likes: Number,
    date: String
})

module.exports = mongoose.model('Comment', Comment);