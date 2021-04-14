import Head from 'next/head';
import React, { useState } from 'react';
import TopicCarousel from './components/TopicCarousel';
import Header from './components/Header';
import RecommendedCourses from './components/RecommendedCourses';


export default function Home({email, name}) {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div>
        <Header />
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
    return {email, name}
}