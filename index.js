//dice1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImgSource1 = "images/dice" + randomNumber1 + ".png";

var imgDice1 = document.querySelectorAll("img")[0];

imgDice1.setAttribute("src", randomImgSource1);

//dice2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

var imgDice2 = document.querySelectorAll("img")[1];

imgDice2.setAttribute("src", randomImgSource2);

//outcome

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}