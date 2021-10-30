import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import DropdownNav from './DropdownNav';
import Link from 'next/link';
import styled from "styled-components";

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
	{path: "MyProfile", title: "My Profile"},
  {path: "MyCourses", title: "My Courses"},
  {path: "group/groupid", title: "My Groups"}
]
  
const MainPages = [
  {path: "BrowseVideos", title: "Browse Videos"},
  {path: "LocalOpportunities", title: "Local Opportunities"},
  {path: "topicsPage", title: "Explore Topics"}
]


const Header = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  
  return (
    <div className= {classes.root}>
      <HeaderBackground>
          <LDropDownWrapper>
            <DropdownNav className = "ExploreText" pages = {MainPages} title = "Explore"/>
          </LDropDownWrapper>
          <Link href = "http://localhost:3000/home">
            <Image/>
          </Link>
          <RDropDownWrapper>
            <DropdownNav pages = {ProfilePages} title = "Account"/>
          </RDropDownWrapper>
      </HeaderBackground>
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
  left: -2%;
  right: 41.39%;
  top: 0%;
  bottom: 0%;
  height: 70px;
  width: 210px;
  background: url('https://cdn.discordapp.com/attachments/711984521872146527/903183210807185418/claramentes_logo.PNG');
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
`;

export default Header;