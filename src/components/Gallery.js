import React from 'react';
import '../css/style.css';

function Gallery(props) {
  return (
    <div className="gallery">
      {props.items.map((url, index) => (
        <img key={index} src={url} alt={`Gallery item ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;

