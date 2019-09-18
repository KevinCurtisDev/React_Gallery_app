import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component{

    state = {
        searchText: ''
    };
    onSearchChange = e => {
        this.setState({searchText: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
        let path = `/search/${this.state.searchText}`;
        this.props.history.push(path);
    }
    
    render(){
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" onChange={this.onSearchChange} ref={input => this.query=input} />
                <button type="submit">🔍</button>
            </form>
        )
    }
}

export default withRouter(SearchBar);