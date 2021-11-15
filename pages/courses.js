import React from 'react';
import Header from './components/Header';
import groupCSS from '../css/exploreGroups.module.css';
import CourseCard from './components/CourseCard';
import courses from '../data/courses2.json';

const Groups = () => {
    return (
        <div className = {groupCSS.page}>
            <div className = "Header">
                <Header />
            </div>
            <h1 className = {`${groupCSS.title} ${groupCSS.lightYellow}`}>
                Browse all courses!
            </h1>
            <div style = {{paddingTop: "20px"}}>
                <CourseCard courses = {courses}/>
            </div>
        </div>
    );
}

export default Groups;