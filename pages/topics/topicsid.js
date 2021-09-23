import React, {useState} from 'react';
import Header from '../components/Header';
import topicsCSS from '../../css/topicsPage.module.css';
import topics from'../../data/topics';
import TopicsNav from '../components/topicsNav';
import ExtendTopicsNav from '../components/ExtendTopicsNav';

export default function topicsPage () {
    const [selectedTopic, setSelectedTopic] = useState(topics[1]);
    const [topicRow, setTopicRow] = useState(2);
    const [displayedTopics, setDisplayedTopics] = useState([]);
    console.log(topics);
    return (
        <div className = {topicsCSS.page}>
            <div className = "Header">
                <Header />
            </div>
            <div>
                <img src = {selectedTopic.pictureURL} className = {topicsCSS.picture}/>
                <hr/>
            </div>
            <div>
                <TopicsNav topicsList  = {topics} setSelectedTopic = {setSelectedTopic} selectedTopic = {selectedTopic} topicsRow = {topicRow}/>
            </div>
            <div>
                <ExtendTopicsNav setsTopicRow = {setTopicRow} topicRow = {topicRow} selectedTopicRow = {selectedTopic.row}/>
            </div>

        </div>
    );
}
