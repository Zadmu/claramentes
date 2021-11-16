import React, {useState} from 'react';
import Header from './components/Header';
import topicsCSS from '../css/topicsPage.module.css';
import topics from'../data/topics';
import TopicsNav from './components/topicsNav';

import { STEM_COURSES } from '../utils/api-defs';
import { TOPIC_COURSES} from '../utils/api-defs';

import { MATH_COURSES } from '../utils/api-defs';
import { STEM_GROUPS } from '../utils/api-defs';

export async function getServerSideProps() {
  const res = await fetch(STEM_COURSES());
  const courses = await res.json();
  const res1 = await fetch(STEM_GROUPS());
  const groups = await res1.json();
  return {
    props: {
      courses,
      groups
    }
  }
};

export default function topicsPage ({courses, groups}) {
    const [selectedTopics, setSelectedTopics] = useState([topics[0], topics[5], topics[9]]);
    const [topicRow, setTopicRow] = useState(1);
    const [currentSelectedTopic, setCurrentSelectedTopic] = useState(0);

    // async function getServerSideProps() {
    //   const { topic } = selectedTopics[currentSelectedTopic].name;
    //   const res = await fetch(TOPIC_COURSES(topic));
    //   const courses = await res.json();
    //   return {
    //     props: {
    //       courses
    //     }
    //   }
    // };

//  if(selectedTopics[currentSelectedTopic].name == "STEM") {
//     async function getSTEMCourses() {
//     const res = await fetch(STEM_COURSES());
//     const courses = await res.json();
//     return {
//           props: {
//             courses
//           }
//   }}}

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
                <TopicsNav groups={groups} courses={courses} setTopicRow = {setTopicRow} topicsList  = {topics} setSelectedTopics = {setSelectedTopics} selectedTopics = {selectedTopics} topicRow = {topicRow} currentSelectedTopic = {currentSelectedTopic} setCurrentSelectedTopic = {setCurrentSelectedTopic}/>
            </div>
        </div>
    );
}
