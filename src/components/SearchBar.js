import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
        console.log(this.state.term);
    }        

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
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
                            placeholder="키워드를 입력하세요."
                            // onFormSubmit={}
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;