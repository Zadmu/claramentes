import React from 'react';
import lessons from '../../data/lessons.json';
import groupCSS from '../../css/groupPage.module.css';


const LessonList = ({posts}) => {

    const renderList = lessons.map((lesson, i) => {
        return(
            <div key = {i} className = {groupCSS.eventContainer}>
                <div className = {groupCSS.lessonTitleBox}>
                    <h1 className = {groupCSS.eventTitle}>{lesson.name}</h1>
                </div>
                <div className = {groupCSS.eventDescriptionBox}>
                    <h3 className = {groupCSS.eventDescription}>{lesson.description}</h3>
                </div>
            </div>

        );
    })

    return(
        <div>
            {renderList}
        </div>
    );


}

export default LessonList;