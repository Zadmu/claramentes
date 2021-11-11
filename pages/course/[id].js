//this is a temporary name -- rename to [id] once connected to db
import Header from '../components/Header';
import Comments from '../components/Comments';
import groupCSS from '../../css/groupPage.module.css';
import { useState } from 'react';
import groups from '../../data/groups.json';
import Content from '../components/Content';

export default function GroupPage() {
    const [activeComponent, setActiveComponent] = useState("description");
    const group = groups[0];

    return (
        <div className={groupCSS.page}>
            <Header />
            <div className={groupCSS.pictureContainer}>
                <img src={group.picture} className={groupCSS.picture} />
                <div className = {groupCSS.nameBox}>
                    <h1 className = {groupCSS.name}>{group.name}</h1>
                </div>
                <hr />
            </div>
            <div className={groupCSS.buttonRow}>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('description')
                    }>
                    <h2 className={groupCSS.buttonName}>Description</h2>
                </div>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('agenda')
                    }>
                    <h2 className={groupCSS.buttonName}>Agenda</h2>
                </div>
                <div
                    className={groupCSS.button}
                    onClick={() => setActiveComponent('discussion')
                    }>
                    <h2 className={groupCSS.buttonName}>Discussion</h2>
                </div>
            </div>
            <Content activeComponent={activeComponent} group={group} />
        </div>
    )
}