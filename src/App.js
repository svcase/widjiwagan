import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/home.css';
import Title from './components/title.js'
import Grid from './components/grid.js';
import ScoreBoard from './components/scoreboard.js';
import CurrentMove from './components/currentmove.js';

const idArray = [];

function createArray() {
  for (var i = 1; i <= 100; i++) {
    const num = i.toString();
    idArray.push(num);
 };
};
createArray();

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
};
shuffle(idArray);

const passArray = idArray.splice(0, 6);
const riverArray = idArray.splice(0, 6);
const peakArray = idArray.splice(0, 4);
const tussockArray = idArray.splice(0, 2);
const waterArray = idArray.splice(0, 5);
const candyArray = idArray.splice(0, 1);
const jokeArray = idArray.splice(0, 1);
const layoverArray = idArray.splice(0, 2);
const tlArray = idArray.splice(0, 1);
const caribouArray = idArray.splice(0, 1);
const dessertArray = idArray.splice(0, 2);
const campsiteArray = idArray.splice(0, 1);
const heartsArray = idArray.splice(0, 2);
const bookArray = idArray.splice(0, 1);
const burnArray = idArray.splice(0, 3);
const bearArray = idArray.splice(0, 1);
const resupplyArray = idArray.splice(0, 1);
const rainArray = idArray.splice(0, 2);
const mosquitoArray = idArray.splice(0, 2);
const failedRiverArray = idArray.splice(0, 1);
const socksArray = idArray.splice(0, 1);
const sunArray = idArray.splice(0, 2);
const sunscreenArray = idArray.splice(0, 2);
const lifeArray = idArray.splice(0, 1);


function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [tiredScore, setTiredScore] = useState(0);

  const [currentMove, setCurrentMove] = useState("");
  const [scoreMove, setScoreMove] = useState("");
  const [moveEmoji, setMoveEmoji] = useState("");
  const [scoreColor, setScoreColor] = useState("");
  const [tiredMove, setTiredMove] = useState("");

  const [moveTitle, setMoveTitle] = useState("Current Move:");

  function disableBtn(id) {
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById(id).disabled = true;
  });};
  function enableBtn(id) {
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById(id).disabled = false;
  });};
  disableBtn("newBtn");


  function handlePass(num) {
    document.getElementById(num).innerHTML = "&#x1F304";
    setCurrentMove("Up and over another pass. A hard climb but the views make up for it!");
    setScoreMove("+3");
    setMoveEmoji("🌄");
    setScoreColor("green");
    setTiredMove("(Fatigue +1)");
  };
  function handleRiver(num) {
    document.getElementById(num).innerHTML = "&#x1F30A";
    setCurrentMove("Successful river crossing! Great technique everyone.");
    setScoreMove("+3");
    setMoveEmoji("🌊");
    setScoreColor("green");
    setTiredMove("(Fatigue +1)");
  };
  function handleDefault(num) {
    document.getElementById(num).innerHTML = "&#x1F6B6";
    setCurrentMove("Just hikin'");
    setMoveEmoji("🚶🏽");
    setScoreMove("");
    setScoreColor("");
    setTiredMove("");
  };
  function handlePeak(num) {
    document.getElementById(num).innerHTML = "&#x1F3D4";
    setCurrentMove("Bagged a peak! What a view!");
    setScoreMove("+3");
    setMoveEmoji("🏔️");
    setScoreColor("green");
    setTiredMove("(Fatigue +1)");
  };
  function handleTussock(num) {
    document.getElementById(num).innerHTML = "&#x1F974";
    setCurrentMove("Ugh, full day hiking on tussocks.");
    setScoreMove("-5");
    setMoveEmoji("🥴");
    setScoreColor("red");
    setTiredMove("(Fatigue +3)");
  };
  function handleCandy(num) {
    document.getElementById(num).innerHTML = "&#x1F36B";
    setCurrentMove("Full size candy bar for everyone - best pack present ever!");
    setScoreMove("+10");
    setMoveEmoji("🍫");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleWater(num) {
    document.getElementById(num).innerHTML = "&#x1F4A7";
    setCurrentMove("A good chug of water to keep you going. Way to stay hydrated.");
    setScoreMove("+5");
    setMoveEmoji("💧");
    setScoreColor("green");
    setTiredMove("(Fatigue -1)");
  };
  function handleJoke(num) {
    document.getElementById(num).innerHTML = "&#x1F923";
    setCurrentMove("New group inside joke - haven't laughed that hard in a long time!");
    setScoreMove("+10");
    setMoveEmoji("🤣");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleLayover(num) {
    document.getElementById(num).innerHTML = "&#x1F634";
    setCurrentMove("Layover day! Rest up. Pancakes, nap, repeat.");
    setScoreMove("+5");
    setMoveEmoji("😴");
    setScoreColor("green");
    setTiredMove("(Fatigue -2)");
  };
  function handleTl(num) {
    document.getElementById(num).innerHTML = "&#x1F9C0";
    setCurrentMove("TL time. Much needed recharge.");
    setScoreMove("+5");
    setMoveEmoji("🧀");
    setScoreColor("green");
    setTiredMove("(Fatigue -1)");
  };
  function handleCaribou(num) {
    document.getElementById(num).innerHTML = "&#x1F92F";
    setCurrentMove("You found a wild blueberry patch as a herd of caribou run by. Mind. Blown.");
    setScoreMove("+15");
    setMoveEmoji("🦌");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleDessert(num) {
    document.getElementById(num).innerHTML = "&#x1F370";
    setCurrentMove("Dessert night!");
    setScoreMove("+5");
    setMoveEmoji("🍰");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleCampsite(num) {
    document.getElementById(num).innerHTML = "&#x1F3D5";
    setCurrentMove("Best campsite yet!");
    setScoreMove("+7");
    setMoveEmoji("🏕️");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleHearts(num) {
    document.getElementById(num).innerHTML = "&#x1F496";
    setCurrentMove("You beat everyone at Hearts...again.");
    setScoreMove("+5");
    setMoveEmoji("💖");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleBook(num) {
    document.getElementById(num).innerHTML = "&#x1F4D6";
    setCurrentMove("The group book just got REALLY good.");
    setScoreMove("+5");
    setMoveEmoji("📖");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleBurn(num) {
    document.getElementById(num).innerHTML = "&#x1F525";
    setCurrentMove("Ouch, major sunburn. Lather up tomorrow!");
    setScoreMove("-3");
    setMoveEmoji("🔥");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleBear(num) {
    document.getElementById(num).innerHTML = "&#x1F43B";
    setCurrentMove("Bear got into the resupply...");
    setScoreMove("-10");
    setMoveEmoji("🐻");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleResupply(num) {
    document.getElementById(num).innerHTML = "&#x1F6E9";
    setCurrentMove("Bush pilot is late for the resupply...so hungryyy!");
    setScoreMove("-5");
    setMoveEmoji("🛩️");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleRain(num) {
    document.getElementById(num).innerHTML = "&#x1F327";
    setCurrentMove("It's been raining for a week straight...will we ever see the sun again?");
    setScoreMove("-4");
    setMoveEmoji("🌧️");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleMosquito(num) {
    document.getElementById(num).innerHTML = "&#x1F99F";
    setCurrentMove("The mosquitos are on another level today. So bad you've been putting off going to the bathroom.");
    setScoreMove("-4");
    setMoveEmoji("🦟");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleFailedRiver(num) {
    document.getElementById(num).innerHTML = "&#x1F625";
    setCurrentMove("Oh no, failed river crossing! Nobody is hurt and only a Nalgene was lost. Set up camp, warm up, and regroup.");
    setScoreMove("-10");
    setMoveEmoji("😥");
    setScoreColor("red");
    setTiredMove("");
  };
  function handleSocks(num) {
    document.getElementById(num).innerHTML = "&#x1F9E6";
    setCurrentMove("Score! Fresh socks and underwear in the resupply.");
    setScoreMove("+10");
    setMoveEmoji("🧦");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleSun(num) {
    document.getElementById(num).innerHTML = "&#x1F31E";
    setCurrentMove("Nothing but sunshine today.");
    setScoreMove("+5");
    setMoveEmoji("🌞");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleSunscreen(num) {
    document.getElementById(num).innerHTML = "&#x1F9F4";
    setCurrentMove("Sunscreen reapplied. Self care for the win.");
    setScoreMove("+3");
    setMoveEmoji("🧴");
    setScoreColor("green");
    setTiredMove("");
  };
  function handleLife(num) {
    document.getElementById(num).innerHTML = "&#x1F9D8";
    setCurrentMove("Life all of a sudden makes a whole lot of sense.");
    setScoreMove("+7");
    setMoveEmoji("🧘🏽");
    setScoreColor("green");
    setTiredMove("");
  };
  function gameOver() {
  setMoveTitle("GAME OVER!");
  setCurrentMove("You didn't take care of yourself! Now you're tired, grumpy and want to go home. Trip spoiled.");
  setMoveEmoji("😵");
  setScoreMove("");
  setScoreColor("");
  setTiredMove("");
  enableBtn("newBtn");
  document.getElementById("newBtn").disabled = false;
  document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};
function win() {
setMoveTitle("WINNER!");
setCurrentMove("You respected yourself, others, equipment, and the environment for 40 days all while having the time of your life!");
setMoveEmoji("🙌");
setScoreMove("");
setScoreColor("");
setTiredMove("");
enableBtn("newBtn");
document.getElementById("newBtn").disabled = false;
document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};
function tie() {
setMoveTitle("WINNER!");
setCurrentMove("You reached your limit right at the pickup. All in all a great trip. Now you can sleep all the way back to Camp.");
setMoveEmoji("🙌");
setScoreMove("");
setScoreColor("");
setTiredMove("");
enableBtn("newBtn");
document.getElementById("newBtn").disabled = false;
document.querySelectorAll(".box").forEach(elem => {elem.disabled = true});
};

function checkGame() {
  if (moveTitle !== "GAME OVER!" && moveTitle !== "WINNER!") {
  if (tiredScore >= 10 && currentScore < 100) {gameOver()}
  else if (currentScore >= 100 && tiredScore < 10) {win()}
  else if (currentScore >= 100 && tiredScore >= 10) {tie()}
}
};

  function handleClick(event) {
    const currentId = event.target.id;
    if (passArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (tiredScore >= 9) {setTiredScore(10)} else {setTiredScore(tiredScore + 1)};
      handlePass(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (riverArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (tiredScore >= 9) {setTiredScore(10)} else {setTiredScore(tiredScore + 1)};
      handleRiver(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (peakArray.includes(currentId)) {
      if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
      if (tiredScore >= 9) {setTiredScore(10)} else {setTiredScore(tiredScore + 1)};
      handlePeak(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (tussockArray.includes(currentId)) {
      if (currentScore >= 5) {setCurrentScore(currentScore - 5)} else {setCurrentScore(0)};
      if (tiredScore >= 7) {setTiredScore(10)} else {setTiredScore(tiredScore + 3)};
      handleTussock(currentId);
      document.getElementById(currentId).disabled = true;
  }
    else if
    (candyArray.includes(currentId)) {
      if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
      handleCandy(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
    (waterArray.includes(currentId)) {
      if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
      if (tiredScore >= 1) {setTiredScore(tiredScore - 1)} else {setTiredScore(0)};
      handleWater(currentId);
      document.getElementById(currentId).disabled = true;
  } else if
  (jokeArray.includes(currentId)) {
    if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
    handleJoke(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (layoverArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    if (tiredScore >= 2) {setTiredScore(tiredScore - 2)} else {setTiredScore(0)};
    handleLayover(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (tlArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    if (tiredScore >= 1) {setTiredScore(tiredScore - 1)} else {setTiredScore(0)};
    handleTl(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (caribouArray.includes(currentId)) {
    if (currentScore >= 85) {setCurrentScore(100)} else {setCurrentScore(currentScore + 15)};
    handleCaribou(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (dessertArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleDessert(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (campsiteArray.includes(currentId)) {
    if (currentScore >= 93) {setCurrentScore(100)} else {setCurrentScore(currentScore + 7)};
    handleCampsite(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (heartsArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleHearts(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (bookArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleBook(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (burnArray.includes(currentId)) {
    if (currentScore >= 3) {setCurrentScore(currentScore - 3)} else {setCurrentScore(0)};
    handleBurn(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (bearArray.includes(currentId)) {
    if (currentScore >= 10) {setCurrentScore(currentScore - 10)} else {setCurrentScore(0)};
    handleBear(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (resupplyArray.includes(currentId)) {
    if (currentScore >= 5) {setCurrentScore(currentScore - 5)} else {setCurrentScore(0)};
    handleResupply(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (rainArray.includes(currentId)) {
    if (currentScore >= 4) {setCurrentScore(currentScore - 4)} else {setCurrentScore(0)};
    handleRain(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (mosquitoArray.includes(currentId)) {
    if (currentScore >= 4) {setCurrentScore(currentScore - 4)} else {setCurrentScore(0)};
    handleMosquito(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (failedRiverArray.includes(currentId)) {
    if (currentScore >= 10) {setCurrentScore(currentScore - 10)} else {setCurrentScore(0)};
    handleFailedRiver(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (socksArray.includes(currentId)) {
    if (currentScore >= 90) {setCurrentScore(100)} else {setCurrentScore(currentScore + 10)};
    handleSocks(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (sunArray.includes(currentId)) {
    if (currentScore >= 95) {setCurrentScore(100)} else {setCurrentScore(currentScore + 5)};
    handleSun(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (sunscreenArray.includes(currentId)) {
    if (currentScore >= 97) {setCurrentScore(100)} else {setCurrentScore(currentScore + 3)};
    handleSunscreen(currentId);
    document.getElementById(currentId).disabled = true;
  } else if
  (lifeArray.includes(currentId)) {
    if (currentScore >= 93) {setCurrentScore(100)} else {setCurrentScore(currentScore + 7)};
    handleLife(currentId);
    document.getElementById(currentId).disabled = true;
  }
  else
  {
    handleDefault(currentId);
    document.getElementById(currentId).disabled = true;
  };
  };

checkGame();

function clickGameBtn() {
  window.location.reload();
};

  return (
      <div className="container">
          <div className="title">
            <Title />
          </div>
          <aside className='left'>
            <ScoreBoard score={currentScore} tired={tiredScore}/>
          </aside>
          <main>
            <Grid clicked={handleClick}/>
          </main>
          <aside className='right'>
            <CurrentMove name={moveTitle} value={currentMove} add={scoreMove} emoji={moveEmoji} color={scoreColor} show={clickGameBtn} tired={tiredMove}/>
          </aside>
      </div>
    );
};

export default App;
