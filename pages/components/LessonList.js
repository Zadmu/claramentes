import React, {useState} from 'react';
import lessons from '../../data/lessons.json';
import courseCSS from '../../css/coursePage.module.css';


const LessonList = () => {
    const [lesson, setLesson] = useState(lessons[0]);
    const renderButtons = lessons.map((specificLesson, i) => {
        return(
            <div className = {courseCSS.lessonButton} key = {i}  onClick = {clickLesson => {setLesson(specificLesson)}}>
                <h1 className = {`${courseCSS.title} ${courseCSS.darkGrey}`}>{specificLesson.name}</h1>
            </div>
        );
    })

    return(
        <div className = {courseCSS.lessonCard}>
            <div className = {courseCSS.lessonContent}>
                <h1 className = {`${courseCSS.title} ${courseCSS.lightYellow}`}>{lesson.name}</h1>
                <body className = {`${courseCSS.body} ${courseCSS.lightYellow}`}>{lesson.content}</body>
            </div>
            <div className = {courseCSS.lessonNav}>
                <div className = {courseCSS.lessonsHeader}>
                    <h1 className = {`${courseCSS.title} ${courseCSS.darkGrey}`}>Lessons</h1>
                </div>
                <div className = {courseCSS.lessonButtonColumn}>
                    {renderButtons}
                </div>
            </div>
        </div>
    );


}

export default LessonList;