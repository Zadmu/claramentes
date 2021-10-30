import React from 'react';
import Header from './components/Header';
import profileCSS from '../css/profilePage.module.css';

const MyProfile = () => {
    return (
        <div className={profileCSS.page}>
            <div>
                <Header />
            </div>
            <div style={{ margin: "auto", background: "#4B6576", width: "90%" }}>
                <div style={{ margin: "auto" }}>
                    <h1 className={profileCSS.title}>Profile</h1>
                </div>
                <div className={profileCSS.box}>
                    <h2 className={profileCSS.category}>Username:</h2>
                    <h2 className={profileCSS.info}>someone</h2>
                    <br />
                    <h2 className={profileCSS.category}>Email: </h2>
                    <h2 className={profileCSS.info}>someone@gmail.com</h2>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;