//
//
//
//number on V and H from 9 to 1(center -> right/top) and from the same 9 to -1(center -> left/bottom)
// [-1  -2  -3 -4 -5 -6 -7 -8 9 8 7 6 5 4 3 2 1] || [1 -> 17]  
// 

var vCont = document.querySelector(".vertical-cont");
var hCont = document.querySelector(".horizontal-cont");
var buttonStart = document.querySelector(".button-ok");
var buttonStop = document.querySelector(".button-stop");
var buttonAnimateH = document.querySelector(".button-animateH");
var board = document.querySelector(".board-container");
var dart = document.querySelector(".dartSent");
var dart1 = document.querySelector(".dart-container1");
var dart2 = document.querySelector(".dart-container2");
var dart3 = document.querySelector(".dart-container3");
var p1score = document.querySelector(".player1score");
var p2score = document.querySelector(".player2score");
var turnT = document.querySelector(".turn");

var turn = 0;
scores = [0, 0];


var valueV, valueH, dartLocation = [], scores, heightValue, player;
var stop1 = stop2 = false;
player = 1;
FirstInit();

function FirstInit() {
    console.log("called")
    // dartLocation = [0, 0];
    p1score.textContent = scores[0];
    p2score.textContent = scores[1];
    turnT.textContent = turn;
    valueH = 0;
    valueV = 0;
    animateH();
    animateV();
    turn = 0;
    for (let j = 1; j <= 3; j++) {
        document.querySelector(".dart-container" + j).style.top = 15 + (15 * j) + "%";
        document.querySelector(".dart-container" + j).style.left = "80%";
        document.querySelector(".dart-container" + j).style.transform = "rotate(0deg)";
    }
    buttonStart.style.display = "block";
    playerText();
}

function playerText() {
    if (player === 1) {
        document.querySelector(".p2").style.display = "none";
        document.querySelector(".p1").style.display = "block";
    }
    else {
        document.querySelector(".p1").style.display = "none";
        document.querySelector(".p2").style.display = "block";
    }
}
//----ANIMATE V and H containers--------------------------------//
function animateV() {                                           //
    heightValue = 90 / 17 * valueV + "%";                          //                                 //
    vCont.style.height = heightValue;                           //
    vCont.style.background = "linear-gradient(white, black)"    //
}                                                               //
function animateH() {                                           //
    heightValue = 90 / 17 * valueH + "%";                          //                                //
    hCont.style.width = heightValue;                            //
    hCont.style.background = "linear-gradient(white, black)";
    if (valueH < 1) {
        buttonStop.style.display = "none";
    }
    else {
        buttonStop.style.display = "block";
    }    //
}                                                               //
//----ANIMATE V and H containers--------------------------------//


//---------------button events----------------------------------//
buttonStop.addEventListener('click', function () {
    buttonStop.style.transform = "translate(3px, -3px)";  
    setTimeout(function () {
        getButton.style.transform = "translate(-3px, 3px)";
    }, 100); 
    stop1 = true;
    dartLocation[0] = valueV;
})
buttonStop.addEventListener('dblclick', function () {
    buttonStop.style.transform = "translate(3px, -3px)";  
    setTimeout(function () {
        getButton.style.transform = "translate(-3px, 3px)";
    }, 100);
    stop2 = true;
    if (turn < 3 && turn != 0) {
        turn++;
        console.log("turn is: " + turn)
    }
    else {
        turn = 1;
        console.log("turn is: " + turn)
    }
})
buttonStart.addEventListener('click', function () {
    valueV = 0;
    reinitTurn();
    for (var i = 1; i <= 17; i++) {
        setTimeout(function () {
            return function () {
                if (valueV === 17) {
                    console.log(valueV)
                    valueV = 0;
                    heightValue = 90 / 17;
                    animateV();
                }
                if (stop1 === true) {
                    getVvalue();
                    return;
                    // valueV++;
                }
                else {
                    if (turn != 3) {
                        valueV++;
                        animateV();
                    }
                }
            };
        }(i), 225 * i);
    }


});
buttonStart.addEventListener('click', function () {
    buttonStart.style.transform = "translate(-3px, -3px)";
    valueH = 0;
    reinitTurn();
    if (turn != 3) {
        for (var i = 1; i <= 17; i++) {
            setTimeout(function () {
                return function () {
                    if (valueH === 17) {
                        valueH = 0;
                        heightValue = 90 / 17;
                        animateH();
                    }
                    if (stop2 === true) {
                        getHvalue();
                        valueH++;
                        animateH();
                    }
                    else {
                        if (turn != 3) {
                            valueH++;
                            animateH();
                            if (valueH <= 16) {
                                console.log(valueH)
                                buttonStart.style.display = "none";
                                buttonStop.style.display = "block";
                            }
                            else if (valueH >= 16) {
                                buttonStart.style.display = "block";
                                buttonStop.style.display = "none";
                            }
                        }
                    }

                };
            }(i), 300 * i);
        }
    } else {
        return;
    }
});
//---------------button events------------------------------------//


function getVvalue() {
    console.log("value v is : " + valueV)
    dartLocation[0] = valueV;
}

function getHvalue() {
    dartLocation[1] = valueH;
    sendDart();
}
function sendDart() {
    if (turn != 0) {
        let whatDart = "dart-container" + turn;
        console.log("dart is :" + whatDart);
        console.log(dartLocation);
        if (dartLocation[0] < 18 && dartLocation[1] < 18) {
            document.querySelector("." + whatDart).style.transform = "rotate(-35deg)";
            let Vper = (dartLocation[0] * 4);
            document.querySelector("." + whatDart).style.top = Vper + "%";
            let Hper = (dartLocation[1] * 4.5);
            document.querySelector("." + whatDart).style.left = Hper + "%";
            // } else if (dartLocation[0] === 9 && dartLocation[1] < 9) {
            //     document.querySelector("." + whatDart).style.transform = "rotate(-35deg)";
            //     let Vper = 21 + (dartLocation[0] * 2.7);
            //     document.querySelector("." + whatDart).style.top = Vper + "%";
            //     let Hper = 5 + (dartLocation[1] * 2.2);
            //     document.querySelector("." + whatDart).style.left = Hper + "%";
        }
        score();
        {
            setTimeout(function () {
                if (turn === 3) {
                    if (player === 1) {
                        player++;
                    }
                    else if (player === 2) {
                        player = 1;
                    }
                }
            }, 4000);

            playerText();
            console.log("current player :" + player);
        }

        setTimeout(function () {
            if (player === 2 && turn === 3) {
                FirstInit();
                reinitTurn();
            }
        }, 4000);
        setTimeout(function () {
            if (player === 1 && turn === 3) {
                FirstInit();
                reinitTurn();
            }
        }, 4000);
        console.log(turn);
        reinitTurn();
        return;
    }
}

function reinitTurn() {
    stop1 = stop2 = false;
}

function score() {
    if ((dartLocation[0] == 1 || dartLocation[0] == 17) && (dartLocation[1] >= 6 && dartLocation[1] <= 13)) {
        scores[player - 1] += 1;
    }
    // ---------------------2 value
    else if ((dartLocation[0] == 2 || dartLocation[0] == 16) && (dartLocation[1] >= 6 && dartLocation[1] <= 13)) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 2 || dartLocation[0] == 16) && (dartLocation[1] <= 6 && dartLocation[1] >= 13)) {
        scores[player - 1] += 1;
    }
    // ----------------------------

    // -------------3----------------
    else if ((dartLocation[0] == 3 || dartLocation[0] == 15) && (dartLocation[1] >= 6 && dartLocation[1] <= 13)) {
        scores[player - 1] += 3;
    }
    else if ((dartLocation[0] == 3 || dartLocation[0] == 15) && (dartLocation[1] == 4 || dartLocation[1] == 14)) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 3 || dartLocation[0] == 15) && (dartLocation[1] <= 6 && dartLocation[1] >= 13)) {
        scores[player - 1] += 1;
    }
    // ---------------------------------
    // -------dartlocation[1] = 4
    else if ((dartLocation[0] == 4 || dartLocation[0] == 14) && (dartLocation[1] < 3 && dartLocation[1] > 14)) {
        scores[player - 1] += 1;
    }
    else if ((dartLocation[0] == 4 || dartLocation[0] == 14) && (dartLocation[1] == 3 || dartLocation[1] == 14)) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 4 || dartLocation[0] == 14) && ((dartLocation[1] >= 4 && dartLocation[1] <= 5) || (dartLocation[1] >= 12 && dartLocation[1] <= 14))) {
        scores[player - 1] += 3;
    }
    else if ((dartLocation[0] == 4 || dartLocation[0] == 14) && (dartLocation[1] >= 6 && dartLocation[1] || dartLocation[1] < 12)) {
        scores[player - 1] += 4;
    }
    // ----------------------------

    //------dartlocation[5] = 5
    else if ((dartLocation[0] == 5 || dartLocation[0] == 13) && (dartLocation[1] <= 2 && dartLocation[1] >= 15)) {
        scores[player - 1] += 1;
    }
    else if ((dartLocation[0] == 5 || dartLocation[0] == 13) && (dartLocation[1] == 3 || dartLocation[1] == 14)) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 5 || dartLocation[0] == 13) && (dartLocation[1] == 4 || dartLocation[1] == 13)) {
        scores[player - 1] += 3;
    }
    else if ((dartLocation[0] == 5 || dartLocation[0] == 13) && (dartLocation[1] == 5 || dartLocation[1] == 12)) {
        scores[player - 1] += 4;
    }
    else if ((dartLocation[0] == 5 || dartLocation[0] == 13) && (dartLocation[1] >= 6 &&  dartLocation[1] < 12)) {
        scores[player - 1] += 5;
    }
    // ------------------------------

    // --------dartLocation[1] = 6---
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && (dartLocation[1] === 1 && dartLocation[1] === 17)) {
        scores[player - 1] += 1;
    }
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && ((dartLocation[1] <= 3 && dartLocation[1] > 1) || (dartLocation[1] <= 16 && dartLocation[1] > 14))) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && (dartLocation[1] >= 4 && dartLocation[1] <= 5 || dartLocation[1] >= 13 && dartLocation[1] <= 14)) {
        scores[player - 1] += 3;
    }
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && (dartLocation[1] >= 5 && dartLocation[1] <= 6 || dartLocation[1] >= 12 && dartLocation[1] < 13)) {
        scores[player - 1] += 4;
    }
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && (dartLocation[1] === 7  || dartLocation[1] === 11)) {
        scores[player - 1] += 5;
    }
    else if ((dartLocation[0] == 6 || dartLocation[0] == 12) && (dartLocation[1] >= 8 && dartLocation[1] <= 10)) {
        scores[player - 1] += 6;
    }
    // -------------------------------

    // --------dartLocation[1] = 7---
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] === 1 && dartLocation[1] === 17)) {
        scores[player - 1] += 1;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && ((dartLocation[1] <= 3 && dartLocation[1] > 1) || (dartLocation[1] <= 16 && dartLocation[1] > 14))) {
        scores[player - 1] += 2;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] >= 3 && dartLocation[1] <= 4 || dartLocation[1] >= 14 && dartLocation[1] <= 15)) {
        scores[player - 1] += 3;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] >= 5 && dartLocation[1] <= 6 || dartLocation[1] >= 13 && dartLocation[1] < 14)) {
        scores[player - 1] += 4;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] === 6  || dartLocation[1] === 13)) {
        scores[player - 1] += 5;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] === 7 || dartLocation[1] === 12)) {
        scores[player - 1] += 6;
    }
    else if ((dartLocation[0] == 7 || dartLocation[0] == 11) && (dartLocation[1] >= 8 && dartLocation[1] <= 10)) {
        scores[player - 1] += 7;
    }
    // -------------------------------


    // --------dartLocation[1] = 8---
    else if (dartLocation[0] == 8 && (dartLocation[1] === 1 && dartLocation[1] === 17)) {
        scores[player - 1] += 1;
    }
    else if (dartLocation[0] == 8 && ((dartLocation[1] === 2 || dartLocation[1] === 16 ))) {
        scores[player - 1] += 2;
    }
    else if (dartLocation[0] == 8 && (dartLocation[1] === 3 || dartLocation[1] === 15)) {
        scores[player - 1] += 3;
    }
    else if (dartLocation[0] == 8 && (dartLocation[1] === 4 || dartLocation[1] === 14)) {
        scores[player - 1] += 4;
    }
    else if (dartLocation[0] == 8 && (dartLocation[1] === 5  || dartLocation[1] === 13)) {
        scores[player - 1] += 5;
    }
    else if (dartLocation[0] == 8 && (dartLocation[1] === 6  && dartLocation[1] === 12)) {
        scores[player - 1] += 6;
    }
    else if (dartLocation[0] == 8 && (dartLocation[1] >= 7 && dartLocation[1] <= 8 || dartLocation[1] >= 10 && dartLocation[1] <= 11)) {
        scores[player - 1] += 7;
    }
    else if (dartLocation[0] == 8 && dartLocation[1] === 9 ) {
        scores[player - 1] += 8;
    }
    // -------------------------------

      // --------dartLocation[1] = 9---
      else if (dartLocation[0] == 9 && (dartLocation[1] === 1 && dartLocation[1] === 17)) {
        scores[player - 1] += 1;
    }
    else if (dartLocation[0] == 9 && ((dartLocation[1] === 2 || dartLocation[1] === 16 ))) {
        scores[player - 1] += 2;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] === 3 || dartLocation[1] === 15)) {
        scores[player - 1] += 3;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] === 4 || dartLocation[1] === 14)) {
        scores[player - 1] += 4;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] === 5  || dartLocation[1] === 13)) {
        scores[player - 1] += 5;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] === 6  && dartLocation[1] === 12)) {
        scores[player - 1] += 6;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] >= 7 && dartLocation[1] < 8 || dartLocation[1] > 10 || dartLocation[1] <= 11)) {
        scores[player - 1] += 7;
    }
    else if (dartLocation[0] == 9 && (dartLocation[1] >= 8  && dartLocation[1] <= 10)) {
        scores[player - 1] += 9;
    }
    else if (dartLocation[0] == 9 && dartLocation[1] === 9 ) {
        scores[player - 1] += 9;
    }
    // -------------------------------

        // --------dartLocation[1] = 8---
        else if (dartLocation[0] == 10 && (dartLocation[1] === 1 && dartLocation[1] === 17)) {
            scores[player - 1] += 1;
        }
        else if (dartLocation[0] == 10 && ((dartLocation[1] === 2 || dartLocation[1] === 16 ))) {
            scores[player - 1] += 2;
        }
        else if (dartLocation[0] == 10 && (dartLocation[1] === 3 || dartLocation[1] === 15)) {
            scores[player - 1] += 3;
        }
        else if (dartLocation[0] == 10 && (dartLocation[1] === 4 || dartLocation[1] === 14)) {
            scores[player - 1] += 4;
        }
        else if (dartLocation[0] == 10 && (dartLocation[1] === 5  || dartLocation[1] === 13)) {
            scores[player - 1] += 5;
        }
        else if (dartLocation[0] == 10 && (dartLocation[1] === 6  && dartLocation[1] === 12)) {
            scores[player - 1] += 6;
        }
        else if (dartLocation[0] == 10 && (dartLocation[1] >= 7 || dartLocation[1] <= 8 || dartLocation[1] >= 10 || dartLocation[1] <= 11)) {
            scores[player - 1] += 7;
        }
        else if (dartLocation[0] == 10 && dartLocation[1] === 9 ) {
            scores[player - 1] += 8;
        }
        // -------------------------------
        turnT.textContent = turn;
        p1score.textContent = scores[0];
        p2score.textContent = scores[1];
    console.log("score is :" + scores);
}