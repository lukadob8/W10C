var trainerChoice = Cookies.get("player");

if(trainerChoice == 'torchic') {
    document.getElementById("trainer").innerHTML = "<img height='175px' src='../images/torchic.jpg' alt='Torchic'> <p> Torchic </p>";
} else if(trainerChoice == 'treecko') {
    document.getElementById("trainer").innerHTML = "<img width='150px' src='../images/treecko.jpg' alt='Treecko'> <p> Treecko </p>";
} else if(trainerChoice == 'mudkip') {
    document.getElementById("trainer").innerHTML = "<img width='150px' src='../images/mudkip.png' alt='Mudkip'> <p> Mudkip </p>";
} else {
    document.getElementById("trainer").innerHTML = "<p> An error occured </p>"
}

var trainerHP = document.getElementById("trainerHp");
trainerHP.innerHTML = Cookies.get("userCurrentHp");

var computerHP = document.getElementById("cpHp");
computerHP.innerHTML = Cookies.get("cmpCurrentHP");

var winner = document.getElementById("result");

var attackButtons = document.getElementsByClassName("moves");

var moveOne = document.getElementById("firstAttack");
var moveTwo = document.getElementById("secondAttack");

var retry = document.getElementById("return");

var battle_html = document.getElementById("battle");

var battleTitle = document.getElementById("title");

gameOver();

function attack() {
    var newCPHP = computerHP.innerHTML - Math.floor((Math.random() * 10)+ 1);
    computerHP.innerHTML = newCPHP;
    gameOver();
    // if(computerHP.innerHTML <= 0) {
    //     winner.innerHTML = "You Win!";
    //     moveOne.style.display = 'none';
    //     retry.style.display = 'inline';
    //     return winner;
    // }
    
    var newTrainerHP = trainerHP.innerHTML - Math.floor((Math.random() * 10)+ 1);
    trainerHP.innerHTML = newTrainerHP;
    gameUpdate(newCPHP, newTrainerHP);
    gameOver();
    // if(trainerHP.innerHTML <= 0) {
    //     winner.innerHTML = "You Lost..";
    //     moveOne.style.display = 'none';
    //     retry.style.display = 'inline';
    // }
}

function attackTwo() {
    var newCPHP = computerHP.innerHTML - 4;
    computerHP.innerHTML = newCPHP;
    gameOver();
    // if(computerHP.innerHTML <= 0) {
    //     winner.innerHTML = "You Win!";
    //     moveTwo.style.display = 'none';
    //     retry.style.display = 'inline';
    //     return winner;
    // }

    var newTrainerHP = trainerHP.innerHTML - Math.floor((Math.random() * 10)+ 1);
    trainerHP.innerHTML = newTrainerHP;
    gameUpdate(newCPHP, newTrainerHP);
    gameOver();
    // if(trainerHP.innerHTML <= 0) {
    //     winner.innerHTML = "You Lost..";
    //     moveTwo.style.display = 'none';
    //     retry.style.display = 'inline';
    // }
}

function restart() {
    Cookies.remove('player');
    window.open('index.html', '_self');
}

function gameOver() {
    if(trainerHP.innerHTML <= 0) {
        moveOne.style.display = "none";
        moveTwo.style.display = "none";
        battle_html.innerHTML = "You Lost...";
        retry.style.display = "inline";
        battleTitle.innerHTML = "Good Effort :)"
    } else if(computerHP.innerHTML <= 0) {
        moveOne.style.display = "none";
        moveTwo.style.display = "none";
        battle_html.innerHTML = "You Win!!";
        retry.style.display = "inline";
        battleTitle.innerHTML = "Well Done!"
    }
}

function gameUpdate(newCPHP, newTrainerHP) {
    Cookies.set("cmpCurrentHP", newCPHP);
    Cookies.set("userCurrentHp", newTrainerHP);
}
