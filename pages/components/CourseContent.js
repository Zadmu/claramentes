import React from 'react';
import groupCSS from '../../css/groupPage.module.css';
import LessonList from './LessonList';
import Comments from './Comments';

const CourseContent = ({ activeComponent, course }) => {
    if (activeComponent === "description") {
        return (
            <div>
                <hr className={groupCSS.descriptionLine} />
                <div className={groupCSS.descriptionBox}>
                    <h3 className={groupCSS.descriptionText}>{course.description}</h3>
                </div>
            </div>
        );
    } else if (activeComponent === "lessons") {
        return (
            <div>
                <hr className={groupCSS.agendaLine} />
                <div>
                    <LessonList/>
                </div>
            </div>
        );
    } else if (activeComponent === "discussion") {
        return (
            <div>
                <hr className={groupCSS.discussionLine} />
                <div>
                    <Comments/>
                </div>
            </div>
        );
    } else return;
}

export default CourseContent;