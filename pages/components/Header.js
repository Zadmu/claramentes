import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import DropdownNav from './DropdownNav';
import Link from 'next/link';
import styled from "styled-components";
import headerStyles from "../../css/header.module.css";

const theme = createMuiTheme({
  palette: {
    pale: {
        main: '#F4EED9',
        contrastText: '#383838'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


const ProfilePages = [
	{path: "myprofile", title: "My Profile"},
  {path: "mycourses", title: "My Courses"},
  {path: "group/groupid", title: "My Groups"}
]
  
const MainPages = [
  {path: "topics", title: "Explore Topics"},
  {path: "groups", title: "Explore Groups"},
  {path: "videos", title: "Browse Videos"}
]


const Header = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  
  return (
    <div className= {classes.root}>
      <div className = {headerStyles.headerBackground}>
          <div className = {headerStyles.lDropdownWrapper}>
            <DropdownNav className = "ExploreText" pages = {MainPages} title = "Explore"/>
          </div>
          <Link href = "http://localhost:3000/home">
            <img className = {headerStyles.headerLogo}/>
          </Link>
          <div className = {headerStyles.rDropdownWrapper}>
            <DropdownNav pages = {ProfilePages} title = "Account"/>
          </div>
      </div>
    </div>
  );
}

const HeaderBackground = styled.div`
  box-shadow: 0px 0px 15px 3px gray;
  background: #F4EED9;
  position: relative;
  height: 80px;
  display:flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center
  `;

const LDropDownWrapper = styled.div`
  position: absolute;
  padding: .5em;
  left: 2%;
  height: 50px;
  width: 150px;
  text-align: center;
  padding-left: 2em;
  padding-right 2em;

  background: #BCBCBC;
  box-shadow: 0px 0px 4px 2px
    rgba(0, 0, 0, 0.1);
`;

const RDropDownWrapper = styled.div`
  position: absolute;
  right: 2%;
  height: 50px;
  width: 150px;
  text-align: center;
  padding: .5em;
  padding-left: 2em;
  padding-right 2em;

  background: #BCBCBC;
  box-shadow: 0px 0px 4px 2px
    rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 0%;
  bottom: 0%;
  height: 70px;
  width: 210px;
  background: url('https://cdn.discordapp.com/attachments/711984521872146527/903183210807185418/claramentes_logo.PNG');
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
`;

export default Header;