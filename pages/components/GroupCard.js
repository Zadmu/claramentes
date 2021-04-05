import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToDoList from './ToDoList';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing("auto"),  
    },
  },
}));

const GroupCard = () => {
    const [state, setState] = useState('To-Do List');
    const classes = useStyles();

    /*const renderCard = () => {
        if(state.equals('Description')){
            return(
                <div>

                </div>
            );
        }
        else if(state.equals('Discussion')){
            return(
                <div>
                    
                </div>
            );
        }
        else if(state.equals('To-Do List')){
            return(
                <div>
                    <ToDoList />
                </div>
            );
        }
        else{
            <div>
                <p>page not found</p>
            </div>
        }
    }*/

    return (
        <div className={classes.root}>
            <Paper className = "cardForGroup" variant = "outlined" elevation = {3}>
                <div className = "To-Do List">
                    <ToDoList/>
                </div>
            </Paper>
        </div>
  );
}

export default GroupCard