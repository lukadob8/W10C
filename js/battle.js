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
trainerHP.innerHTML = 50;

var computerHP = document.getElementById("cpHp");
computerHP.innerHTML = 50;

var winner = document.getElementById("result");

var moveOne = document.getElementById("firstAttack");

var retry = document.getElementById("return");

function attack() {
    var newCPHP = computerHP.innerHTML - Math.floor((Math.random() * 10)+ 1);
    computerHP.innerHTML = newCPHP;
    if(computerHP.innerHTML <= 0) {
        winner.innerHTML = "You Win!";
        moveOne.style.display = 'none';
        retry.style.display = 'inline';
        return winner;
    }
    
    var newTrainerHP = trainerHP.innerHTML - Math.floor((Math.random() * 10)+ 1);
    trainerHP.innerHTML = newTrainerHP;
    if(trainerHP.innerHTML <= 0) {
        winner.innerHTML = "You Lost..";
        moveOne.style.display = 'none';
        retry.style.display = 'inline';
    }
}

function restart() {
    Cookies.remove('player');
    window.open('index.html', '_self');
}
