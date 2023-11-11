

var left = document.getElementById("player");
var conl = 0;
var conr = 0; 
var cond = 0;
var conu = 0;

document.getElementById("left").onclick  = function() {

  conl+= -20;
  let conlpx = conl + "px";
  left.style.marginLeft = conlpx;

}


document.getElementById("right").onclick  = function() {
  conl+= 20;
  let conlpx = conl + "px";
  left.style.marginLeft = conlpx;
  
}
document.getElementById("top").onclick  = function() {
  cond+= 20;
  let conlpx = cond + "px";
  left.style.marginTop = conlpx;
  
}
document.getElementById("down").onclick  = function() {
  cond+= -20;
  let conlpx = cond + "px";
  left.style.marginTop = conlpx;
  
}



