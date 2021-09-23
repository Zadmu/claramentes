import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecommendedCourses from './components/RecommendedCourses';
import { DASHBOARD_GET_USER } from '../utils/api-defs';
import { useRouter } from 'next/router';

import Comments from './components/Comments'
import comments from './../data/comments.json'

import TopicCarousel from './components/carousel/TopicCarousel';
import GroupNavigator from './components/GroupNavigator';

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

  useEffect(() => {
    // Dons't run
    if(!email && !name){
      router.push({pathname: "/"})
    }
  
    if (!userData){
      router.push({pathname:"/signup", query: {email: email, name:name, userData}}, as);
    }

  },[]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="carousel">
        <TopicCarousel images = {images}/>
      </div>

      <div className = "groupNav">
        <GroupNavigator groupsList = {groups}/>
      </div>
      <div>
        <Comments imgLink="" name="Peter Last" comments={comments} page_id="6094ba969bd7b91cb40b144d" type="course"/>
      </div>
      <div className="recommendedCourses">
        <h1>Recommended Courses</h1>
        <RecommendedCourses/>
      </div>
    </div>
    
  );
}

Home.getInitialProps = async ({query: {email, name}}) => {
  const res = await fetch(DASHBOARD_GET_USER(email));
  const userData = await res.json();
  return {email, name, userData}
}