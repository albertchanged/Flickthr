import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Gallery from './components/Gallery';
import style from './style.css';
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
    this.getGallery('dog');
  }
  getGallery(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR.API_KEY}&tags=${query}&per_page=30&format=json&nojsoncallback=1`)
      .then((res) => {
        let photos = (res.data.photos.photo.length > 0) ? res.data.photos.photo : [];
        this.setState({
          photoList: photos
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Flickthr</h1>
        <Search updateGallery={this.getGallery.bind(this)} />
        <Gallery photoList={this.state.photoList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));