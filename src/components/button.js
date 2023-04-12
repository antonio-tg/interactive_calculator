import React from 'react'
import '../stylesheets/Button.css'

function Button(props) {
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <div
      className={`button_container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handle_click(props.children)}>
      {props.children}  
    </div>
  );
}

export default Button