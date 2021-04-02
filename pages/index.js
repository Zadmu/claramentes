import Head from 'next/head';
import React, {useState} from 'react';
import TopicCarousel from './components/TopicCarousel';
import Header from './components/Header';

//Home Page

export default function Home() {
  const [term, setTerm] = useState('');
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="carousel">
        <TopicCarousel />
      </div>
    </div>
    
  );
}
