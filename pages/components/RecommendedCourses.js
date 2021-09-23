import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const topicsOfInterest = ["math", "science", "STEM"]

const courses = [
    {name: 'English 1', owner: 'LSU', topics:['literature', 'reading', 'writing']},
    {name: 'Calculus II', owner: 'NMSU', topics:['math', 'calculus']},
    {name: 'Software Engineering for Medical Research', owner: 'MIT', topics:['STEM', 'computer science', 'medical technology']},
    {name: 'Statistics', owner: 'Yale', topics:['math', 'statistics', 'business']},
    {name: 'College Prep Algebra', owner: 'UTEP', topics:['algebra', 'math', 'college prep']},
    {name: 'Data Science', owner: 'CalTech', topics:['STEM', 'programming', 'math']},
    {name: 'Genetic Biology', owner: 'Georgia Tech', topics:['biology', 'science', 'genetics']},
    {name: 'Sociology', owner: 'SMC', topics:['political science', 'sociology', 'statistics']},
    {name: 'Test', owner: 'Test', topics:["math", "science", "STEM"]}
]

const RecommendedCourses = () => {


    // const filteredCourses = courses.topics.filter(item => topicsOfInterest.includes(item));
    const displayNineCourses = courses.slice(0, 9);

// console.log(res);
    return(
        <div>
            {displayNineCourses.map((course) => {
                return (
                    <Box>
                        <Card>
                            <CardContent>
                                <h1>{course.name}</h1>
                                <h2>{course.owner}</h2>
                            </CardContent>
                    </Card>
                  </Box>
                )
            })}
        </div>
    )
}

export default RecommendedCourses;