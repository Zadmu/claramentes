const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    type: "group",
    id: String,
    name: String,
    discription: String,
    comments: Array,
    events: Array,
    user_ids: Array,
    admins: Array
})

module.exports = mongoose.model('Group', Group);