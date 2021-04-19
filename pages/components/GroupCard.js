import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import posts from '../../data/to-doPosts.json';
import GroupInfo from './GroupInfo';
import Comments from './Comments';
import Navigator from './Navigator';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(90),
      //height: theme.spacing("auto"),
      position: 'absolute',
      top: 180,
      right: 520,
      

    },
  },
}));

const GroupCard = ({activeComponent}) => {
    const [state, setState] = useState('todo');
    const [filteredList, setFilteredList] = useState(posts);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className = "cardForGroup" variant = "outlined" elevation = {3}>
                <div>
                  <Navigator active={activeComponent}>
                    <Comments name="comments"/>
                    <div name = "todo">
                      <ToDoHeader setFilteredPosts = {setFilteredList}/>
                      <ToDoList posts = {filteredList} />
                    </div>
                    <GroupInfo name="info"/>
                  </Navigator>
                </div>
            </Paper>
        </div>
  );
}

export default GroupCard;