const express = require('express');
const Comment = require('../../models/Comment.js');
const Group = require('../../models/Group.js');
const Event = require('../../models/Event.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//Create Group
router.post("/create", async (req, res) => {

    const group = await Group.findOne({id: req.body.id});

    if (group) {
        return res.status(400).send({
            message: "This group already exists, cannot create new group."
        })
    }
    else {
    const newGroup = new Group(req.body)
    newGroupe.save().catch(err => console.log(err));
    res.status(201).send(newGroup);
    }
});

router.get('/:id', async (req, res) => {

    const group = await Group.findOne({id: req.params.id});
  
    if (!group) {
        res.status(400).send({
            message: 'This group does not exist.'
        })
    }
    else{
        return res.status(200).send(group);
    };
})

//Edit Group
router.put('/edit/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Group.findOneAndUpdate(query, {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        comments: req.body.comments,
        events: req.body.events,
        user_ids: req.body.user_ids,
        admins: req.body.admins,
        picture: group.picture
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'Group not found. cannot update!'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Delete Group
router.delete('/delete/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Group.findOne(query).then(group => {
        if (!group) {
            res.status(404).send({
                message: 'Group not found, cannot delete!'
            })
        } else {
        Group.remove().then(() => res.status(200).send({
            message: 'Deleted group ' + req.body.name
        }))
    }}).catch(err => res.status(400).json(err));
})

router.post('/add/comment/:id', async (req, res) => {
    const groupId = req.params.id;
    const groupObjectId = ObjectId(groupId);
    const group = await Group.findById(groupObjectId);

    if (!group) {
        res.status(404).send({});
    } else {
        const newComment = new Comment(req.body);
        const query = {_id: groupObjectId};
        const commentsArray = group.comments;
        commentsArray.push(newComment._id);
        const updatedGroupValues = {
            id: group.id,
            admins: group.admins,
            name: group.name,
            description: group.description,
            user_ids: group.user_ids,
            events: group.events,
            comments: commentsArray,
            picture: group.picture
        }
        await Group.findOneAndUpdate(query, updatedGroupValues);
        newComment.save().catch(err => console.log(err));
        res.status(201).send(newComment);
    }
})

router.post('/add/event/:id', async (req, res) => {
    const groupId = req.params.id;
    const groupObjectId = ObjectId(groupId);
    const group = await Group.findById(groupObjectId);

    if (!group) {
        res.status(404).send({});
    } else {
        const newEvent = new Event(req.body);
        const query = {_id: groupObjectId};
        const eventsArray = group.events;
        eventsArray.push(newEvent._id);
        const updatedGroupValues = {
            id: group.id,
            admins: group.admins,
            name: group.name,
            description: group.description,
            user_ids: group.user_ids,
            events: eventsArray,
            comments: group.comments,
            picture: group.picture,
        }
        await Group.findOneAndUpdate(query, updatedGroupValues);
        newEvent.save().catch(err => console.log(err));
        res.status(201).send(newEvent);
    }
})

router.get('/comments/:id', async (req, res) => {
    const groupId = req.params.id;

    const comments = await Comment.find({course_id: groupId});
    
    if (comments.length == 0) {
        return res.status(404).send({});
    } else {
        return res.status(201).send(comments);
    }
});

router.get('/events/:id', async (req, res) => {
    const groupId = req.params.id;

    const events = await Event.find({course_id: groupId});
    
    if (events.length == 0) {
        return res.status(404).send({});
    } else {
        return res.status(201).send(events);
    }
});

module.exports = router;