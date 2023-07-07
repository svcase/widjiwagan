import '../styles/CurrentMove.css';

function CurrentMove({name, emoji, value, color, add, tired, clickFunc}) {

  return (
    <div className="currentMove">
      <h2 className="titleMoveOne">{name}</h2>
      <h4 className="moveImg">{emoji}</h4>
      <p className="moveText">{value}</p>
      <h3 style={{color: color}} className="scoreChange">{add}</h3>
      <p className="tiredMove">{tired}</p>
      <button onClick={clickFunc} className="btn" id="newBtn">Try Again</button>
    </div>
  )
};

export default CurrentMove;
