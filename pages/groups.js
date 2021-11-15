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
                Browse all groups!
            </h1>
            <div style = {{paddingTop: "20px"}}>
                <GroupCard groups = {groups}/>
            </div>
        </div>
    );
}

export default Groups;