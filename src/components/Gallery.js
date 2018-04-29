import React, { Component } from 'react';
import Photo from './Photo';

const Gallery = (props) => {
  // this.props
  console.log(props.photoList);
  return (
    <div id="pageBody">
      <div className="Grid Grid--fill Grid--withGutter">
        { 
          props.photoList.map((photo) => {
            let photoURL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
            return <Photo key={photo.id} url={photoURL} />;
          })
        }
      </div>
    </div>
  )
}

export default Gallery;