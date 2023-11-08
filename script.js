function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}
//
var boo = 0;
var boo2 = 0;
//
var gameint_1 = 0;
var gameint_2 = 0;
var gameint_3 = 0;
var gameint_4 = 0;
var gameint_5 = 0;
var gameint_6 = 0;
var gameint_7 = 0;
var gameint_8 = 0;
var gameint_9 = 0;
var gameint_10 = 0;
//
document.getElementById("start").onclick = function() {


    if (boo == 0) {
        timedInfo();
        boo = 1;
    }


    function timedInfo() {
        setTimeout(one, 1000)
        setTimeout(two, 2000)
        setTimeout(three, 3000)
        setTimeout(four,4000)
    }
    function one() {
        document.getElementById("info").innerHTML = "one";
    }
    function two() {
        document.getElementById("info").innerHTML = "two";
    }
    function three() {
        document.getElementById("info").innerHTML = "three";
        boo = 0;
    }
    function four() {
        document.getElementById("start").disabled = true;
        document.getElementById("info").innerHTML = "start";
        boo2 = 1;
        if (boo2 == 1) {
            startGameOne();
        }
    }
    
}

//
function startGameOne() {
    gameint_1 = getRandomNumber(1, 25);
    gameint_2 = getRandomNumber(1, 25);
    gameint_1 = Math.trunc(gameint_1);
    gameint_2 = Math.trunc(gameint_2);
    console.log(gameint_1);
    console.log(gameint_2);
}

//