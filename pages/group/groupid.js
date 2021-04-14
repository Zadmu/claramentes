//this is a temporary name -- rename to [id] once connected to db
import Header from '../components/Header';
import GroupInfo from '../components/GroupInfo';
import ToDoList from '../components/ToDoList';
import Comments from '../components/Comments';
import Navigator from '../components/Navigator';

import { useState } from 'react';

export default function GroupPage () {
    const [activeComponent, setActiveComponent] = useState("info");
    return(
        <div>
            <Header/>
            <div>
                <button onClick={() => setActiveComponent('info')}> Group Info </button>
                <button onClick={() => setActiveComponent('comments')}> Discussion </button>
                <button onClick={() => setActiveComponent('todo')}> To Do </button>
            </div>
            <Navigator active={activeComponent}>
                <Comments name="comments"/>
                <ToDoList name="todo"/>
                <GroupInfo name="info"/>
            </Navigator>
        </div>
    )
}