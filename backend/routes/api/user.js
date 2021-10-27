const express = require('express');
const User = require('../../models/User.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//User registration
router.post("/register", async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (user) {
        return res.status(400).send({
            message: "The user already registered"
        })
    }
    else {
        const newUser = new User(req.body)
        newUser.save().catch(err => console.log(err));
        return res.status(201).send(newUser);
    }
});

//Get User
router.get('/:email', async (req, res) => {

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
});

//Edit user details
router.put('/edit/:email', async (req, res) => {
    
    var query = {email: req.body.email};

    User.findOneAndUpdate(query, {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        interested_topics: req.body.interested_topics,
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

//Join Course
router.put('/joincourse/:email', async (req, res) => {
    
    var query = {email: req.body.email};

    User.findOneAndUpdate(query, {
        course_ids: req.body.course_ids
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found. cannot add course.'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Join Group
router.put('/joingroup/:email', async (req, res) => {
    
    var query = {email: req.body.email};

    User.findOneAndUpdate(query, {
        group_ids: req.body.group_ids
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found. cannot add group.'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Delete User
router.delete('/delete/:email', async (req, res) => {
    
    var query = {email: req.body.email};

    User.findOne(query).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found, cannot delete!'
            })
        } else {
        user.remove().then(() => res.status(200).send({
            message: 'Deleted user with the username: ' + req.body.username
        }))
    }}).catch(err => res.status(400).json(err));
})

module.exports = router;