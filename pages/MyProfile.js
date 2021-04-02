import React from 'react';
import Header from './components/Header';

const MyProfile = () => {
    return (
        <div>
            <div className = "Header">
                <Header />
            </div>
            <h1>
                Welcome to your profile page
            </h1>
        </div>
    );
}

export default MyProfile;