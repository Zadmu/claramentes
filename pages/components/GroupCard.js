import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import posts from '../../data/to-doPosts.json';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(87),
      //height: theme.spacing("auto"),
      position: 'absolute',
      top: 180,
      right: 220,
      

    },
  },
}));

const GroupCard = () => {
    const [state, setState] = useState('To-Do List');
    const [filteredList, setFilteredList] = useState(posts);
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
                    <div className = "Assignments filter">
                        <ToDoFilter/>
                    </div>
                    <div className = "To-Do List">
                        <ToDoList/>
                    </div>
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
                <div>
                    <div className = "Assignments Header">
                        <ToDoHeader setFilteredPosts = {setFilteredList}/>
                    </div>
                    <div className = "To-Do List">
                        <ToDoList posts = {filteredList}/>
                    </div>
                </div>
            </Paper>
        </div>
  );
}

export default GroupCard;