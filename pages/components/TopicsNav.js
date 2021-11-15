import React from 'react';
import topicsCSS from '../../css/topicsNav.module.css';
import TopicsRow from './TopicsRow';
import ExtendTopicsNav from './ExtendTopicsNav';
import CourseCard from './CourseCard';
import courseCSS from '../../css/courseCard.module.css';
import GroupCard from './GroupCard';

    const TopicsNav = ({courses, setTopicRow, topicsList, setSelectedTopics, selectedTopics, topicRow, currentSelectedTopic, setCurrentSelectedTopic}) => {
        const groups1STEM = [
            {
                name: "Chem Study Group",
                admins: "John Smith",
                lessons: [],
                description: "             HEY GUYS! This is the Chemistry 101 study group. Feel free to discuss concepts, times to meet, and more. You guys are also welcome to add to-do list items if I forget, like homework, assessments, and more. You can post videos in the discussion tab, and also include links in the to-do list cards. I’m John, a junior at Wildcats high school. My email is jsmith@gmail.com if you want to contact me. I have taken college prep chemistry and am now taking AP chem. I made this group for people like me who like to learn with other people, which is why this website is so helpful. If you would like to set up a study session feel free to, and I will definitely join. Have fun learning chem!",
                comments: [],
                picture: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
            },
        
            {
                name: "Bio Study Group",
                admins: "HOBO McARTHER",
                lessons: [],
                description: "",
                comment: [],
                picture: "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/GettyImages-1193074238.jpg"
            },
        
            {
                name: "Fun with Science!",
                admins: "Joanne Joanne",
                lessons: [],
                description: "",
                comments: [],
                picture: "https://miro.medium.com/max/1400/0*yRhQ28Nd53cTSCR6"
            }
        ]

        const groups2Science = [
            {
                name: "Chem Study Group",
                admins: "John Smith",
                lessons: [],
                description: "             HEY GUYS! This is the Chemistry 101 study group. Feel free to discuss concepts, times to meet, and more. You guys are also welcome to add to-do list items if I forget, like homework, assessments, and more. You can post videos in the discussion tab, and also include links in the to-do list cards. I’m John, a junior at Wildcats high school. My email is jsmith@gmail.com if you want to contact me. I have taken college prep chemistry and am now taking AP chem. I made this group for people like me who like to learn with other people, which is why this website is so helpful. If you would like to set up a study session feel free to, and I will definitely join. Have fun learning chem!",
                comments: [],
                picture: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
            },
        
            {
                name: "Bio Study Group",
                admins: "HOBO McARTHER",
                lessons: [],
                description: "",
                comment: [],
                picture: "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/GettyImages-1193074238.jpg"
            },
        
            {
                name: "Fun with Science!",
                admins: "Joanne Joanne",
                lessons: [],
                description: "",
                comments: [],
                picture: "https://miro.medium.com/max/1400/0*yRhQ28Nd53cTSCR6"
            }
        ]

        const groups3Chemistry = [
            {
                name: "Chem Study Group",
                admins: "John Smith",
                lessons: [],
                description: "             HEY GUYS! This is the Chemistry 101 study group. Feel free to discuss concepts, times to meet, and more. You guys are also welcome to add to-do list items if I forget, like homework, assessments, and more. You can post videos in the discussion tab, and also include links in the to-do list cards. I’m John, a junior at Wildcats high school. My email is jsmith@gmail.com if you want to contact me. I have taken college prep chemistry and am now taking AP chem. I made this group for people like me who like to learn with other people, which is why this website is so helpful. If you would like to set up a study session feel free to, and I will definitely join. Have fun learning chem!",
                comments: [],
                picture: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
            },
        
            {
                name: "Bio Study Group",
                admins: "HOBO McARTHER",
                lessons: [],
                description: "",
                comment: [],
                picture: "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/GettyImages-1193074238.jpg"
            },
        
            {
                name: "Fun with Science!",
                admins: "Joanne Joanne",
                lessons: [],
                description: "",
                comments: [],
                picture: "https://miro.medium.com/max/1400/0*yRhQ28Nd53cTSCR6"
            }
        ]


        if(topicRow == 3){
            return (
                <div>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.firstRowPosition}`} currentRenderedRow = {1} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.secondRowPosition}`} currentRenderedRow = {2} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.thirdRowPosition}`} currentRenderedRow = {3} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <div className = {topicsCSS.bigTopicBoxThreeRow}>
                        <ExtendTopicsNav hasChildren = {selectedTopics[currentSelectedTopic].hasChildren} setTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopics[currentSelectedTopic].row}/>
                        <div className = {topicsCSS.topicNameContainer}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <div>
                                <h2 className = {courseCSS.popularCourses}>Popular Courses</h2>
                            </div>
                            <CourseCard courses={courses}/>
                        </div>
                        <div>
                            <div style={{marginTop: "3.5%"}}>
                                <h2 className = {courseCSS.popularCourses}>Popular Groups</h2>
                            </div>
                            <GroupCard groups = {groups3Chemistry}/>
                        </div> 
                    </div>
                </div>
            );
        }

        else if(topicRow == 2){
            return (
                <div>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.firstRowPosition}`} currentRenderedRow = {1} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.secondRowPosition}`} currentRenderedRow = {2} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <div className = {topicsCSS.bigTopicBoxTwoRow}>
                        <ExtendTopicsNav hasChildren = {selectedTopics[currentSelectedTopic].hasChildren} setTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopics[currentSelectedTopic].row}/>
                        <div className = {topicsCSS.topicNameContainer}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <div>
                                <h2 className = {courseCSS.popularCourses}>Popular Courses</h2>
                            </div>
                            <CourseCard courses={courses}/>
                        </div>
                        <div>
                            <div style={{marginTop: "3.5%"}}>
                                <h2 className = {courseCSS.popularCourses}>Popular Groups</h2>
                            </div>
                            <GroupCard groups = {groups2Science}/>
                        </div> 
                    </div>
                </div>
            );
        }
        
        else{
            return (
                <div>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.firstRowPosition}`} currentRenderedRow = {1} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <div className = {topicsCSS.bigTopicBoxOneRow}>
                        <ExtendTopicsNav hasChildren = {selectedTopics[currentSelectedTopic].hasChildren} setTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopics[currentSelectedTopic].row}/>
                        <div className = {topicsCSS.topicNameContainer}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>    
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <div style={{marginTop: "3.5%"}}>
                                <h2 className = {courseCSS.popularCourses}>Popular Courses</h2>
                            </div>
                            <CourseCard courses={courses}/>
                        </div>
                        <div>
                            <div style={{marginTop: "3.5%"}}>
                                <h2 className = {courseCSS.popularCourses}>Popular Groups</h2>
                            </div>
                            <GroupCard groups = {groups1STEM}/>
                        </div>          
                    </div>
                </div>
            );
        }

    
}

export default TopicsNav;