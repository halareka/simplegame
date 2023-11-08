function changecolor(){
    btn1.style.backgroundColor =  "aquamarine";
    btn2.style.backgroundColor =  "aquamarine";
    btn3.style.backgroundColor =  "aquamarine";
    btn4.style.backgroundColor =  "aquamarine";
    btn5.style.backgroundColor =  "aquamarine";
    btn6.style.backgroundColor =  "aquamarine";
    btn7.style.backgroundColor =  "aquamarine";
    btn8.style.backgroundColor =  "aquamarine";
    btn9.style.backgroundColor =  "aquamarine";
    btn10.style.backgroundColor = "aquamarine";
    btn11.style.backgroundColor = "aquamarine";
    btn12.style.backgroundColor = "aquamarine";
    btn13.style.backgroundColor = "aquamarine";
    btn14.style.backgroundColor = "aquamarine";
    btn15.style.backgroundColor = "aquamarine";
    btn16.style.backgroundColor = "aquamarine";
    btn17.style.backgroundColor = "aquamarine";
    btn18.style.backgroundColor = "aquamarine";
    btn19.style.backgroundColor = "aquamarine";
    btn20.style.backgroundColor = "aquamarine";
    btn21.style.backgroundColor = "aquamarine";
    btn22.style.backgroundColor = "aquamarine";
    btn23.style.backgroundColor = "aquamarine";
    btn24.style.backgroundColor = "aquamarine";
    btn25.style.backgroundColor = "aquamarine";
}
function changecolorblue(){
    btn1.style.backgroundColor =  "blue";
    btn2.style.backgroundColor =  "blue";
    btn3.style.backgroundColor =  "blue";
    btn4.style.backgroundColor =  "blue";
    btn5.style.backgroundColor =  "blue";
    btn6.style.backgroundColor =  "blue";
    btn7.style.backgroundColor =  "blue";
    btn8.style.backgroundColor =  "blue";
    btn9.style.backgroundColor =  "blue";
    btn10.style.backgroundColor = "blue";
    btn11.style.backgroundColor = "blue";
    btn12.style.backgroundColor = "blue";
    btn13.style.backgroundColor = "blue";
    btn14.style.backgroundColor = "blue";
    btn15.style.backgroundColor = "blue";
    btn16.style.backgroundColor = "blue";
    btn17.style.backgroundColor = "blue";
    btn18.style.backgroundColor = "blue";
    btn19.style.backgroundColor = "blue";
    btn20.style.backgroundColor = "blue";
    btn21.style.backgroundColor = "blue";
    btn22.style.backgroundColor = "blue";
    btn23.style.backgroundColor = "blue";
    btn24.style.backgroundColor = "blue";
    btn25.style.backgroundColor = "blue";
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}
//
var score = 0;
var scorerec = 0;
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
var gameint_11 = 11;
//
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var btn10 = document.getElementById("10");
var btn11 = document.getElementById("11");
var btn12 = document.getElementById("12");
var btn13 = document.getElementById("13");
var btn14 = document.getElementById("14");
var btn15 = document.getElementById("15");
var btn16 = document.getElementById("16");
var btn17 = document.getElementById("17");
var btn18 = document.getElementById("18");
var btn19 = document.getElementById("19");
var btn20 = document.getElementById("20");
var btn21 = document.getElementById("21");
var btn22 = document.getElementById("22");
var btn23 = document.getElementById("23");
var btn24 = document.getElementById("24");
var btn25 = document.getElementById("25");

//
var Lose = false;
var Win = false;

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
        setTimeout(timerr7,5000)
        setTimeout(timerr8,6000)
        setTimeout(timerr9,7000)
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
        changecolor();
    }
    function four() {
        document.getElementById("start").disabled = true;
        document.getElementById("info").innerHTML = "start";
        boo2 = 1;

        if (scorerec >= 40) {
            startGameTwo();
            console.log(scorerec);
        }else{
            startGameOne();
            console.log(scorerec);
        }

    }


    function timerr7() {
        document.getElementById("start").innerHTML = "3";
    }
    function timerr8() {
        document.getElementById("start").innerHTML = "2";
    }
    function timerr9() {
        document.getElementById("start").innerHTML = "start";

    }

    
}

//
function startGameOne() {
    function timechangecol(){
        setTimeout(changecolor,500);
    }
    var won = 0;
    gameint_1 = getRandomNumber(1, 25);
    gameint_2 = getRandomNumber(1, 25);
    gameint_1 = Math.trunc(gameint_1);
    gameint_2 = Math.trunc(gameint_2);
    console.log(gameint_1);
    console.log(gameint_2);
    if ((gameint_1 == btn1.value) || (gameint_2 == btn1.value)) {
        btn1.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn2.value) || (gameint_2 == btn2.value)) {
        btn2.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn3.value) || (gameint_2 == btn3.value)) {
        btn3.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn4.value) || (gameint_2 == btn4.value)) {
        btn4.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn5.value) || (gameint_2 == btn5.value)) {
        btn5.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn6.value) || (gameint_2 == btn6.value)) {
        btn6.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn7.value) || (gameint_2 == btn7.value)) {
        btn7.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn8.value) || (gameint_2 == btn8.value)) {
        btn8.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn9.value) || (gameint_2 == btn9.value)) {
        btn9.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn10.value) || (gameint_2 == btn10.value)) {
        btn10.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn11.value) || (gameint_2 == btn11.value)) {
        btn11.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn12.value) || (gameint_2 == btn12.value)) {
        btn12.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn13.value) || (gameint_2 == btn13.value)) {
        btn13.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn14.value) || (gameint_2 == btn14.value)) {
        btn14.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn15.value) || (gameint_2 == btn15.value)) {
        btn15.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn16.value) || (gameint_2 == btn16.value)) {
        btn16.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn17.value) || (gameint_2 == btn17.value)) {
        btn17.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn18.value) || (gameint_2 == btn18.value)) {
        btn18.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn19.value) || (gameint_2 == btn19.value)) {
        btn19.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn20.value) || (gameint_2 == btn20.value)) {
        btn20.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn21.value) || (gameint_2 == btn21.value)) {
        btn21.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn22.value) || (gameint_2 == btn22.value)) {
        btn22.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn23.value) || (gameint_2 == btn23.value)) {
        btn23.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn24.value) || (gameint_2 == btn24.value)) {
        btn24.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn25.value) || (gameint_2 == btn25.value)) {
        btn25.style.backgroundColor = "red";
    }
    //
    btn1.onclick = function(){
        if ((gameint_1 == btn1.value) || (gameint_2 == btn1.value)) {
            btn1.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn1.style.backgroundColor = "red";
            won = 0;
        }
    }
    btn2.onclick = function(){
        if ((gameint_1 == btn2.value) || (gameint_2 == btn2.value)) {
            btn2.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn2.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn3.onclick = function(){
        if ((gameint_1 == btn3.value) || (gameint_2 == btn3.value)) {
            btn3.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn3.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn4.onclick = function(){
        if ((gameint_1 == btn4.value) || (gameint_2 == btn4.value)) {
            btn4.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn4.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn5.onclick = function(){
        if ((gameint_1 == btn5.value) || (gameint_2 == btn5.value)) {
            btn5.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn5.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn6.onclick = function(){
        if ((gameint_1 == btn6.value) || (gameint_2 == btn6.value)) {
            btn6.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn6.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn7.onclick = function(){
        if ((gameint_1 == btn7.value) || (gameint_2 == btn7.value)) {
            btn7.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn7.style.backgroundColor = "red";
            won = 0;
        }
    } 
     btn8.onclick = function(){
        if ((gameint_1 == btn8.value) || (gameint_2 == btn8.value)) {
            btn8.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn8.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn9.onclick = function(){
        if ((gameint_1 == btn9.value) || (gameint_2 == btn9.value)) {
            btn9.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn9.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn10.onclick = function(){
        if ((gameint_1 == btn10.value) || (gameint_2 == btn10.value)) {
            btn10.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn10.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn11.onclick = function(){
        if ((gameint_1 == btn11.value) || (gameint_2 == btn11.value)) {
            btn11.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn11.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn12.onclick = function(){
        if ((gameint_1 == btn12.value) || (gameint_2 == btn12.value)) {
            btn12.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn12.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn13.onclick = function(){
        if ((gameint_1 == btn13.value) || (gameint_2 == btn13.value)) {
            btn13.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn13.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn14.onclick = function(){
        if ((gameint_1 == btn14.value) || (gameint_2 == btn14.value)) {
            btn14.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn14.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn15.onclick = function(){
        if ((gameint_1 == btn15.value) || (gameint_2 == btn15.value)) {
            btn15.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn15.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn16.onclick = function(){
        if ((gameint_1 == btn16.value) || (gameint_2 == btn16.value)) {
            btn16.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn16.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn17.onclick = function(){
        if ((gameint_1 == btn17.value) || (gameint_2 == btn17.value)) {
            btn17.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn17.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn18.onclick = function(){
        if ((gameint_1 == btn18.value) || (gameint_2 == btn18.value)) {
            btn18.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn18.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn19.onclick = function(){
        if ((gameint_1 == btn19.value) || (gameint_2 == btn19.value)) {
            btn19.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn19.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn20.onclick = function(){
        if ((gameint_1 == btn20.value) || (gameint_2 == btn20.value)) {
            btn20.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn20.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn21.onclick = function(){
        if ((gameint_1 == btn21.value) || (gameint_2 == btn21.value)) {
            btn21.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn21.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn22.onclick = function(){
        if ((gameint_1 == btn22.value) || (gameint_2 == btn22.value)) {
            btn22.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn22.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn23.onclick = function(){
        if ((gameint_1 == btn23.value) || (gameint_2 == btn23.value)) {
            btn23.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn23.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn24.onclick = function(){
        if ((gameint_1 == btn24.value) || (gameint_2 == btn24.value)) {
            btn24.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn24.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn25.onclick = function(){
        if ((gameint_1 == btn25.value) || (gameint_2 == btn25.value)) {
            btn25.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn25.style.backgroundColor = "red";
            won = 0;
        }
    }
    timechangecol();
    setTimeout(check, 3000);
    function check() {
    if (won == 2) {
        document.getElementById("start").disabled = false;
        score += 20;
        scorerec += score;
        document.getElementById("score").innerHTML = score;
        document.getElementById("scorerec").innerHTML = score;
        document.getElementById("info").innerHTML = "start";
        changecolor();

    }else{
        score += -15;
        document.getElementById("score").innerHTML = score;
        document.getElementById("start").disabled = false;
        document.getElementById("info").innerHTML = "start";
        changecolor();
    }
    }   
}
//
function startGameTwo() {
    function timechangecol(){
        setTimeout(changecolor,500);
    }
    var won = 0;
    gameint_1 = getRandomNumber(1, 25);
    gameint_2 = getRandomNumber(1, 25);
    gameint_3 = getRandomNumber(1, 25);
    gameint_1 = Math.trunc(gameint_1);
    gameint_2 = Math.trunc(gameint_2);
    gameint_3 = Math.trunc(gameint_3);
    console.log(gameint_1);
    console.log(gameint_2);
    console.log(gameint_3);
    if ((gameint_1 == btn1.value) || (gameint_2 == btn1.value) || (gameint_3 == btn1.value)) {
        btn1.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn2.value) || (gameint_2 == btn2.value) || (gameint_3 == btn2.value)) {
        btn2.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn3.value) || (gameint_2 == btn3.value) || (gameint_3 == btn3.value)) {
        btn3.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn4.value) || (gameint_2 == btn4.value) || (gameint_3 == btn4.value)) {
        btn4.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn5.value) || (gameint_2 == btn5.value) || (gameint_3 == btn5.value)) {
        btn5.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn6.value) || (gameint_2 == btn6.value) || (gameint_3 == btn6.value)) {
        btn6.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn7.value) || (gameint_2 == btn7.value) || (gameint_3 == btn7.value)) {
        btn7.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn8.value) || (gameint_2 == btn8.value) || (gameint_3 == btn8.value)) {
        btn8.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn9.value) || (gameint_2 == btn9.value) || (gameint_3 == btn9.value)) {
        btn9.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn10.value) || (gameint_2 == btn10.value) || (gameint_3 == btn10.value)) {
        btn10.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn11.value) || (gameint_2 == btn11.value) || (gameint_3 == btn11.value)) {
        btn11.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn12.value) || (gameint_2 == btn12.value) || (gameint_3 == btn12.value)) {
        btn12.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn13.value) || (gameint_2 == btn13.value) || (gameint_3 == btn13.value)) {
        btn13.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn14.value) || (gameint_2 == btn14.value) || (gameint_3 == btn14.value)) {
        btn14.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn15.value) || (gameint_2 == btn15.value) || (gameint_3 == btn15.value)) {
        btn15.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn16.value) || (gameint_2 == btn16.value) || (gameint_3 == btn16.value)) {
        btn16.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn17.value) || (gameint_2 == btn17.value) || (gameint_3 == btn17.value)) {
        btn17.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn18.value) || (gameint_2 == btn18.value) || (gameint_3 == btn18.value)) {
        btn18.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn19.value) || (gameint_2 == btn19.value) || (gameint_3 == btn19.value)) {
        btn19.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn20.value) || (gameint_2 == btn20.value) || (gameint_3 == btn20.value)) {
        btn20.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn21.value) || (gameint_2 == btn21.value) || (gameint_3 == btn21.value)) {
        btn21.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn22.value) || (gameint_2 == btn22.value) || (gameint_3 == btn22.value)) {
        btn22.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn23.value) || (gameint_2 == btn23.value) || (gameint_3 == btn23.value)) {
        btn23.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn24.value) || (gameint_2 == btn24.value) || (gameint_3 == btn24.value)) {
        btn24.style.backgroundColor = "red";
    }
    if ((gameint_1 == btn25.value) || (gameint_2 == btn25.value) || (gameint_3 == btn25.value)) {
        btn25.style.backgroundColor = "red";
    }
    //
    btn1.onclick = function(){
        if ((gameint_1 == btn1.value) || (gameint_2 == btn1.value) || (gameint_3 == btn1.value)) {
            btn1.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn1.style.backgroundColor = "red";
            won = 0;
        }
    }
    btn2.onclick = function(){
        if ((gameint_1 == btn2.value) || (gameint_2 == btn2.value) || (gameint_3 == btn2.value)) {
            btn2.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn2.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn3.onclick = function(){
        if ((gameint_1 == btn3.value) || (gameint_2 == btn3.value) || (gameint_3 == btn3.value)) {
            btn3.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn3.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn4.onclick = function(){
        if ((gameint_1 == btn4.value) || (gameint_2 == btn4.value) || (gameint_3 == btn4.value)) {
            btn4.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn4.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn5.onclick = function(){
        if ((gameint_1 == btn5.value) || (gameint_2 == btn5.value) || (gameint_3 == btn5.value)) {
            btn5.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn5.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn6.onclick = function(){
        if ((gameint_1 == btn6.value) || (gameint_2 == btn6.value) || (gameint_3 == btn6.value)) {
            btn6.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn6.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn7.onclick = function(){
        if ((gameint_1 == btn7.value) || (gameint_2 == btn7.value) || (gameint_3 == btn7.value)) {
            btn7.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn7.style.backgroundColor = "red";
            won = 0;
        }
    } 
     btn8.onclick = function(){
        if ((gameint_1 == btn8.value) || (gameint_2 == btn8.value) || (gameint_3 == btn8.value)) {
            btn8.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn8.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn9.onclick = function(){
        if ((gameint_1 == btn9.value) || (gameint_2 == btn9.value) || (gameint_3 == btn9.value)) {
            btn9.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn9.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn10.onclick = function(){
        if ((gameint_1 == btn10.value) || (gameint_2 == btn10.value) || (gameint_3 == btn10.value)) {
            btn10.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn10.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn11.onclick = function(){
        if ((gameint_1 == btn11.value) || (gameint_2 == btn11.value) || (gameint_3 == btn11.value)) {
            btn11.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn11.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn12.onclick = function(){
        if ((gameint_1 == btn12.value) || (gameint_2 == btn12.value) || (gameint_3 == btn12.value)) {
            btn12.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn12.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn13.onclick = function(){
        if ((gameint_1 == btn13.value) || (gameint_2 == btn13.value) || (gameint_3 == btn13.value)) {
            btn13.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn13.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn14.onclick = function(){
        if ((gameint_1 == btn14.value) || (gameint_2 == btn14.value) || (gameint_3 == btn14.value)) {
            btn14.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn14.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn15.onclick = function(){
        if ((gameint_1 == btn15.value) || (gameint_2 == btn15.value) || (gameint_3 == btn15.value)) {
            btn15.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn15.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn16.onclick = function(){
        if ((gameint_1 == btn16.value) || (gameint_2 == btn16.value) || (gameint_3 == btn16.value)) {
            btn16.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn16.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn17.onclick = function(){
        if ((gameint_1 == btn17.value) || (gameint_2 == btn17.value) || (gameint_3 == btn17.value)) {
            btn17.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn17.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn18.onclick = function(){
        if ((gameint_1 == btn18.value) || (gameint_2 == btn18.value) || (gameint_3 == btn18.value)) {
            btn18.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn18.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn19.onclick = function(){
        if ((gameint_1 == btn19.value) || (gameint_2 == btn19.value) || (gameint_3 == btn19.value)) {
            btn19.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn19.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn20.onclick = function(){
        if ((gameint_1 == btn20.value) || (gameint_2 == btn20.value) || (gameint_3 == btn20.value)) {
            btn20.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn20.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn21.onclick = function(){
        if ((gameint_1 == btn21.value) || (gameint_2 == btn21.value) || (gameint_3 == btn21.value)) {
            btn21.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn21.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn22.onclick = function(){
        if ((gameint_1 == btn22.value) || (gameint_2 == btn22.value) || (gameint_3 == btn22.value)) {
            btn22.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn22.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn23.onclick = function(){
        if ((gameint_1 == btn23.value) || (gameint_2 == btn23.value) || (gameint_3 == btn23.value)) {
            btn23.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn23.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn24.onclick = function(){
        if ((gameint_1 == btn24.value) || (gameint_2 == btn24.value) || (gameint_3 == btn24.value)) {
            btn24.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn24.style.backgroundColor = "red";
            won = 0;
        }
    }
     btn25.onclick = function(){
        if ((gameint_1 == btn25.value) || (gameint_2 == btn25.value) || (gameint_3 == btn25.value)) {
            btn25.style.backgroundColor = "blue";
            won += 1;
        }else{
            btn25.style.backgroundColor = "red";
            won = 0;
        }
    }
    timechangecol();
    setTimeout(check, 3000);
    function check() {
    if (won == 3) {
        document.getElementById("start").disabled = false;
        score += 20;
        scorerec += score;
        document.getElementById("score").innerHTML = score;
        document.getElementById("scorerec").innerHTML = score;
        document.getElementById("info").innerHTML = "start";
        changecolor();

    }else{

        score += -15;
        document.getElementById("score").innerHTML = score;
        document.getElementById("start").disabled = false;
        document.getElementById("info").innerHTML = "start";
        changecolor();
    }
    }   
}
