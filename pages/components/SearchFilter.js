import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const filterElements = (prop, elements) => {
    // Add custom filters for filters: Date, Topic, Poster (Student or Platform), Location (In-person or Online)
    // Also ascending or decending
    elements.sort((a, b) => {
        if (["date"].includes(prop)) {
            return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
        } else if (["topic", "poster", "location"].includes(prop)) {
            return a[prop].localeCompare(b[prop]);
        }
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    });
    return elements;
};

const SearchFilter = ({ filters, courses }) => {
    const filterOptions = filters.map((filter, idx) => (
        <MenuItem value={idx}>
            {filter}
        </MenuItem >
    ));

    const [elements, setElementOrder] = useState(courses)
    const [filter, setFilter] = useState(filters[0])
    useEffect(() => {
        let orderedElements = filterElements(filter, elements)
        setElementOrder(orderedElements);
        console.log(elements)
    }, [filter]);


    return (<>
        <FormControl>
            <InputLabel>Filter</InputLabel>
            <Select onChange={(e) => (setFilter(filters[e.target.value]))}>
                {filterOptions}
            </Select>
        </FormControl>
    </>);
};

export default SearchFilter;