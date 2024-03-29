// let nameO = prompt("Enter First Player Name (O): ")
// let nameX = prompt("Enter Second Player Name (X): ")

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgBoxContainer = document.querySelector(".msgBoxContainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerY
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      box.style.color = "#F0F3FF";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      box.style.color = "#15F5BA";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});


const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgBoxContainer.classList.remove("hide");
};

const showWinner = (winner) => {
  // if (winner == "X") {
  //   let finalWinner = nameX;
  // }
  // else {
  //   finalWinner = nameO;
  // }
  // msg.innerText = `Congrats! Winner is ${finalWinner}`;

  msg.innerText = `Congrats! Winner is ${winner}`;
  msgBoxContainer.classList.remove("hide");
  for (box of boxes) {
    box.disabled = true;
  }
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};


resetBtn.addEventListener("click", () => {
  location.reload();
})

newGameBtn.addEventListener("click", () => {
  location.reload();
})
