import React, {useState} from 'react';
import topicsCSS from '../../css/topicsNav.module.css';
import TopicsRow from './TopicsRow';
import ExtendTopicsNav from './ExtendTopicsNav';

    const TopicsNav = ({setTopicRow, topicsList, setSelectedTopics, selectedTopics, topicRow, currentSelectedTopic, setCurrentSelectedTopic}) => {

        if(topicRow == 3){
            return (
                <div>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.firstRowPosition}`} currentRenderedRow = {1} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.secondRowPosition}`} currentRenderedRow = {2} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <TopicsRow setTopicRow = {setTopicRow} css = {`${topicsCSS.row} ${topicsCSS.thirdRowPosition}`} currentRenderedRow = {3} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicsList = {topicsList} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
                    <div className = {topicsCSS.bigTopicBoxThreeRow}>
                        <ExtendTopicsNav hasChildren = {selectedTopics[currentSelectedTopic].hasChildren} setTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopics[currentSelectedTopic].row}/>
                        <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
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
                        <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
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
                        <h1 className = {topicsCSS.topicName}>{selectedTopics[currentSelectedTopic].name}</h1>    
                        <div className = {topicsCSS.descriptionBox}>
                            <h2 className = {topicsCSS.descriptionText}>{selectedTopics[currentSelectedTopic].Description}</h2>
                        </div>        
                    </div>
                </div>
            );
        }

    
}

export default TopicsNav;