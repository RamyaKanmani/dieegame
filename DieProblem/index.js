var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var images = "H:\\Web-Development\\DieProblem\\images\\dice";
var randomImages = images+ randomNumber1 + ".png";
console.log(randomImages);
document.getElementsByTagName("img")[0].setAttribute("src", randomImages);


var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var images = "H:\\Web-Development\\DieProblem\\images\\dice";
var randomImages1 = images+ randomNumber2 + ".png";
console.log(randomImages1);
document.getElementsByTagName("img")[1].setAttribute("src", randomImages1);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🎉Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " 🎉Player 2 Wins! ";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  