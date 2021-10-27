import React from 'react';
import events from '../../data/events.json';
import groupCSS from '../../css/groupPage.module.css';


const EventList = ({posts}) => {

    const renderList = events.map((event, i) => {
        return(
            <div key = {i} className = {groupCSS.eventContainer}>
                <div className = {groupCSS.eventTitleBox}>
                    <h1 className = {groupCSS.eventTitle}>{event.header}</h1>
                </div>
                <div className = {groupCSS.eventDescriptionBox}>
                    <h3 className = {groupCSS.eventDescription}>{event.description}</h3>
                </div>
                <div className = {groupCSS.eventDateBox}>
                    <h2 className = {groupCSS.eventDate}>Event Date: {event.due_date}</h2>
                </div>
            </div>

        );
    })

    return(
        <div>
            {renderList}
        </div>
    );


}

export default EventList;