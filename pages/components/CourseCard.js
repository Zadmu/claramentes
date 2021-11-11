import React from 'react';
import courseCSS from '../../css/courseCard.module.css';
import courses from '../../data/courses2.json';
import Link from 'next/link';

const CourseCard = () => {

    const renderCourses = courses.map((course, i) => {
        return (
            <div key={i} style={{
                height: "259px",
                width: "340px",
                marginLeft: "auto",
                position: "relative"
            }}>
<<<<<<< HEAD
                <Link href="/mycourses">
                    <div className = {courseCSS.card}>
=======
                <Link href="/course/courseid">
                    <div>
>>>>>>> 40219f8 (stuff?)
                        <div className={courseCSS.taughtBy}>
                            <h3 className={courseCSS.owner}>Teacher:<br />{course.admins}</h3>
                        </div>
                        <div className={courseCSS.qualificationContainer}>
                            <h3 className={courseCSS.qualification}>Certifications:<br />{course.qualification}</h3>
                        </div>
                        <img src={course.picture} className={courseCSS.image} />
                        <div style={{
                            height: "240px",
                            background: "#F4EED9",
                            width: "340px",
                            marginTop: "19px",
                            borderRadius: "20px"
                        }}>
                            <div style={{
                                background: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "15px",
                                left: "13.82%",
                                bottom: "15px",
                                width: "246px",
                                height: "auto",
                                position: "absolute",
                                padding: "5px"
                            }}>
                                <h2 className={courseCSS.name}>{course.name}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })



    return (
        <div className={courseCSS.row}>
            {renderCourses}
        </div>
    );

}

export default CourseCard;