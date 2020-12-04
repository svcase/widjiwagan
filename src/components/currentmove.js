import React from 'react';

function CurrentMove(props) {

  return (
    <div className="currentMove">
      <h2 className="titleMoveOne">{props.name}</h2>
      <h4 className="moveImg">{props.emoji}</h4>
      <p className="moveText">{props.value}</p>
      <h3 style={{color: props.color}} className="scoreChange">{props.add}</h3>
      <p className="tiredMove">{props.tired}</p>
      <button onClick={props.show} className="btn" id="newBtn">Try Again</button>
    </div>
  )
};

export default CurrentMove;
