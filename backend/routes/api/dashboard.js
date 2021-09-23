const express = require('express');
const User = require('../../models/User.js');
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

module.exports = router;