import React from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";

const Comment = (imgLink, name, date, comment, likes=0) => {
  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt={name} src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
          <p style={{ textAlign: "left" }}>
            {comment}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {date}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Comment;
