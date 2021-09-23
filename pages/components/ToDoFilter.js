import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import posts from '../../data/to-doPosts.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const filters = [
    "Newest",
    "Oldest",
]




const ToDoFilter = ({setFilterPosts}) => {
    const [filter, setFilter] = useState('');

    const renderFilterOptions = filters.map((filter, index) => (
        <MenuItem key={index}>
            {filter}
        </MenuItem >
    ));


    return (
        <div>
            <FormControl style={{float: 'left', margin: 10, minWidth: 75}}>
                <InputLabel>Sort by...</InputLabel>
                    <Select onChange={(e) => (setFilter(e.target.value))}>
                        {renderFilterOptions}
                    </Select>
                </FormControl>
        </div>
    );
}


export default ToDoFilter;
