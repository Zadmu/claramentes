import React, { useState, useEffect } from 'react';
import { Avatar, Grid, Paper } from "@material-ui/core";
import Comment from "./Comment"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {POST_COMMENT} from '../../utils/api-defs';

const Comments = ({user_id, imgLink, name, page_id, type}) => {

    const [comment, setComment] = useState("");
    const comments = useState("");
    const [renderedComments, setRenderedComments] = useState(comments.map((comment)=>Comment(comment.imgLink, comment.name, comment.date, comment.comment, comment.likes)))

    imgLink = "https://thispersondoesnotexist.com/image"

    const addComment = () => {
        // Resets comment field
        setComment("")
        
        // Creates new date
        let date = new Date()
        date = date.toLocaleString('en-US', { month: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        
        // Adds created comment object to list of comments
        // Should be replaced with the following protocols
        // post on the comments model -> object id
        // put on group model <- object id
        // get on group model

        // Posts the comment
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            user_id: user_id,
            imgLink: imgLink,
            name: name,
            date: date,
            comment: comment,
            likes: 0 
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // fetch(POST_COMMENT(page_id, type), requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        // fetch(POST_COMMENT(page_id, type), {
        //     user_id: user_id,
        //     imgLink: imgLink,
        //     name: name,
        //     date: date,
        //     comment: comment,
        //     likes: 0 
        // });

        setRenderedComments([...renderedComments, Comment(imgLink, name, date, comment, 0)])
    };

    // Scorable with load more
    // React-Scroll
    return (
        <div style={{ padding: 14 }}>
            <Paper style={{ padding: "20px 20px", marginTop: 100 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt={name} src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs>
                        <h4 style={{ margin: 10, textAlign: "left" }}>{name}</h4>
                        <TextField
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            style = {{margin: 10, textAlign: "right"}}
                        />
                        <Button variant="contained" color="primary" onClick={addComment} style={{margin: 20, textAlign: "right"}}>
                            Comment
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            {renderedComments}
        </div>
    );
}

export default Comments;
