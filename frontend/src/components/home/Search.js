import React, { useState } from 'react';

const Search = () => {

    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}`)
    }

    return (
        <form action={`/locations/${value}`}>
            <input type='text' name='q' value={value} onChange={(e) => setValue(e.target.value)}/>
            <input type='submit' value='Submit' />
        </form>
    )

}

export default Search;