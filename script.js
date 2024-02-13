// Get High Score from Session Storage to keep the highscore intact
let temp = sessionStorage.getItem("highScore") || 0;
document.getElementsByClassName("highscore")[0].innerHTML = temp;

//Reloading the Page
let reload = document.querySelector(".again");
reload.addEventListener("click", () => {
  location.reload();
});

//Guess the number
let random = Math.floor(Math.random() * 20 + 1);
console.log(random);

//Check the random and user input
let check = document.querySelector(".check");

check.addEventListener("click", () => {
  let userGuess = document.getElementsByClassName("guess")[0].value;
  userGuess = parseInt(userGuess);
  console.log(userGuess);

  var score = document.getElementsByClassName("score")[0].innerHTML;

  if (random > userGuess) {
    console.log("too low");
    document.getElementsByClassName("message")[0].innerHTML =
      "Number is Too Low";
    //Update score
    score = score - 1;
    document.getElementsByClassName("score")[0].innerHTML =
      score < 0 ? 0 : score;
  } else if (random < userGuess) {
    console.log("too high");
    document.getElementsByClassName("message")[0].innerHTML =
      "Number is Too High";
    score = score - 1;
    document.getElementsByClassName("score")[0].innerHTML =
      score < 0 ? 0 : score;
  } else {
    document.getElementsByClassName("message")[0].innerHTML = "Matched!";
    document.getElementsByClassName("number")[0].innerHTML = userGuess;
    document.body.style.backgroundColor = "green";
    let hscore = document.getElementsByClassName("highscore")[0].innerHTML;

    if (score > hscore) {
      hscore = document.getElementsByClassName("score")[0].innerHTML;
      document.getElementsByClassName("highscore")[0].innerHTML = hscore;
      sessionStorage.setItem("highScore", hscore);
    }
  }
});
