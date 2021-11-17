import React from 'react';
import Header from './components/Header';
import groupCSS from '../css/exploreGroups.module.css';
import CourseCard from './components/CourseCard';
import courses from '../data/courses2.json';

import { ALL_COURSES } from '../utils/api-defs';

export async function getServerSideProps() {
    const res = await fetch(ALL_COURSES());
    const courses = await res.json();
    return {
      props: {
        courses
      }
    }
  };

const Courses = ({courses}) => {
    return (
        <div className = {groupCSS.page}>
            <div className = "Header">
                <Header/>
            </div>
            <h1 className = {`${groupCSS.title} ${groupCSS.lightYellow}`}>
                Browse All Courses
            </h1>
            <div className={groupCSS.coursesBacking}>
                <CourseCard courses = {courses}/>
            </div>
        </div>
    );
}

export default Courses;