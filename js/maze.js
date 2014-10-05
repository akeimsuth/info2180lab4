"use strict";
window.onload=function(){
$("end").onmouseover=win;
$("start").onmouseover=start;
$("start").onclick=reset;
$("cheat").onmouseover=cheat;
};
function lightUp(){
lose();
var bound=$("boundary1");
var bound1=$("boundary2");
var bound2=$("boundary3");
var bound3=$("boundary4");
var bound4=$("boundary5");
bound.style.backgroundColor="#ff8888";
bound1.style.backgroundColor="#ff8888";
bound2.style.backgroundColor="#ff8888";
bound3.style.backgroundColor="#ff8888";
bound4.style.backgroundColor="#ff8888";
}
function reset(){
$("status").innerHTML="Move your mouse over the &quot;S&quot; to begin.";
var bound=$("boundary1");
var bound1=$("boundary2");
var bound2=$("boundary3");
var bound3=$("boundary4");
var bound4=$("boundary5");
bound.style.backgroundColor="#eeeeee";
bound1.style.backgroundColor="#eeeeee";
bound2.style.backgroundColor="#eeeeee";
bound3.style.backgroundColor="#eeeeee";
bound4.style.backgroundColor="#eeeeee";
}
function lose(){
$("status").innerHTML="You Lose :(";
}
function win(){
$("status").innerHTML="You Win :(";
}
function cheat(){
lightUp();
$("status").innerHTML="CHEATER";
}
function start(){
$("boundary1").onmouseover=lightUp;
$("boundary2").onmouseover=lightUp;
$("boundary3").onmouseover=lightUp;
$("boundary4").onmouseover=lightUp;
$("boundary5").onmouseover=lightUp;
}
