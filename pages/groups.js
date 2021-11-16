import React from 'react';
import Header from './components/Header';
import groupCSS from '../css/exploreGroups.module.css';
import GroupCard from './components/GroupCard';
import groups from '../data/groups.json';

const Groups = () => {
    return (
        <div className = {groupCSS.page}>
            <div className = "Header">
                <Header />
            </div>
            <h1 className = {`${groupCSS.title} ${groupCSS.lightYellow}`}>
                Browse All Groups
            </h1>
            <div className={groupCSS.coursesBacking}>
                <GroupCard groups = {groups}/>
            </div>
        </div>
    );
}

export default Groups;