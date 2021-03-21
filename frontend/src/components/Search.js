import React, { useState } from 'react';
import {useRouteMatch} from 'react-router-dom';

const Search = () => {

    const [value, setValue] = useState('');
    const {url} = useRouteMatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}${url}`)
    }

    if(url === '/') {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type='submit' value='Submit' />
        </form>
    )

}

export default Search;