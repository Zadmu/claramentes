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
  background: #F4EED9;
  position: relative;
  height = 100px;
  display:flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center
  `;

const LDropDownWrapper = styled.div`
  position: absolute;
  padding: .5em;
  left: 2%;
  padding-left: 2em;
  padding-right 2em;

  background: #BCBCBC;
  box-shadow: 0px 0px 4px 2px
    rgba(0, 0, 0, 0.1);
`;

const RDropDownWrapper = styled.div`
  position: absolute;
  right: 2%;
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
  width: 200px;
  background: url('https://s3-alpha-sig.figma.com/img/a180/ddf8/924cd497199d0d229c3943ea25f7ffa4?Expires=1635120000&Signature=SphY22IthjJYdof~utHs8dasQ7zv-8-Q5CvT1Q8ws0PFYfK7JwRzD8PKEwoaOt1yRC4ESU4RXSzjmnWJgL664oCQxy~wGLkUvjvmZnrHVszP24jANXXMrdWlE1A5Nw4o9IXlL-7e4Yp63lj-xlxXftV6NJPHCTmNBHOee0YW29EteHmTZ80JV1bIBqsVIU1LJdkdl-uTY3YhMh6NPVokIkMMBgbHLGLiRtcXhdSbox93auC2m4Fy~Blo7YspkRLuH84OA9GfGIk03voeXIKuq80xHPCmLj-xgDKo-RE8O7R9MBCIu-rIphgxjBk-Jd3h24WA756IgsscTCz39FMXrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
`;

export default Header;