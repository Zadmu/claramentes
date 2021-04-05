import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";

const Search = ({setTerm, term}) => {

    return(
        <div>
            <div className = "ui form">
                <div className = "field" style={{float: 'bottom', margin: 10}}>
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