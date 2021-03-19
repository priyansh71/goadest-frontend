import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

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
}

export default Search;