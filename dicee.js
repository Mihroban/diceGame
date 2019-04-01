//The first dice
 var randomNum1 = Math.floor(Math.random() * 6) + 1; //set a random number
 var randomDiceImg = "dice" + randomNum1 + ".png"; //pick up images based on random numbers generated;
 var randomImgSource = "images/" + randomDiceImg; //src of images will be replaced based on random number generated and the dice selected;

function rollTheDice1(){
    var img1 = document.querySelectorAll("img")[0].setAttribute("src",randomImgSource);

}

//The second dice
 var randomNum2 = Math.floor(Math.random() * 6) + 1;
 var randomImgSource2 = "images/dice" + randomNum2 + ".png";

function rollTheDice2(){

  var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

}

//if player 1 wins
function winedPlayer(randomNum1, randomNum2){
  if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }else{
    document.querySelector("h1").innerHTML = "Draw 🤪";
  }

}
