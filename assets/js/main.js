let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let harsh = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const bluePanel = document.querySelector("#bluePanel");
const greenPanel = document.querySelector("#greenPanel");
const redPanel = document.querySelector("#redPanel");
const yellowPanel = document.querySelector("#yellowPanel");
const harshButton = document.querySelector("#harsh");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

harshButton.addEventListener('click', (event) => {
    if (harshButton.checked == true) {
        harsh = true;
    } else {
        harsh = false;
    }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "--";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  bluePanel.style.backgroundColor = "lightskyblue";
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  greenPanel.style.backgroundColor = "lightgreen";
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  redPanel.style.backgroundColor = "tomato";
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  yellowPanel.style.backgroundColor = "yellow";
}

function clearColor() {
  bluePanel.style.backgroundColor = "#0000a5";
  greenPanel.style.backgroundColor = "#024b30";
  redPanel.style.backgroundColor = "#a50000";
  yellowPanel.style.backgroundColor = "#ffcb0c";
}

bluePanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        //check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

greenPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        //check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

redPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        //check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

yellowPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        //check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})