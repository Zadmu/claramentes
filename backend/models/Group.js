const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    name: String,
    description: String,
    comments: Array,
    events: Array,
    user_ids: Array,
    admins: Array,
    picture: String
})

module.exports = mongoose.model('Group', Group);