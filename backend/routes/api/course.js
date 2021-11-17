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
        type: req.body.type,
        admins: req.body.admins,
        name: req.body.name,
        topics: req.body.topics,
        lessons: req.body.lessons,
        description: req.body.description,
        user_ids: req.body.user_ids,
        comments: req.body.comments,
        picture: req.body.picture,
        qualification: req.body.qualification,
        instructor: req.body.instructor
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
            type: course.type,
            admins: course.admins,
            name: course.name,
            lessons: course.lessons,
            topics: course.topics,
            description: course.description,
            user_ids: course.user_ids,
            comments: commentsArray,
            picture: course.picture,
            qualification: course.qualification,
            teacher: course.teacher
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
            type: course.type,
            admins: course.admins,
            name: course.name,
            lessons: lessonsArray,
            topics: course.topics,
            description: course.description,
            user_ids: course.user_ids,
            comments: course.comments,
            picture: course.picture,
            qualification: course.qualification,
            teacher: course.teacher
        }
        await Course.findOneAndUpdate(query, updatedCourseValues);
        newLesson.save().catch(err => console.log(err));
        res.status(201).send(newLesson);
    }
})

// delete comment
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

//All coourses
router.get('/all/courses', async (req, res) => {

    const courses = await Course.find();

    if (courses.length == 0){
        return res.status(404).send({message: 'No courses found'})
    } else {
        return res.status(201).send(courses);
    }
})


//Course Topics Get Requests

router.get('/topics/STEM', async (req, res) => {

    const courses = await Course.find({topics: { $in: ["math","science","technology"]} }, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No math courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })



router.get('/topics/humanities', async (req, res) => {

    const courses = await Course.find({topics: { $in: ["humanities","history","english","philosophy","art"]} }, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No humanities courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })
 
 router.get('/topics/languages', async (req, res) => {
     
    const courses = await Course.find({topics: { $in: ["language","spanish","chinese"]} }, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No language courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/socialsciences', async (req, res) => {
     
    const courses = await Course.find({topics: { $in: ["social science","history","sociology"]} }, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No social science courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/socialsciences', async (req, res) => {
     
    const courses = await Course.find({topics: { $in: ["history","sociology"]} }, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No social science courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })
 
 router.get('/topics/tradeskills', async (req, res) => {

    const courses = await Course.find({topics: "trade skills"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No trade skill courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/science', async (req, res) => {

    const courses = await Course.find({topics: "science"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No science courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/technology', async (req, res) => {

    const courses = await Course.find({topics: "technology"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No technology courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/engineering', async (req, res) => {

    const courses = await Course.find({topics: "engineering"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No engineering courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/math', async (req, res) => {

    const courses = await Course.find({topics: "math"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No math courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/biology', async (req, res) => {

    const courses = await Course.find({topics: "biology"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No biology courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/chemistry', async (req, res) => {

    const courses = await Course.find({topics: "chemistry"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No chemistry courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/physics', async (req, res) => {

    const courses = await Course.find({topics: "physics"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No physics courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/art', async (req, res) => {

    const courses = await Course.find({topics: "art"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No art courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/acting', async (req, res) => {

    const courses = await Course.find({topics: "acting"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No acting courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/philosophy', async (req, res) => {

    const courses = await Course.find({topics: "philosophy"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No philosophy courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/literature', async (req, res) => {

    const courses = await Course.find({topics: "literature"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No literature courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/religion', async (req, res) => {

    const courses = await Course.find({topics: "religion"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No religion courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/mandarin', async (req, res) => {

    const courses = await Course.find({topics: "mandarin"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No mandarin courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/russian', async (req, res) => {

    const courses = await Course.find({topics: "russian"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No russian courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/spanish', async (req, res) => {

    const courses = await Course.find({topics: "spanish"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No spanish courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/hebrew', async (req, res) => {

    const courses = await Course.find({topics: "hebrew"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No hebrew courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/arabic', async (req, res) => {

    const courses = await Course.find({topics: "arabic"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No arabic courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/latin', async (req, res) => {

    const courses = await Course.find({topics: "latin"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No latin courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/geography', async (req, res) => {

    const courses = await Course.find({topics: "geography"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No geopgraphy courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/psychology', async (req, res) => {

    const courses = await Course.find({topics: "psychology"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No psychology courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/economics', async (req, res) => {

    const courses = await Course.find({topics: "economics"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No economics courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/politicalscience', async (req, res) => {

    const courses = await Course.find({topics: "political science"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No political science courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/sociology', async (req, res) => {

    const courses = await Course.find({topics: "sociology"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No sociology courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

 router.get('/topics/law', async (req, res) => {

    const courses = await Course.find({topics: "law"}, {_id: 1, name: 1, qualification:1, instructor:1, picture:1});
 
    if (courses.length == 0){
        return res.status(404).send({message: 'No law courses found'})
    } else {
        return res.status(201).send(courses);
    }
 })

module.exports = router;