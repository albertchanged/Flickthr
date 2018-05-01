import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Gallery from './components/Gallery';

import style from '../build.css';
import FLICKR from '../flickr.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: []
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this.getGallery();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getGallery(query = 'puppies') {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR.API_KEY}&tags=${query}&sort=relevance&is_getty=true&per_page=51&format=json&nojsoncallback=1`)
      .then((res) => {
        let photos = (query !== '' && res.data.photos && res.data.photos.photo.length > 0) ? res.data.photos.photo : [1];
        if (this._isMounted) {
          this.setState({
            photoList: photos
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h1 className="Index-title">flick<span className="u-titleSpanColor">thr</span></h1>
        <Search updateGallery={this.getGallery.bind(this)} />
        <Gallery photoList={this.state.photoList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));