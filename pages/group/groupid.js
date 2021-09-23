//this is a temporary name -- rename to [id] once connected to db
import Header from '../components/Header';
import GroupInfo from '../components/GroupInfo';
import GroupCard from '../components/GroupCard';
import Comments from '../components/Comments';
import Navigator from '../components/Navigator';

import { useState } from 'react';

export default function GroupPage () {
    const [activeComponent, setActiveComponent] = useState("info");
    return(
        <div>
            <Header/>
            <div align ="center">
                <button onClick={() => setActiveComponent('info')}> Group Info </button>
                <button onClick={() => setActiveComponent('comments')}> Discussion </button>
                <button onClick={() => setActiveComponent('todo')}> To Do </button>
            </div>
            <GroupCard activeComponent = {activeComponent}/>
        </div>
    )
}