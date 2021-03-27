import Head from 'next/head';
import React, {useState} from 'react';
import TopicCarousel from './components/TopicCarousel';
import Search from './components/Search';
import SearchFilter from './components/SearchFilter';

// Data
import filters from '../data/filters.json'
import courses from '../data/courses.json'

//Home Page

export default function Home() {
  const [term, setTerm] = useState('');
  return (
    <div>
      <div className="searchBar">
        <Search setTerm={setTerm} term={term}/>
      </div>

      <div className="filter">
        <SearchFilter filters={filters} courses={courses} term={term}/>
      </div>

      <div className="carousel">
        <TopicCarousel />
      </div>
    </div>
  )
}