import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        //Need callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.searchTerm}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;