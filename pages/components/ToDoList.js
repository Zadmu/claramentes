import { PostAdd } from '@material-ui/icons';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      margin: 20,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const ToDoList = ({posts}) => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [due, setDue] = useState('');
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    

    const handleExpandClick = (index) => {
        setExpanded(!expanded);
        setActiveIndex(index);
      };

    const renderList = posts.map((post, index) => {
        const active = index === activeIndex ? expanded : false;
        return(
            <div key = {post.title}>
                <Card className={classes.root} variant="outlined">
                    <CardHeader 
                        title={post.title}
                        subheader={post.due}
                    />
                    <CardContent>
                        <Typography paragraph>
                            {post.text}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick = {() => handleExpandClick(index)}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={active} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {post.helpfulInfo}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>

        );
    })

    return(
        <div>
            {renderList}
        </div>
    );


}

export default ToDoList;