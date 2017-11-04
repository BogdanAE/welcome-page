////get a random card 0-12
// 1 heart
// 2 diamond
// 3 clubs
// 4 spades
//0_of_clubs
// number from 1-13  and color(1 -> 4) => randomCard = [6, 2] 6 of spades for example where 1 is hearth 2 is spade etc

var name, score, turn, botTurn, SCORES = [], randomCard = [], AIscore = [];
var cardDrawnContainer = document.querySelector(".cardDraw-container");
var scoreText = document.querySelector(".scoreText");
var turnV = document.getElementById("turnValue");
var card1 = document.querySelector(".card1");
var AIcontainer = document.querySelector(".AIscoreContainer");
var AIscoreText = document.querySelector(".AIscoreText");
var cardDrawed = document.querySelector(".cardDraw-container");
var textWon = document.querySelector(".textWhoWonText");
var turnContainer = document.querySelector(".turn");
var scoreContainer = document.querySelector(".scoreContainer");
var holdButton = document.querySelector(".btn-hold");
var getButton = document.querySelector(".btn-get");
var newButton = document.querySelector(".btn-new");
var preGameText = document.querySelector(".preGameText");


init();

document.querySelector(".btn-get").addEventListener('click', getCard);
document.querySelector(".btn-hold").addEventListener('click', AIturn);
document.querySelector(".btn-new").addEventListener('click', start);
document.querySelector(".btn-start").addEventListener('click', start);


//generate a random pair of numbers and add the score
function genRandomPair() {
    randomCard = [Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 4) + 1];
}

//get that random generated numbers as a card 
function getCard() {
    getButton.style.transform = "translate(3px, -3px)";
    genRandomPair();
    cardDrawnContainer.style.background = "none";
    // console.log(randomCard);
    cardDrawnContainer.style.transform = "scale(0.7)";
    cardDrawnContainer.style.background = "url('./21/files/my-order/" + randomCard[0] + "_of_" + randomCard[1] + ".png') no-repeat 0 0";
    hitMe();
    setTimeout(function () {
        getButton.style.transform = "translate(-4px, 4px)";
    }, 200);
}



function hitMe() {
    if (((score) <= 21)) {
        turn++;
        score += randomCard[0];
        scoreText.textContent = score;
        turnV.textContent = turn;
        if (botTurn < 4) {
            botTurn++;
        }
        else {
            turn++;
            botTurn = 1;
            document.querySelector(".card2").style.background = "none";
            document.querySelector(".card3").style.background = "none";
            document.querySelector(".card4").style.background = "none";
        }
        document.querySelector(".card" + botTurn).style.transform = "scale(0.3)";
        document.querySelector(".card" + botTurn).style.background = "url('./21/files/my-order/" + randomCard[0] + "_of_" + randomCard[1] + ".png') no-repeat 0 0";
    }
    else {
        AIturn();
    }
}

function AIturn() {
    AIcontainer.style.display = "block";
    SCORES[0] = score;
    while (SCORES[1] <= 21) {
        genRandomPair();
        AIscore = randomCard[0]
        SCORES[1] += AIscore;
        AIscoreText.textContent = SCORES[1]
        if (SCORES[1] > 16) {
            break;
        }
    }
    checkWhoWon();
    newButton.style.display = "block";
}
function checkWhoWon() {
    cardDrawed.style.display = "none";
    if (((SCORES[0] >= SCORES[1]) && SCORES[0] <= 21) || (SCORES[0] <= 21 && (SCORES[1] > 21))) {
        hidePlayButtons();
        scoreContainer.classList.toggle("won");
        textWon.style.display = "block";
        textWon.textContent = "You won !";
    }
    else if (((SCORES[1] >= SCORES[0]) && SCORES[1] <= 21) || (SCORES[1] <= 21 && (SCORES[0] > 21))) {
        hidePlayButtons()
        AIcontainer.classList.toggle("won");
        textWon.style.display = "block";
        textWon.textContent = "AI won !"
    }
    else {
        hidePlayButtons();
        scoreContainer.classList.add("draw");
        AIcontainer.classList.add("draw");
        textWon.style.display = "block";
        textWon.textContent = "It's a draw ! Try again";
    }
    // init();
}
function hidePlayButtons() {
    document.querySelector(".btn-get").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
}

function init() {
    botTurn = 0;
    score = 0;
    turn = 0;
    SCORES = [0, 0];
    AIscore = 0;
    
    turnV.textContent = turn;
    removeClasses();
    document.querySelector(".btn-get").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";
    turnContainer.style.display = "none";
    cardDrawed.style.display = "none";
    holdButton.style.display = "none";
    AIcontainer.style.display = "none";
    scoreContainer.style.display = "none";
    cardDrawnContainer.style.background = "none";
    newButton.style.display = "none";
    textWon.style.display = "none";
    getButton.style.display = "none";
    cardDrawnContainer.style.background = 'url("./21/start.jpg")';  
    cardDrawnContainer.style.transform = "scale(0.7)";
    for (let i = 1; i <= 4; i++) {
        document.querySelector(".card" + i).style.transform = "scale(0.3)";
        document.querySelector(".card" + i).style.background = "none";
    }
    scoreText.textContent = '0';
}

function removeClasses() {
    scoreContainer.classList.remove("won");
    AIcontainer.classList.remove("won");
    scoreContainer.classList.remove("draw");
    AIcontainer.classList.remove("draw");
}
function start() {
    init();
    preGameText.style.display = "none";
    getButton.style.display = "block";
    holdButton.style.display = "block";
    document.querySelector(".btn-start").style.display = "none";
    scoreContainer.style.display = "block";
    cardDrawed.style.display = "block";
    turnContainer.style.display = "block";

}










