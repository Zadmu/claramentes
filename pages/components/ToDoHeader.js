import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ToDoFilter from './ToDoFilter';
import AddAssignment from './AddAssignment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        height: theme.spacing(10),  
        },
    },
    title: {
        margin: theme.spacing(2),
    },
    addAssignment: {
        margin: theme.spacing(2)
    }
}));


const ToDoHeader = ({setFilteredPosts}) => {
    const classes = useStyles();

    return (
        <div>
            <Paper className= {classes.root}>
                <Grid container>
                    <Grid item className = {classes.title}>
                        <Typography variant="h6" className={classes.title}>
                            Assignments
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ToDoFilter setFilterPosts = {setFilteredPosts}/>
                    </Grid>
                    <Grid item className = {classes.addAssignment}>
                        <AddAssignment />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default ToDoHeader;