import React from 'react';

function ScoreBoard(props) {

  return (
    <div className="scoreBoard">
      <h2 className="scoreTitle">Total Score:</h2>
      <h5 className="scoreGuide">(safe trip = 100)</h5>
      <h3 className="score">{props.score}</h3>
      <h2 className="scoreTitle">Fatigue level:</h2>
      <h5 className="scoreGuide">(max 10)</h5>
      <h3 className="score scoreBottom">{props.tired}</h3>
    </div>
  )
};

export default ScoreBoard;
