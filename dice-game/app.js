//
//
//
//
// 


var totalScore, roundScore, player, names;
newValues();

// roll dice and add value to round score
document.querySelector(".btn-roll").addEventListener('click', function () {
    document.querySelector(".diceCont1").style.display = "block";
    document.querySelector(".diceCont2").style.display = "block";
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1, dice2)
    if (dice1 != 1 && dice2 != 1) {
        roundScore += (dice1 + dice2);
        document.getElementById('roundScore' + player).textContent = roundScore;
    }
    else {
        document.querySelector('.player' + player + 'cont').classList.remove('active');
        document.querySelector('.player' + player + '-name').classList.remove('active1');
        document.getElementById('roundScore' + player).textContent = '0';
        player === 0 ? player = 1 : player = 0;
        roundScore = 0;
        document.querySelector('.player' + player + 'cont').classList.toggle('active');
        document.querySelector('.player' + player + '-name').classList.toggle('active1');
        document.querySelector(".diceCont1").style.display = "none";
        document.querySelector(".diceCont2").style.display = "none";
    }
    document.querySelector(".dice1").src = "./dice-game/dice-" + dice1 + ".png";
    document.querySelector(".dice2").src = "./dice-game/dice-" + dice2 + ".png";
});

//keek  round score and make active the other player
document.querySelector(".btn-keep").addEventListener("click", function () {
    totalScore[player] += roundScore;
    if (totalScore[player] >= 100) {
        alert("player" + player + 'is a winner');
        newValues();
        document.querySelector(".diceCont").style.display = "none";
    }
    else {
        document.querySelector('#mainScore' + player).textContent = totalScore[player];
        roundScore = 0;
        document.querySelector('.player' + player + 'cont').classList.remove('active');
        document.querySelector(".player" + player + '-name').classList.toggle('active1');
        player === 0 ? player = 1 : player = 0;
        document.querySelector('.player' + player + 'cont').classList.toggle('active');
        document.querySelector(".player" + player + '-name').classList.toggle('active1');
    }

});

document.querySelector(".btn-new").addEventListener('click', function () {
    newValues();
})


//reset values
function newValues() {
    player = 0;
    roundScore = 0;
    totalScore = [0, 0];
    names = ['Player 1', 'Player 2'];
    names[0] = prompt("Player ONE name: ");
    names[1] = prompt("Player TWO name: ");
    // if(names[0] == undefined)
    // {
    //     document.querySelector(".player0-name").textContent = 'Player 1';
    //     document.querySelector(".player1-name").textContent = 'Player 2';
    // } else {
    //     document.querySelector(".player0-name").textContent = names[0];
    //     document.querySelector(".player1-name").textContent = names[1];
    // }
    document.querySelector(".player0-name").textContent = names[0];
    document.querySelector(".player1-name").textContent = names[1];
    document.getElementById('roundScore0').textContent = '0';
    document.getElementById('roundScore1').textContent = '0';
    document.getElementById('mainScore0').textContent = '0';
    document.getElementById('mainScore1').textContent = '0';
    document.querySelector('.player0cont').classList.remove('active');
    document.querySelector('.player1cont').classList.remove('active');
    document.querySelector('.player0-name').classList.remove('active1');
    document.querySelector('.player1-name').classList.remove('active1');
    document.querySelector('.player0-name').classList.add('active1');
    document.querySelector('.player0cont').classList.add('active');
    document.querySelector(".diceCont1").style.display = "none";
    document.querySelector(".diceCont2").style.display = "none";
}