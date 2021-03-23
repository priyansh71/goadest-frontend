import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const Search = ({value, onChange}) => {

    const {url} = useRouteMatch();

    if(url === '/') {
        return null;
    }

    return (
        <form>
            <input type='text' value={value} onChange={onChange}/>
        </form>
    )

}

export default Search;