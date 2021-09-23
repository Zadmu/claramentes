import React from 'react';
import Header from './components/Header';
import GroupCard from './components/GroupCard';
import Grid from '@material-ui/core/Grid';

const MyGroups = () => {
    return (
        <div>
            <div className = "Header">
                    <Header />
            </div>
            <Grid container spacing="10">
                <Grid item>
                    <GroupCard/>
                </Grid>
            </Grid>
        </div>
    );
}

export default MyGroups;