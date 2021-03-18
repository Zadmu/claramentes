import React, { useState, useEffect } from 'react';
import Search from './Search';

const filterElements = (prop, elements) => {
    // Add custom filters for filters: Data, Topic, Poster (Student or Platform), Location (In-person or Online)
    // Also ascending or decending
    elements.sort((a, b) => {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    });
    return elements;
};

const SearchFilter = ({ filters, courses }) => {
    const filterOptions = filters.map((filter, idx) => (
        <option value={idx}>
            {filter}
        </option>
    ));

    const [elements, setElementOrder] = useState(courses)
    const [filter, setFilter] = useState('Date')
    useEffect(() => {
        console.log(elements)
        let orderedElements = filterElements(filter, elements)
        setElementOrder(orderedElements);
        console.log(elements)
    }, [filter]);


    return (<>
        <select className="ui dropdown" onChange={(e) => (setFilter(e.target.value))}>
            {filterOptions}
        </select>
    </>);
};

export default SearchFilter;