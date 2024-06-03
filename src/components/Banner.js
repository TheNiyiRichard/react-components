import React from 'react';
import Button from './Button';
import '../css/style.css';

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="buttons">
          {props.buttons.map((button, index) => (
            <Button key={index} buttonType={button.type}>{button.text}</Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
