import React from 'react';
import Header from './components/Header';
import groupCSS from '../css/exploreGroups.module.css';
import GroupCard from './components/GroupCard';

import { ALL_GROUPS } from '../utils/api-defs';

export async function getServerSideProps() {
    const res = await fetch(ALL_GROUPS());
    const groups = await res.json();
    return {
      props: {
        groups
      }
    }
  };

const Groups = ({groups}) => {
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