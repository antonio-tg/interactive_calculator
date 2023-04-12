import React from 'react';
import '../stylesheets/clear_button.css'

const Clear_Button = (props) => (
  <div className='clear_button' onClick={props.handle_click}>
    {props.children}
  </div>
);

export default Clear_Button