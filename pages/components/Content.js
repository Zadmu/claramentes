import React from 'react';
import groupCSS from '../../css/groupPage.module.css';
import EventList from './EventList';
import Comments from './Comments';

const Content = ({ activeComponent, group }) => {
    if (activeComponent === "description") {
        return (
            <div>
                <hr className={groupCSS.descriptionLine} />
                <div className={groupCSS.descriptionBox}>
                    <h3 className={groupCSS.descriptionText}>{group.description}</h3>
                </div>
            </div>
        );
    } else if (activeComponent === "agenda") {
        return (
            <div>
                <hr className={groupCSS.agendaLine} />
                <div className={groupCSS.agendaBox}>
                    <div className={groupCSS.filterBox}>
                        <h2 className={groupCSS.filter}>Filter</h2>
                    </div>
                    <h1 className={groupCSS.assignmentsTitle}>Events</h1>
                    <div className = {groupCSS.addAgendaBox}>
                        <h2 className = {groupCSS.addAgenda}>Add</h2>
                    </div>
                </div>
                <div>
                    <EventList/>
                </div>
            </div>
        );
    } else if (activeComponent === "discussion") {
        return (
            <div>
                <hr className={groupCSS.discussionLine} />
                <div>
                    <Comments/>
                </div>
            </div>
        );
    } else return;
}

export default Content;