// var randomimages = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
//
// function imgvar(){
//   Math.floor(Math.rnadom() * 10);
//   console.log
// }

var randomnumber = Math.floor(Math.random() * 6) + 1;  // 1- 6

var dice = "images/dice" + randomnumber +".png"; // dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", dice);

// 2nd Dice
var randomnumber1 = Math.floor(Math.random() * 6) + 1;  // 1- 6

var dice2 = "images/dice" + randomnumber1 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", dice2);


// Wins

if (randomnumber > randomnumber1){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !";
}
else if (randomnumber1 > randomnumber) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins !";
}
else{
  document.querySelector("h1").innerHTML = "Draw !";
}
