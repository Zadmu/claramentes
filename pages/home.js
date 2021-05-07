import React, { useEffect, useState } from 'react';
import TopicCarousel from './components/TopicCarousel';
import Header from './components/Header';
import RecommendedCourses from './components/RecommendedCourses';
import { DASHBOARD_GET_USER } from '../utils/api-defs';
import { useRouter } from 'next/router';

import Comments from './components/Comments'
import comments from './../data/comments.json'



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
      <div>
        <Comments imgLink="" name="Peter Last" comments={comments} page_id="6094ba969bd7b91cb40b144d" type="course"/>
      </div>
      <div className="carousel">
        <TopicCarousel/>
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