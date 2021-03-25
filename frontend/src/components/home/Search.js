import React, { useState } from 'react';

const Search = () => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <input type='submit' value='Submit' />
        </form>
    )

}

export default Search;