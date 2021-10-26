import React from 'react';
import topicsCSS from '../../css/topicsNav.module.css';
import TopicsRow from './TopicsRow';
import ExtendTopicsNav from './ExtendTopicsNav';
import CourseCard from './CourseCard';
import courseCSS from '../../css/courseCard.module.css';


    const TopicsNav = ({setTopicRow, topicsList, setSelectedTopics, selectedTopics, topicRow, currentSelectedTopic, setCurrentSelectedTopic}) => {


        if(topicRow == 3){
            return (
                <div>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.firstRowPosition}`} currentRenderedRow = {1} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.secondRowPosition}`} currentRenderedRow = {2} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.thirdRowPosition}`} currentRenderedRow = {3} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <div className = {topicsCSS.bigTopicBoxThreeRow}>
                        <ExtendTopicsNav hasChildren = {selectedTopics[currentSelectedTopic].hasChildren} setTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopics[currentSelectedTopic].row}/>
                        <div className = {topicsCSS.topicNameThreeRow}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <h2 className = {courseCSS.popularCourses}>Popular Courses</h2>
                            <CourseCard />
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
                        <div className = {topicsCSS.topicNameTwoRow}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <h2 className = {courseCSS.popularCourses}>Popular Courses</h2>
                            <CourseCard/>
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
                        <div className = {topicsCSS.topicNameOneRow}>
                            <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>    
                        </div>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>
                        <div>
                            <h2 className = {courseCSS.popularCourses}>Popular Courses:</h2>
                            <CourseCard/>
                        </div>        
                    </div>
                </div>
            );
        }

    
}

export default TopicsNav;