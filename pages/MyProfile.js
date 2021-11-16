import React from 'react';
import Header from './components/Header';
import profileCSS from '../css/profilePage.module.css';
import Link from 'next/link';

const MyProfile = () => {
    return (
        <div className={profileCSS.page}>
            <div>
                <Header />
            </div>
            <div style={{ margin: "auto", background: "#4B6576", width: "90%" }}>
                <Link href="localhost:3000/group/groupid">
                    <div className={profileCSS.sectionBacking}>
                        <h1 className={profileCSS.title}>My Profile</h1>
                    </div>
                </Link>
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