function createArray() {
    let arr = [];
    for (var i = 1; i <= 100; i++) {
      const num = i.toString();
      arr.push(num);
   };
   return arr;
  };

function shuffleArr(arr) {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
  };

function initDisableBtn(id) {
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById(id).disabled = true;
  });};

function disableBtn(id) {
    document.getElementById(id).disabled = true;
  }

function enableBtn(id) {
    document.getElementById(id).disabled = false;
};

function showBox(id, content) {
    document.getElementById(id).innerHTML = content;
}

export { createArray, shuffleArr, initDisableBtn, disableBtn, enableBtn, showBox };