import Head from 'next/head';
import React from 'react';
import TopicCarousel from './components/TopicCarousel';
import Search from './components/Search';

//Home Page

export default function Home() {
  return (
    <div>
      <div className = "searchBar">
        <Search/>
      </div>
      
      <div className = "carousel">
        <TopicCarousel/>
      </div>
    </div>
  )
}