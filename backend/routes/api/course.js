const express = require('express');
const Comment = require('../../models/Comment.js');
const Course = require('../../models/Course.js');
const { check, validationResult } = require('express-validator');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.get("/:id/get_all", async(req, res)=>{
    const course = await Course.findOne({_id: req.params.id});
    if(!course) {
        return res.status(404).send({
            message: "This course does not exist"
        })
    }
    else {
        return res.status(201).send(course);
    } 
})

router.get("/get_ids", async(req, res)=>{
    Course.find({}, (err, courses) => {
        let course_ids = courses.map((course) => course._id);
        if(!course_ids) {
            return res.status(404).send({
                message: "No courses exist"
            })
        }
        else {
            return res.status(201).send(course_ids);
        }
    })
})

router.post("/create", [
    check("admins").isArray(),
    check("name").notEmpty().isString(),
    check("lessons").isArray(),
    check("discription").notEmpty().isString(),
    check("user_ids").isArray(),
    check("comments").isArray(),
], async (req, res) => {
    const schemaValidationErrors = validationResult(req);

    if (!schemaValidationErrors.isEmpty()) {
        console.log(schemaValidationErrors)
        return res.status(400).send({
            message: 'The inputs you entered to update are invalid'
        })
    }

    const newCourse = new Course(req.body)
    newCourse.save().catch(err => console.log(err));
    res.status(201).send(newCourse);
})

router.put("/:id/comments/add", [
    check("id").notEmpty(),
    check("imgLink").notEmpty().isString(),
    check("name").notEmpty().isString(),
    check("date").notEmpty().isString(),
    check("comment").notEmpty().isString(),
    check("likes").notEmpty()
], async (req, res)=> {
    const schemaValidationErrors = validationResult(req);

    if (!schemaValidationErrors.isEmpty()) {
        console.log(schemaValidationErrors)
        return res.status(400).send({
            message: 'The inputs you entered to are invalid'
        })
    }

    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(400).send({
            message: ' You sent an invalid course id.'
        })
    }

    const newComment = new Comment(req.body)

    console.log(id)

    Course.findOneAndUpdate({_id: id}, {
        $push: {comments: newComment}
    }).then(course => {
        if (!course) {
            res.status(404).send({
                message: 'Comments were not found!'
            })
        }
        else {
            res.status(200).send(req.body)
        }
    })
 
})

router.get("/:id/comments/get", async (req, res) => {

    const course = await Course.findOne({_id: req.params.id})

    if(!course) {
        return res.status(404).send({
            message: "This course does not exist"
        })
    }
    else {
        return res.status(201).send(course.comments);
    }

})

module.exports = router;