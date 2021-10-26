import React from 'react';
import topicsCSS from '../../css/topicsNav.module.css';

const TopicsRow = ({setTopicRow, css, currentRenderedRow, setSelectedTopics, selectedTopics, topicsList, currentSelectedTopic, setCurrentSelectedTopic}) => {
    const individualRow = topicsList.map((topic, i) => {
        const isInPath = () => {
            for(let i = 0; i < 3; i++){
                if(selectedTopics[i].name == topic.Parent){
                    return true;
                }
            }
            return false;
        }

        if(topic.row == currentRenderedRow && (topic.Parent == "null" || isInPath())){
            if(topic != selectedTopics[currentSelectedTopic]){
                return(
                    <div
                        key = {i}
                        onClick = {clickSelectTopic => {
                            setCurrentSelectedTopic(topic.row - 1)
                            setSelectedTopics([...selectedTopics.slice(0, topic.row-1), topic, ...selectedTopics.slice(topic.row)])
                            setTopicRow(selectedTopics[topic.row-1].row)
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

    return (
        <div className = {css}>
            {individualRow}
        </div>

    );
}

export default TopicsRow;