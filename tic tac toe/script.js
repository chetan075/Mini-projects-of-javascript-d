// first of all declare the selected variables by selecting the classes or ids or elements.

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// now for playing the game we will need some variablesm
// now we have to track if x waale ki turn h ya fir o waale ki turn h kyonkki jab bhi game khela jata h to alternate turns aati h.

let turnO = true; // playerO and playerX
let count = 0;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;

  enableBoxes();
  msgContainer.classList.add("hide");

  boxes.forEach((box) => {
    box.classList.remove("red");
    box.classList.remove("white");
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // playerO
      box.classList.add("red");
      box.innerText = "O";

      // box.classList.add("red");
      turnO = false;
    } else {
      // PlayerX
      box.innerText = "X";
      box.classList.add("white");
      turnO = true;
    }

    box.disabled = true;

    count++;

    let iswinner = checkWinner();
    if (count === 9 && !iswinner) {
      gamedraw();
    }
  });
});

const gamedraw = () => {
  msg.innerText = "Game was a Draw";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        return true;
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
