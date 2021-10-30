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
                <Link href="/MyCourses">
                    <div>
                        <div className={courseCSS.taughtBy}>
                            <h3 className={courseCSS.owner}>Taught by:<br />{course.admins}</h3>
                        </div>
                        <div className={courseCSS.qualificationContainer}>
                            <h3 className={courseCSS.qualification}>Qualifications:<br />{course.qualification}</h3>
                        </div>
                        <img src={course.picture} className={courseCSS.image} />
                        <div style={{
                            height: "240px",
                            background: "#F4EED9",
                            width: "340px",
                            marginTop: "19px",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}>
                            <div style={{
                                background: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                left: "13.82%",
                                top: "74.13%",
                                width: "246px",
                                height: "56px",
                                position: "absolute"
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