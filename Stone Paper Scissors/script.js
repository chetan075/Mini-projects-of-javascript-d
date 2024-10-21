let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#03045e";
};

const showwinner = (userWin, userchoice, compchoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `YOU WIN! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `YOU LOST.. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  // Gnerate computer choice -> in these programming we are using functions
  // for small small works this is known as modular way of programming.
  const compchoice = gencompchoice();

  if (compchoice === userchoice) {
    // draw game
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //   scissors, paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock, scissors
      userWin = compchoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = compchoice === "rock" ? false : true;
    }
    showwinner(userWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
