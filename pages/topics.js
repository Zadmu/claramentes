import React, {useState} from 'react';
import Header from './components/Header';
import topicsCSS from '../css/topicsPage.module.css';
import topics from'../data/topics';
import TopicsNav from './components/topicsNav';

export default function topicsPage () {
    const [selectedTopics, setSelectedTopics] = useState([topics[0], topics[5], topics[9]]);
    const [topicRow, setTopicRow] = useState(1);
    const [currentSelectedTopic, setCurrentSelectedTopic] = useState(0);

    return (
        <div className = {topicsCSS.page}>
            <div className = "Header">
                <Header />
            </div>
            <div>
                <img src = {selectedTopics[currentSelectedTopic].pictureURL} className = {topicsCSS.picture}/>
                <hr/>
            </div>
            <div>
                <TopicsNav setTopicRow = {setTopicRow} topicsList  = {topics} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicRow = {topicRow} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
            </div>
        </div>
    );
}