import React, {useState} from 'react';
import topicsCSS from '../../css/topicsNav.module.css';

const TopicsNav = ({topicsList, setSelectedTopic, selectedTopic, topicsRow}) => {
    console.log("enters topicsnav");
    const renderTopicsRows = () => {
        console.log("enters renderTopicRow");
        for(var currentRenderedRow = 1; currentRenderedRow <= topicsRow; currentRenderedRow++){
            const renderTopics = topicsList.map((topic, index) => {
                if(topic.row == currentRenderedRow){
                    if(topic != selectedTopic){
                        return(
                            <div
                                key = {topic.name}
                                onClick = {clickSelectTopic => {
                                    setSelectedTopic(topic)
                                }}
                                className = {topicsCSS.topicsBox}
                            >
                                <h1 className = {topicsCSS.text}>{topic.name}</h1>
                            </div>
                        );
                    } else {
                        return(
                            <div
                                key = {topic.name}
                                className = {topicsCSS.selectedBox}
                            >
                                <h1 className = {topicsCSS.text}>{topic.name}</h1>
                            </div>
                        );
                    }
                }
                else {
                    return;
                }

            });
            if(currentRenderedRow == 1){
                console.log("enters 1st if statement");
                return (
                    <div className = {topicsCSS.firstRow}>
                        {renderTopics}
                    </div>
                );
            }
            if(currentRenderedRow == 2){
                console.log("enters 2nd if statement");
                return (
                    <div className = {topicsCSS.secondRow}>
                        {renderTopics}
                    </div>
                );
            }
            if(currentRenderedRow == 3){
                console.log("enters 3rd if statement");
                return (
                    <div className = {topicsCSS.thirdRow}>
                        {renderTopics}
                    </div>
                );
            }
    
        }
    }

    return (
        <div>
            {renderTopicsRows()}
        </div>
    );
}

export default TopicsNav;