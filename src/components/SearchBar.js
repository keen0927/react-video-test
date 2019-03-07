import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: 'test'
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
        console.log(this.state.term);
    }        

    onFormSubmit = (event) => {
        // event.preventDefault();

        console.log('11');
        
    }

    render() {

        const { term } = this.state;

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={term}
                            onChange={this.onInputChange}
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;