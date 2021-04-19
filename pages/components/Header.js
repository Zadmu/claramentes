import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from './Search';
import SearchFilter from './SearchFilter';
import DropdownNav from './DropdownNav';
import Link from 'next/link';


//data
import filters from '../../data/filters.json'
import courses from '../../data/courses.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


const ProfilePages = [
  {path: "login", title: "Login"},
	{path: "MyProfile", title: "My Profile"},
	{path: "MyVideos", title: "My Videos"},
	{path: "FollowingList", title: "My Following List"},
  {path: "group/groupid", title: "My Groups"},
  {path: "MyCourses", title: "My Courses"}
]
  
const MainPages = [
  {path: "BrowseVideos", title: "Browse Videos"},
  {path: "LocalOpportunities", title: "Local Opportunities"},
  {path: "Topics", title: "Topics"}
]


const Header = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  
  return (
    <div className= {classes.root}>
      <AppBar position="static" color = "transparent">
        <Toolbar>
          <div>
            <DropdownNav pages = {MainPages} title = "Explore"/>
          </div>
          <div>
            <Search term = {term} setTerm = {setTerm}/>
          </div>
          <div align = "center">
            <SearchFilter filters={filters} courses={courses} term = {term}/>
          </div>
          <Link href = "http://localhost:3000/home">
            <Typography variant="h6" className={classes.title} align = "center">
              Claramentes
            </Typography>
          </Link>
          <div>
            <DropdownNav pages = {ProfilePages} title = "Account"/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;