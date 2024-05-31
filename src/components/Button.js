import React from 'react';
import '../css/style.css';

function Button(props) {
  return (
    <button className={`button ${props.buttonType}`}>
      {props.children}
    </button>
  );
}

export default Button;
