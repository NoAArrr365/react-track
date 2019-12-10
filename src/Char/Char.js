import React from 'react';

const char = (props) => {

  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    textalign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  return(
    <div style={charStyle} onClick={props.clicked}>
    <p>{props.letterDisplay}</p>
    </div>
  )
}








export default char;
