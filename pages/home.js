import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecommendedCourses from './components/RecommendedCourses';
import { DASHBOARD_GET_USER } from '../utils/api-defs';
import { useRouter } from 'next/router';
import styled from "styled-components";

import Comments from './components/Comments'
import comments from './../data/comments.json'

import TopicCarousel from './components/carousel/TopicCarousel';
import GroupNavigator from './components/GroupNavigator';

import CourseCard from './components/CourseCard';
import GroupCard from './components/GroupCard';

//fake data
const images = [
  { name: 'Math', imageUrl: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png' },
  { name: 'Science', imageUrl: 'https://static.thenounproject.com/png/62984-200.png' },
  { name: 'English', imageUrl: 'https://cdn1.iconfinder.com/data/icons/language-studies-thick-outline/33/language-04-512.png' },
  { name: 'Social Studies', imageUrl: 'https://www.highmeadowschool.org/wp-content/uploads/2016/11/globe-icon.png' }
]

const groups = [
  { name: 'my group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 10 },
  { name: 'study group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 22 },
  { name: 'my cult', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 34 },
  { name: 'i hate math', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 5 },
  { name: 'join', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 1 },
]

const groups2 = [
  {
    name: "Chem Study Group",
    admins: "John Smith",
    lessons: [],
    description: "             HEY GUYS! This is the Chemistry 101 study group. Feel free to discuss concepts, times to meet, and more. You guys are also welcome to add to-do list items if I forget, like homework, assessments, and more. You can post videos in the discussion tab, and also include links in the to-do list cards. I’m John, a junior at Wildcats high school. My email is jsmith@gmail.com if you want to contact me. I have taken college prep chemistry and am now taking AP chem. I made this group for people like me who like to learn with other people, which is why this website is so helpful. If you would like to set up a study session feel free to, and I will definitely join. Have fun learning chem!",
    comments: [],
    picture: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
  },

  {
    name: "Fairy Tales Book Club",
    admins: "HOBO McARTHER",
    lessons: [],
    description: "",
    comments: [],
    picture: "https://images.theconversation.com/files/222025/original/file-20180606-137291-gkez6w.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
  },

  {
    name: "Marathon Training",
    admins: "Joanne Joanne",
    lessons: [],
    description: "",
    comments: [],
    picture: "https://media.wired.com/photos/59322fcf26780e6c04d2a348/16:9/w_929,h_523,c_limit/running-pain-inline.jpg"
  }
]


//add cookies (to save credentials somewhere)
export default function Home({ email, name, userData }) {
  const [term, setTerm] = useState('');

  const router = useRouter();
  const as = "/signup";


  console.log(userData);
  console.log(email, name)

  /*useEffect(() => {
    // Dons't run
    if(!email && !name){
      router.push({pathname: "/"})
    }
  
    if (!userData){
      router.push({pathname:"/signup", query: {email: email, name:name, userData}}, as);
    }

  },[]);*/ // commented out till backend is working

  return (
    <Background>
      <div>
        <Header />
      </div>
      <CarouselWrapper>
        <TopicCarousel images={images} />
      </CarouselWrapper>
      <RecommendedWrapper>
        <RecommendText>Recommended Courses</RecommendText>
        <CourseCard />
        <RecommendText>Recommended Groups</RecommendText>
        <GroupCard groups={groups2} />
      </RecommendedWrapper>
    </Background>
  );
}

const Background = styled.div`
  background: #242424;
`;

const CarouselWrapper = styled.div`

`;

const RecommendedWrapper = styled.div`
  background: #323855;
  margin-top: 30px;
`;

const RecommendText = styled.h1`
  position: center;
  font-size: 30px;
  left: 39%;
  padding: 1em;
  color: #F4EED9;
`;
