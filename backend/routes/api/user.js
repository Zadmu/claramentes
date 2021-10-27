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

//other
    // var updatedAuthorValues = {
    //     // 
    // }
    // const updatedResponse = await AuthorProfile.findOneAndUpdate(query, updatedAuthorValues);

    // if (!updatedResponse) { 
    //     return res.status(404).send({})
    // } else {
    //     return res.status(200).send(updatedAuthorValues)
    // }


    //Adds a course to a User profile by editing course_ids
// router.put("/:email/addcourse", async (req, res)=> {

//     const email = req.params.email;
//     if (!ObjectId.isValid(email)) {
//         res.status(400).send({
//             message: 'This account does not exist.'
//         })
//     }


//     User.findOneAndUpdate({email: email}).then(course => {
//         if (!course) {
//             res.status(404).send({
//                 message: 'Course were not found!'
//             })
//         }
//         else {
//             res.status(200).send(req.body)
//         }
//     })
 
// })

//Adds a group to a User profile by editing group_ids
// router.put("/:email/addgroup", [
//     check("id").notEmpty(),
//     check("imgLink").notEmpty().isString(),
//     check("name").notEmpty().isString(),
//     check("date").notEmpty().isString(),
//     check("comment").notEmpty().isString(),
//     check("likes").notEmpty()
// ], async (req, res)=> {
//     const schemaValidationErrors = validationResult(req);

//     if (!schemaValidationErrors.isEmpty()) {
//         console.log(schemaValidationErrors)
//         return res.status(400).send({
//             message: 'The inputs you entered to are invalid'
//         })
//     }

//     const id = req.params.id;
//     if (!ObjectId.isValid(id)) {
//         res.status(400).send({
//             message: ' You sent an invalid course id.'
//         })
//     }

//     const newComment = new Comment(req.body)

//     console.log(id)

//     Course.findOneAndUpdate({_id: id}, {
//         $push: {comments: newComment}
//     }).then(course => {
//         if (!course) {
//             res.status(404).send({
//                 message: 'Courses not found!'
//             })
//         }
//         else {
//             res.status(200).send(req.body)
//         }
//     })
 
// })

// router.get('/user/:email/allcourses', (req, res) => {
//     Course.find({email: req.params.email}).then(courses => {
//         return res.status(200).send(courses);
//     });
// });

// router.get('/user/:email/allgroups', (req, res) => {
//     Group.find({email: req.params.email}).then(groups => {
//         return res.status(200).send(groups);
//     });
// });