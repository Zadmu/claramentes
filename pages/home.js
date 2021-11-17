import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecommendedCourses from './components/RecommendedCourses';
import { DASHBOARD_GET_USER } from '../utils/api-defs';
import { useRouter } from 'next/router';
import styled from "styled-components";
import homeStyles from '../css/home.module.css';

import { STEM_COURSES } from '../utils/api-defs';
import { ALL_GROUPS } from '../utils/api-defs';

import TopicCarousel from './components/carousel/TopicCarousel';
import GroupNavigator from './components/GroupNavigator';

import CourseCard from './components/CourseCard';
import GroupCard from './components/GroupCard';

export async function getServerSideProps() {
  const res = await fetch(STEM_COURSES());
  const courses = await res.json();
  const res1 = await fetch(ALL_GROUPS());
  const groups = await res1.json();
  return {
    props: {
      courses,
      groups
    }
  }
};

//fake data
const images = [
  { name: 'Math', imageUrl: 'https://thetechviral.com/wp-content/uploads/2017/09/maths-apps.png', href: '/topics' },
  { name: 'Science', imageUrl: 'https://cdn-icons-png.flaticon.com/512/562/562147.png', href: '/topics' },
  { name: 'English', imageUrl: 'https://cdn4.iconfinder.com/data/icons/school-education-14/512/Icon_18-512.png', href: '/topics' },
  { name: 'Social Studies', imageUrl: 'https://www.highmeadowschool.org/wp-content/uploads/2016/11/globe-icon.png', href: '/topics' }
]

const groups = [
  { name: 'my group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 10 },
  { name: 'study group', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 22 },
  { name: 'my cult', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 34 },
  { name: 'i hate math', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 5 },
  { name: 'join', image: 'https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_57-512.png', lastPost: 1 },
]


//add cookies (to save credentials somewhere)
export default function Home({ email, name, userData, courses, groups }) {
  const [term, setTerm] = useState('');
  console.log(groups);
  const router = useRouter();
  const as = "/signup";

  console.log(userData);
  console.log(email, name);

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
    <div className={homeStyles.background}>
      <div>
        <Header />
      </div>
      <div>
        <TopicCarousel courses={courses} />
      </div>
      <div className={homeStyles.recommendedWrapper}>
        <div className={homeStyles.recommendedText}>Recommended Courses</div>
        <CourseCard courses={courses} />
        <div className={homeStyles.recommendedText}>Recommended Groups</div>
        <GroupCard groups={groups} />
      </div>
    </div>
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
