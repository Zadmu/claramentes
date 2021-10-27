const express = require('express');
const Comment = require('../../models/Comment.js');
const Course = require('../../models/Course.js');
const Lesson = require('../../models/Lesson.js')
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//Create Course
router.post("/create", async (req, res) => {

    const courseId = req.params.id;
    const courseObjectId = ObjectId(courseId);
    const course = await Course.findById(courseObjectId);

    if (course) {
        return res.status(400).send({
            message: "This course already exists, cannot create new course."
        })
    }
    else {
    const newCourse = new Course(req.body)
    newCourse.save().catch(err => console.log(err));
    res.status(201).send(newCourse);
    }
});

//Get Course
router.get('/:id', async (req, res) => {

    const courseId = req.params.id;
    const courseObjectId = ObjectId(courseId);
    const course = await Course.findById(courseObjectId);
    
    if (!course) {
        res.status(400).send({
            message: 'This course does not exist.'
        })
    }
    else{
        return res.status(200).send(course);
    };
});

//Edit Course
router.put('/edit/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Course.findOneAndUpdate(query, {
        id: req.body.id,
        type: req.body.type,
        admins: req.body.admins,
        name: req.body.name,
        topics: req.body.topics,
        lessons: req.body.lessons,
        description: req.body.description,
        user_ids: req.body.user_ids,
        comments: req.body.comments
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'Course not found. cannot update!'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Delete Course
router.delete('/delete/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Course.findOne(query).then(course => {
        if (!course) {
            res.status(404).send({
                message: 'Course not found, cannot delete!'
            })
        } else {
        Course.remove().then(() => res.status(200).send({
            message: 'Deleted course ' + req.body.name
        }))
    }}).catch(err => res.status(400).json(err));
})

//Add Comment to Course
router.post('/add/comment/:id', async (req, res) => {
    const courseId = req.params.id;
    const courseObjectId = ObjectId(courseId);
    const course = await Course.findById(courseObjectId);

    if (!course) {
        res.status(404).send({});
    } else {
        const newComment = new Comment(req.body);
        const query = {_id: courseObjectId};
        const commentsArray = course.comments;  // [1,2,3]
        commentsArray.push(newComment._id); // [1,2,3,4]
        const updatedCourseValues = {
            id: course.id,
            type: course.type,
            admins: course.admins,
            name: course.name,
            lessons: course.lessons,
            topics: course.topics,
            description: course.description,
            user_ids: course.user_ids,
            comments: commentsArray,
            picture: course.picture,
            qualification: course.qualification
        }
        await Course.findOneAndUpdate(query, updatedCourseValues);
        newComment.save().catch(err => console.log(err));
        res.status(201).send(newComment);
    }
})

router.post('/add/lesson/:id', async (req, res) => {
    const courseId = req.params.id;
    const courseObjectId = ObjectId(courseId);
    const course = await Course.findById(courseObjectId);

    if (!course) {
        res.status(404).send({});
    } else {
        const newLesson = new Lesson(req.body);
        const query = {_id: courseObjectId};
        const lessonsArray = course.lessons;
        lessonsArray.push(newLesson._id);
        const updatedCourseValues = {
            id: course.id,
            type: course.type,
            admins: course.admins,
            name: course.name,
            lessons: lessonsArray,
            topics: course.topics,
            description: course.description,
            user_ids: course.user_ids,
            comments: course.comments,
            picture: course.picture,
            qualification: course.qualification
        }
        await Course.findOneAndUpdate(query, updatedCourseValues);
        newLesson.save().catch(err => console.log(err));
        res.status(201).send(newLesson);
    }
})

// delete
// /remove/comment/:courseId/:commentId
// step 1: you need to do a mongoose call on Course . you need course id and do findById
// step 2: you get back a course document and then access the array key field called comments
// step 3: Create new list and push elements from comments array into new list if the commentId from the endpoint params
//does not  matche any commnet object ids in the course comments array (.contains method).
// if !comments.contains(commentId) then push element in comments array into new list and this gets into updated values
// step 4: you need to do findOneAndDelete with the commentId to delete the comment from the Comments table


//Get all comments
router.get('/comments/:id', async (req, res) => {
    const courseId = req.params.id;

    const comments = await Comment.find({course_id: courseId});
    
    if (comments.length == 0) {
        return res.status(404).send({});
    } else {
        return res.status(201).send(comments);
    }
});

router.get('/lessons/:id', async (req, res) => {
    const courseId = req.params.id;
    // const courseObjectId = ObjectId(courseId);

    const lessons = await Lesson.find({course_id: courseId});
    
    if (lessons.length == 0) {
        return res.status(404).send({});
    } else {
        return res.status(201).send(lessons);
    }
});

module.exports = router;