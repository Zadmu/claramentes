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
import { Carousel } from 'react-responsive-carousel';

//fake data
const images = [
  {name: 'Math', imageUrl: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png'},
  {name: 'Science', imageUrl: 'https://static.thenounproject.com/png/62984-200.png'},
  {name: 'English', imageUrl: 'https://cdn1.iconfinder.com/data/icons/language-studies-thick-outline/33/language-04-512.png'},
  {name: 'Social Studies', imageUrl: 'https://www.highmeadowschool.org/wp-content/uploads/2016/11/globe-icon.png'}
]

const groups = [
  {name: 'my group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 10},
  {name: 'study group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 22},
  {name: 'my cult', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 34},
  {name: 'i hate math', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 5},
  {name: 'join', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 1},
]

//add cookies (to save credentials somewhere)
export default function Home({email, name, userData}) {
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
        <TopicCarousel images = {images}/>
      </CarouselWrapper>
      <RecommendedWrapper>
        <RecommendText>Recommended Courses</RecommendText>
        <RecommendedCourses/>
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
`;

const RecommendText = styled.h1`
  position: center;
  left: 39%;
  padding: 1em;
  color: #F4EED9;
`;
