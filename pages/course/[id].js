//this is a temporary name -- rename to [id] once connected to db
import Header from '../components/Header';
import Comments from '../components/Comments';
import groupCSS from '../../css/groupPage.module.css';
import { useState } from 'react';
import courses from '../../data/course(1).json';
import LessonList from '../components/LessonList';
import { GET_COURSE } from '../../utils/api-defs';

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(GET_COURSE(id));
    const course = await res.json();
    return {
      props: {
        course
      }
    }
  };

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


export default function CoursePage({course}) {
    const [activeComponent, setActiveComponent] = useState("description");

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