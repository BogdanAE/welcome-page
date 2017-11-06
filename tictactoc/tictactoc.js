//
//
//
//
//put x in a square

var box0 = document.querySelector(".box0");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");
var winner = document.querySelector(".winner-text");
var audioo = document.getElementById('audioo');
var p1score = document.querySelector(".p1score");
var p2score = document.querySelector(".p2score");
var scores = [0,0];
var turn = 0;
var game = [];
p1score.textContent = scores[0];
p2score.textContent = scores[1];
var minCheck = 0;
var pleaseCheck = false;
console.log(game);
audioo.play();
winner.style.display = "none";

function clearAll() {
    setTimeout(function () {
        box0.style.display = "none";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        box7.style.display = "none";
        box8.style.display = "none";
    }, 500);

}
function reinitAll() {
    box0.style.display = "block";
    box1.style.display = "block";
    box2.style.display = "block";
    box3.style.display = "block";
    box4.style.display = "block";
    box5.style.display = "block";
    box6.style.display = "block";
    box7.style.display = "block";
    box8.style.display = "block";
}

// -----------------------------------------------
//square fill
box0.addEventListener('click', function () {
    if (turn === 0 && (game[0] !== 0 && game[0] !== 1)) {
        box0.classList.add('x');
        game[0] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[0] !== 0 && game[0] !== 1)) {
        box0.classList.add('o');
        game[0] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box1.addEventListener('click', function () {
    if (turn === 0 && (game[1] !== 0 && game[1] !== 1)) {
        box1.classList.add('x');
        game[1] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[1] !== 0 && game[1] !== 1)) {
        box1.classList.add('o');
        game[1] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box2.addEventListener('click', function () {
    if (turn === 0 && (game[2] !== 0 && game[2] !== 1)) {
        box2.classList.add('x');
        game[2] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[2] !== 0 && game[2] !== 1)) {
        box2.classList.add('o');
        game[2] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})

box3.addEventListener('click', function () {
    if (turn === 0 && (game[3] !== 0 && game[3] !== 1)) {
        box3.classList.add('x');
        game[3] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[3] !== 0 && game[3] !== 1)) {
        box3.classList.add('o');
        game[3] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box4.addEventListener('click', function () {
    if (turn === 0 && (game[4] !== 0 && game[4] !== 1)) {
        box4.classList.add('x');
        game[4] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[4] !== 0 && game[4] !== 1)) {
        box4.classList.add('o');
        game[4] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box5.addEventListener('click', function () {
    if (turn === 0 && (game[5] !== 0 && game[5] !== 1)) {
        box5.classList.add('x');
        game[5] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[5] !== 0 && game[5] !== 1)) {
        box5.classList.add('o');
        game[5] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box6.addEventListener('click', function () {
    if (turn === 0 && (game[6] !== 0 && game[6] !== 1)) {
        box6.classList.add('x');
        game[6] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[6] !== 0 && game[6] !== 1)) {
        box6.classList.add('o');
        game[6] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();

})
box7.addEventListener('click', function () {
    if (turn === 0 && (game[7] !== 0 && game[7] !== 1)) {
        box7.classList.add('x');
        game[7] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[7] !== 0 && game[7] !== 1)) {
        box7.classList.add('o');
        game[7] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);

    }
    check();

})
box8.addEventListener('click', function () {
    if (turn === 0 && (game[8] !== 0 && game[8] !== 1)) {
        box8.classList.add('x');
        game[8] = 0;
        turn++;
        minCheck++;
        console.log(game, game.length);
    }
    else if (turn === 1 && (game[8] !== 0 && game[8] !== 1)) {
        box8.classList.add('o');
        game[8] = 1;
        turn = 0;
        minCheck++;
        console.log(game, game.length);
    }
    check();
})
function checkMovesOut() {
    let i = 0;
    if (minCheck >= 5) {
        if (game[0] !== undefined &&
            game[1] !== undefined &&
            game[2] !== undefined &&
            game[3] !== undefined &&
            game[4] !== undefined &&
            game[5] !== undefined &&
            game[6] !== undefined &&
            game[7] !== undefined &&
            game[8] !== undefined) {
            pleaseCheck = true;
        }
    }
    console.log(pleaseCheck);
}
function check() {
    checkMovesOut();
    if (game[0] === 1 && game[4] === 1 && game[8] === 1
        || game[2] === 1 && game[4] === 1 && game[6] === 1
        || game[0] === 1 && game[1] === 1 && game[2] === 1
        || game[3] === 1 && game[4] === 1 && game[5] === 1
        || game[6] === 1 && game[7] === 1 && game[8] === 1
        || game[0] === 1 && game[3] === 1 && game[6] === 1
        || game[1] === 1 && game[4] === 1 && game[7] === 1
        || game[2] === 1 && game[5] === 1 && game[8] === 1) {
        setTimeout(function () {
            winner.style.display = "block";
            winner.textContent = "player 2 wins!";
        }, 500);
        scores[1] += 1; 
        clearAll();
        init();
    } else if (game[0] === 0 && game[4] === 0 && game[8] === 0
        || game[2] === 0 && game[4] === 0 && game[6] === 0
        || game[0] === 0 && game[1] === 0 && game[2] === 0
        || game[3] === 0 && game[4] === 0 && game[5] === 0
        || game[6] === 0 && game[7] === 0 && game[8] === 0
        || game[0] === 0 && game[3] === 0 && game[6] === 0
        || game[1] === 0 && game[4] === 0 && game[7] === 0
        || game[2] === 0 && game[5] === 0 && game[8] === 0) {
        setTimeout(function () {
            winner.style.display = "block";
            winner.textContent = "player 1 wins!";
        }, 500);
        scores[0] += 1; 
        clearAll();
        init();
    }
    else if (pleaseCheck && (game[0] !== 3 && game[4] !== 3 && game[8] !== 3
        || game[2] !== 3 && game[4] !== 3 && game[6] !== 3
        || game[0] !== 3 && game[1] !== 3 && game[2] !== 3
        || game[3] !== 3 && game[4] !== 3 && game[5] !== 3
        || game[6] !== 3 && game[7] !== 3 && game[8] !== 3
        || game[0] !== 3 && game[3] !== 3 && game[6] !== 3
        || game[1] !== 3 && game[4] !== 3 && game[7] !== 3
        || game[2] !== 3 && game[5] !== 3 && game[8] !== 3)) {
        setTimeout(function () {
            winner.style.display = "block";
            winner.textContent = "it's a draw!";
        }, 500);
        clearAll();
        init();
    }
}
function init() {
    // for (let i = 0; i <= 8; i++) {
    //     document.querySelector(".box" + i).classList.remove("o");
    //     document.querySelector(".box" + i).classList.remove("x");
    // }
    // turn = 0;
    // game = [];
    // minCheck = 0;
    // pleaseCheck = false;
    p1score.textContent = scores[0];
    p2score.textContent = scores[1];
    audioo.pause();
    setTimeout(function () {
        for (let i = 0; i <= 8; i++) {
            document.querySelector(".box" + i).classList.remove("o");
            document.querySelector(".box" + i).classList.remove("x");
        }
        audioo.play();
        winner.textContent = " ";
        turn = 0;
        game = [];
        minCheck = 0;
        pleaseCheck = false;
        reinitAll();
    }, 2000);
}
