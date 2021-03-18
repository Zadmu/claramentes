import Head from 'next/head';
import React from 'react';
import TopicCarousel from './components/TopicCarousel';
import Search from './components/Search';
import SearchFilter from './components/SearchFilter';

// Data
import filters from '../data/filters.json'
import courses from '../data/courses.json'

//Home Page

export default function Home() {
  return (
    <div>
      <div className="searchBar">
        <Search />
      </div>

      <div className="filter">
        <SearchFilter filters={filters} courses={courses} />
      </div>

      <div className="carousel">
        <TopicCarousel />
      </div>
    </div>
  )
}