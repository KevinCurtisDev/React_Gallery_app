import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component{

    state = {
        searchText: ''
    };

    //Access the text inputted into the search field
    onSearchChange = e => {
        this.setState({searchText: e.target.value})
    };

    handleSubmit = e => {
        //prevent a page reload
        e.preventDefault();
        //give onSearch the searchfield text, and fire the searchImages function
        this.props.onSearch(this.state.searchText);
        //Clear the search field 
        e.currentTarget.reset();
        //Create a variable to hold the searched for url path
        let path = `/search/${this.state.searchText}`;
        //push the url path to the router history
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

//Export teh SearchBar component wrapped in 'withRouter' in order to give SearchBar access to the Router props
export default withRouter(SearchBar);