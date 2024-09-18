//give start values to two variables that is the user and comp score
let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#message");
const choices = document.querySelectorAll(".choice"); //select the choices from our document [selects all the query having the class choice]
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//draw game func
const draw = () => {
  console.log("Its a draw !");
  msg.innerHTML = "It's a draw !! ";
  msg.style.backgroundColor = "darkblue";
  msg.style.color = "white";
};

//show winner
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = "Woww !! You win 🥳";
    msg.style.backgroundColor = "Green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "Oh no !! try once more !";
    msg.style.backgroundColor = "Red";
    msg.style.color = "white";
  }
};

//game logic and game
const playGame = (userChoice) => {
  console.log("User Choice is = ", userChoice);
  const compChoice = genCompChoice(); //call computer choice to get the computer choice
  console.log("Comp Choice is = ", compChoice);

  if (userChoice === compChoice) {
    draw(); //draw
  } else {
    //use ternary statement for this logic to make it compact
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false; //comp will give either scissors,paper
    } else if (userChoice === "paper") {
      //comp will give either scissors,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //user chosses scissors, comp has either rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

//generate a computer choice
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let optionsIdx = Math.floor(Math.random() * 3);
  return options[optionsIdx];
};

//add event listener to this choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
