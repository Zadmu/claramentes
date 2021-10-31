import Header from '../components/Header';
import Comments from '../components/Comments';
import groupCSS from '../../css/groupPage.module.css';
import { useState } from 'react';
import courses from '../../data/course(1).json';
import CourseContent from '../components/CourseContent';

export default function CoursePage() {
    const [activeComponent, setActiveComponent] = useState("description");
    const course = courses[0];

    return (
        <div className={groupCSS.page}>
            <Header />
            <div className={groupCSS.pictureContainer}>
                <img src={course.picture} className={groupCSS.picture} />
                <div className = {groupCSS.nameBox}>
                    <h1 className = {groupCSS.name}>{course.name}</h1>
                </div>
                <hr />
            </div>
            <div className={groupCSS.buttonRow}>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('description')
                    }>
                    <h2 className={groupCSS.buttonName}>Description</h2>
                </div>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('lessons')}>
                    <h2 className={groupCSS.buttonName}>Lessons</h2>
                </div>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('discussion')
                    }>
                    <h2 className={groupCSS.buttonName}>Discussion</h2>
                </div>
            </div>
            <CourseContent activeComponent={activeComponent} course={course} />
        </div>
    )
}