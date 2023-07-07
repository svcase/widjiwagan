import Box from './Box';
import '../styles/Grid.css';

function Grid({clickFunc}) {
  
  const boxes = [];

  for(let i=1; i<101; i++) {
    boxes.push(<Box key={i} clickFunc={clickFunc} id={i.toString()} />)
  }

  function setRows(startIdx, endIdx) {
    return boxes.slice(startIdx, endIdx);
  }

  const row1 = setRows(0,10);
  const row2 = setRows(10,20);
  const row3 = setRows(20,30);
  const row4 = setRows(30,40);
  const row5 = setRows(40,50);
  const row6 = setRows(50,60);
  const row7 = setRows(60,70);
  const row8 = setRows(70,80);
  const row9 = setRows(80,90);
  const row10 = setRows(90,100);

  return (
      <div className="grid">

        <div className="row">
          {row1}
        </div>
        <div className="row">
          {row2}
        </div>
        <div className="row">
          {row3}
        </div>
        <div className="row">
          {row4}
        </div>
        <div className="row">
          {row5}
        </div>
        <div className="row">
          {row6}
        </div>
        <div className="row">
          {row7}
        </div>
        <div className="row">
          {row8}
        </div>
        <div className="row">
          {row9}
        </div>
        <div className="row">
          {row10}
        </div>

      </div>
)
};

export default Grid;
