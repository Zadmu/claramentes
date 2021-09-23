import React from 'react';
import topicsCSS from '../../css/topicsNav.module.css';

const ExtendTopicsNav = ({setsTopicRow, topicRow, selectedTopicRow}) => {
    const rowModulator = () => {
        var row = topicRow;
        if(row != 3 && row != selectedTopicRow){
            console.log("adds row");
            row--;
        } else {
            console.log("subtracts row");
            row++;
        }
        return row;
    }


    return (
        <div
            onClick = {clickExpand => {
                setsTopicRow(rowModulator())
            }}
            className = {topicsCSS.extendNavBox}
        >
            <i className = {topicsCSS.arrow}></i>
        </div>
    );
}

export default ExtendTopicsNav;