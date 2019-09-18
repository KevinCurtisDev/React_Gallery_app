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

  componentDidMount() {
    this.searchFlowers();
    this.searchTrees();
    this.searchSunsets();
  }

  searchImages = query => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  images: response.data.photos.photo,
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  searchFlowers = (query = "flowers") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  flowers: response.data.photos.photo,
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  searchTrees = (query = "trees") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  trees: response.data.photos.photo,
                  loading: false
              })
          })
          .catch(error => {
              console.log(error)
          })
  }

  searchSunsets = (query = "sunset") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=12`)
          .then(response => {
              this.setState({
                  sunsets: response.data.photos.photo,
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
        <SearchBar onSearch={this.searchImages}/>
        <Navigation />
          <div className="App">
              <Switch>
                <Route exact path="/" render={ () => this.state.loading? <p>Loading......</p> : <Redirect  to="/flowers" /> } />
                <Route path="/flowers" render={ () => this.state.loading? <p>Loading......</p> : <Results pics={this.state.flowers} heading={"Flowers"}/> } />
                <Route path="/trees" render={ () => this.state.loading? <p>Loading......</p> : <Results  pics={this.state.trees} heading={"Trees"}/> } />
                <Route path="/sunset" render={ () => this.state.loading? <p>Loading......</p> : <Results  pics={this.state.sunsets} heading={"Sunsets"}/> } />
                <Route path="/search/:name" render={ () => this.state.loading? <p>Loading......</p> : <Results onSearch={this.searchImages} pics={this.state.images} heading={"Results"}/> } />
                <Route component={NoMatch} />
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
