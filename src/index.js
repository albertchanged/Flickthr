import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import Search from './components/Search';
import Gallery from './components/Gallery';
import axios from 'axios';
import FLICKR from '../flickr.js';
// import photo from '../'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: []
    }
  }
  componentDidMount() {
    this.getGallery('puppy');
  }
  getGallery(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR.API_KEY}&tags=${query}&per_page=30&format=json&nojsoncallback=1`)
      .then((res) => {
        let photos = res.data.photos.photo;
        if (photos.length > 0) {
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
        <h1>Flickthr</h1>
        <Search />
        <Gallery photoList={this.state.photoList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));