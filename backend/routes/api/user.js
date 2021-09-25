const express = require('express');
const User = require('../../models/User.js');
const Group = require('../../models/Group.js');
const Course = require('../../models/Course.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.post("/register", async (req, res)=> {
    const user = await User.findOne({email: req.body.email});

    if (user) {
        return res.status(404).send({
            message: "The user already registered"
        })
    }
    else {
        const newUser = new User(req.body)
        newUser.save().catch(err => console.log(err));
        return res.status(201).send(newUser);
    }
})

router.get('/user/:email', async (req, res) => {

    const user = await User.findOne({email: req.params.email});
    console.log(user);
    if (!user) {
        res.status(400).send({
            message: ' You sent an invalid email.'
        })
    }
    else{
        return res.status(200).send(user);
    };
})

router.put('/user/edit/:email', async (req, res) => {
    
    var query = {email: req.body.email};

    AuthorProfile.findOneAndUpdate(query, {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        birthday: req.body.birthday,
        group_ids: req.body.group_ids,
        course_ids: req.body.course_ids
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found. cannot update!'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

router.get('/user/:email/allcourses', (req, res) => {
    Course.find({email: req.params.email}).then(courses => {
        return res.status(200).send(courses);
    });
});

router.get('/user/:email/allgroups', (req, res) => {
    Group.find({email: req.params.email}).then(groups => {
        return res.status(200).send(groups);
    });
});

module.exports = router;