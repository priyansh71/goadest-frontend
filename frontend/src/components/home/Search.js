import React, { useState } from 'react';

const Search = () => {

    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type='submit' value='Submit' />
        </form>
    )

<<<<<<< HEAD
=======
    handleSubmit(event) {
        event.preventDefault();
        // Send the data to Backend
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input id="textbox" type='text' value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Search' />
                </form>
            </div>
        );
    }
>>>>>>> 1c2a6e36cd8b8df79cc1834fdff9a2766217db3d
}

export default Search;