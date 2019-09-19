import React, {Component} from 'react';
import './App.css';
import apiKey from './config';
import axios from 'axios'
import {
  Switch,
  Redirect,
  BrowserRouter,
  Route
} from 'react-router-dom';

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import Results from './components/Results';
import NoMatch from './components/NoMatch';


class App extends Component {
  constructor(){
    super();
    this.state = {
      images: [],
      flowers: [],
      trees: [],
      sunsets: [],
      loading: true
    }
  }

  //During the component did mount phase f the lifecycle fetch an array of images for each preset photo selection
  componentDidMount() {
    this.searchFlowers();
    this.searchTrees();
    this.searchSunsets();
  }

  //Generic search function used to fetch images that are searched for in the search bar
  searchImages = query => {
    //Use axios to connect and form a get request from the flickr API
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  images: response.data.photos.photo,
                  //Set loading to false once images have been loaded in or no images have matched
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  //A function that specifically searches for flowers
  searchFlowers = (query = "flowers") => {
    //Use axios to connect and form a get request from the flickr API
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  flowers: response.data.photos.photo,
                  //Set loading to false once images have been loaded in or no images have matched
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  //A function that specifically searches for Trees
  searchTrees = (query = "trees") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  //Use axios to connect and form a get request from the flickr API
                  trees: response.data.photos.photo,
                  //Set loading to false once images have been loaded in or no images have matched
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  //A function that specifically searches for sunsets
  searchSunsets = (query = "sunset") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  //Use axios to connect and form a get request from the flickr API
                  sunsets: response.data.photos.photo,
                  //Set loading to false once images have been loaded in or no images have matched
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }


  render(){
    return (
      <div className="App">
        <BrowserRouter>
          {/* Include the search bar on each page */}
          <SearchBar onSearch={this.searchImages}/>
          {/* Include the navigation menu on each page */}
          <Navigation />
          {/* Render a loading paragraph while waiting for imagaes to populate */}
          {(this.state.loading) ? <p>Loading......</p> 
          : <div className="App">
                <Switch>
                  <Route exact path="/" render={ () => <Redirect  to="/flowers" /> } />
                  <Route path="/flowers" render={ () => <Results pics={this.state.flowers} heading={"Flowers"}/> } />
                  <Route path="/trees" render={ () => <Results  pics={this.state.trees} heading={"Trees"}/> } />
                  <Route path="/sunset" render={ () => <Results pics={this.state.sunsets} heading={"Sunsets"}/> } />
                  <Route path="/search" render={ () => <Results onSearch={this.searchImages} pics={this.state.images} heading={"Results"}/> } />
                  <Route component={NoMatch} />
                </Switch>
            </div>}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
