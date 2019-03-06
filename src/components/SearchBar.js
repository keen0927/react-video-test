import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: 'test'
    };

    

    render() {

        const onInputChange = () => {
            console.log('11');
        }        

        const { term } = this.state;

        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={term}
                            onChange={onInputChange}
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;