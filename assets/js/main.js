let order = [];                                             /*Keeps track of flashing coloured panels*/
let playerOrder = [];                                       /*The order the player presses the panels*/
let flash;                                                  /*Number of flashes in game*/
let turn;                                                   /*Keeps track on what turn we're on*/
let good;                                                   /*If the player has hit the correct colours*/
let compTurn;                                               /*See's if it's the computers turn or the players*/
let intervalId;                                             /*Used to stop the game flashing colours*/
let harsh = false;                                          /*Checks if the harder dificulty is off. Game begins with this difficulty off*/
let noise = true;                                           /*Sound when panels are flashed or clicked*/
let on = false;                                             /*If the game has been turned on. Game begins off*/
let win;                                                    /*If game has been won*/

/*Sets constants taht are used to reference elements in HTML to add interactivity to the game*/

const turnCounter = document.querySelector("#turn");        
const bluePanel = document.querySelector("#bluePanel");
const greenPanel = document.querySelector("#greenPanel");
const redPanel = document.querySelector("#redPanel");
const yellowPanel = document.querySelector("#yellowPanel");
const harshButton = document.querySelector("#harsh");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

/*What happens when the harsh button is checked*/

harshButton.addEventListener('click', (event) => {
    if (harshButton.checked === true) {
        harsh = true;
    } else {
        harsh = false;
    }
});

/*What happens when the power button is checked. Also shows the turn counter is working as "--" shows in the box when on and "" empty when power is off*/

onButton.addEventListener('click', (event) => {
  if (onButton.checked === true) {
    on = true;
    turnCounter.innerHTML = "--";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

/*What happens when the start button is clicked*/

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

/*What happens when the game plays. Variables are reset for the beginning of the game. The turn counter box shows the first move as the game has begun*/

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {                        /*Loop that shows how the random panels are picked when the game is played*/
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);              /*Runs the function everytime the time stated is reached*/
}

function gameTurn() {
  on = false;                                           /*This stops the player clicking the coloured panels when the game is off*/

  if (flash === turn) {                                 /*Flash means a turn is completed and the couloured panels colour will be cleared*/
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

/*Assigns the numbers 1-4 to a different coloured panel and calls the function to flash the correct sequence of colours for the computers turn*/

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] === 1) one();
      if (order[flash] === 2) two();
      if (order[flash] === 3) three();
      if (order[flash] === 4) four();
      flash++;
    }, 200);
  }
}

/*Shows the functions that will be called from the number in the order array. Adds a sound when a panel is flashed and changes the colour of the panels too*/

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
  yellowPanel.style.backgroundColor = "lightyellow";
}

/*Colours of the panels when they have not been flashed or clicked*/

function clearColor() {
  bluePanel.style.backgroundColor = "#0000a5";
  greenPanel.style.backgroundColor = "#024b30";
  redPanel.style.backgroundColor = "#a50000";
  yellowPanel.style.backgroundColor = "#ffcb0c";
}

/*Colours of the panels when they have been flashed or clicked*/

function flashColor() {
  bluePanel.style.backgroundColor = "lightskyblue";
  greenPanel.style.backgroundColor = "lightgreen";
  redPanel.style.backgroundColor = "tomato";
  yellowPanel.style.backgroundColor = "lightyellow";
}

/*Keeps track of when the player has clicked the blue panel*/

bluePanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

/*Keeps track of when the player has clicked the green panel*/

greenPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

/*Keeps track of when the player has clicked the red panel*/

redPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

/*Keeps track of when the player has clicked the yellow panel*/

yellowPanel.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

/*Function that checks if the player has failed yet. Also to check that the game is still running*/

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

    if (playerOrder.length === 20 && good) {
        winGame();      /*Sets the win condition*/
    }


    /*This sets what happens when the player fails a sequence, the turn counter box will show NO! to indicate the wrong input and restart the current sequence*/

    if (good === false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();
            alert("Oh it's over? You only reached level " + turn + "! Failure is not an option! Give it another try I know you can win this!") /*Alert to stop the browser to show a funny message when the player has failed and to try again to beat the game*/

            if (harsh) {        /*Sets the condition that "Harsh" mode is activated and the game will restart on failure*/
                play();
            } else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 100);  /*Interval shortened to stop the player clicking when the computer hasn't finished it's turn*/

        noise = false;
    }

    /*The game keeps increasing the amount of turns based on the success of the player and not yet winning the game*/

    if (turn === playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}

/*This is what happens when the game has been won!*/

function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
    setTimeout(() => {alert("You won? Really? Do it again to prove it wasn't a one off!");}, 50); /*Added an alert message to say the player won and to try again*/
}