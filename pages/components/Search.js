import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";

const Search = ({setTerm, term}) => {

    return(
        <div>
            <div className = "ui form">
                <div className = "field" style={{float: 'left', margin: 10}}>
                    <label> Enter Search Term </label>
                    <SearchBar
                        value={term}
                        onRequestSearch={e => setTerm(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;  