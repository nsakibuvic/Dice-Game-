var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImage= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player 1 wins";
 }else if (randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Player 2 wins";
}else{
    document.querySelector("h2").innerHTML="The match is a draw";
}
