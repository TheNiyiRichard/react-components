import React from 'react';
import Button from './Button';
import '../css/style.css';

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Button buttonType={props.buttonType}>{props.buttonText}</Button>
      </div>
    </div>
  );
}

export default Banner;

