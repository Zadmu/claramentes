import React, { useState, useEffect } from 'react';
import Comment from "./Comment"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Comments = (imgLink, name, comments) => {
    let renderedComments = comments.map((comment)=>Comment(comment.imgLink, comment.name, comment.date, comment.comment, comment.likes)) 
    const [comment, setComment] = useState("");

    const addComment = () => {
        //post request? send comment
    };

    return (
        <div style={{ padding: 14 }}>
            <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt={name} src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
                        <TextField
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            variant="outlined"
                            value={comment}
                            onChange={e => setComment(e)}
                        />
                        <Button variant="contained" color="primary" onClick={addComment}>
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
