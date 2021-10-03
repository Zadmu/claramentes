import React from 'react';
import topicsCSS from '../../css/topicsNav.module.css';

const ExtendTopicsNav = ({hasChildren, setTopicRow, topicRow, selectedTopicRow}) => {
    function rowModulator() {
        var row = topicRow;
        if(row != 3 && row == selectedTopicRow && hasChildren){
            row++;
        } else if(row >= 2 && row != selectedTopicRow){
            row--;
        }
        return row;
    }

    return (
        <div
            onClick = {(() => {
                setTopicRow(rowModulator())
            })}
            className = {topicsCSS.extendNavBox}
        >
            <i className = {topicsCSS.arrow}></i>
        </div>
    );
}

export default ExtendTopicsNav;