let blocksArr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];

function computerChoice() {
  return Math.floor(Math.random() * 9);
}

let cChoiceFlag = 0;
let comChoice = 0;

let blockOne = document.getElementById("1");
let blockTwo = document.getElementById("2");
let blockThree = document.getElementById("3");
let blockFour = document.getElementById("4");
let blockFive = document.getElementById("5");
let blockSix = document.getElementById("6");
let blockSeven = document.getElementById("7");
let blockEight = document.getElementById("8");
let blockNine = document.getElementById("9");
let resultScreen = document.getElementById("resultScreen");

function reset() {
  blocksArr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];
  blockOne.innerText = "";
  blockTwo.innerText = "";
  blockThree.innerText = "";
  blockFour.innerText = "";
  blockFive.innerText = "";
  blockSix.innerText = "";
  blockSeven.innerText = "";
  blockEight.innerText = "";
  blockNine.innerText = "";
  flag = 0;
  cChoiceFlag = 0;
  comChoice = 0;
  resultScreen.style.transform = "translateY(-70px)";
}

function comScreen(num) {
  switch (num) {
    case 0: {
      blockOne.innerText = "O";
      break;
    }
    case 1: {
      blockTwo.innerText = "O";
      break;
    }
    case 2: {
      blockThree.innerText = "O";
      break;
    }
    case 3: {
      blockFour.innerText = "O";
      break;
    }
    case 4: {
      blockFive.innerText = "O";
      break;
    }
    case 5: {
      blockSix.innerText = "O";
      break;
    }
    case 6: {
      blockSeven.innerText = "O";
      break;
    }
    case 7: {
      blockEight.innerText = "O";
      break;
    }
    case 8: {
      blockNine.innerText = "O";
      break;
    }
    default: {
      return;
    }
  }
}

function computerO() {
  comChoice = computerChoice();
  if (blocksArr[comChoice] == "X") {
    computerO();
  } else if (blocksArr[comChoice] == "") {
    return;
  }
}

blockOne.addEventListener("click", () => {
  if (blocksArr[0] == "a") {
    cChoiceFlag = 0;
    blockOne.innerText = "X";
    blocksArr[0] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[0] == "O") {
    return;
  }
});

blockTwo.addEventListener("click", () => {
  if (blocksArr[1] == "a") {
    cChoiceFlag = 0;
    blockTwo.innerText = "X";
    blocksArr[1] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[1] == "O") {
    return;
  }
});

blockThree.addEventListener("click", () => {
  if (blocksArr[2] == "a") {
    cChoiceFlag = 0;
    blockThree.innerText = "X";
    blocksArr[2] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[2] == "O") {
    return;
  }
});

blockFour.addEventListener("click", () => {
  if (blocksArr[3] == "a") {
    cChoiceFlag = 0;
    blockFour.innerText = "X";
    blocksArr[3] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[3] == "O") {
    return;
  }
});

blockFive.addEventListener("click", () => {
  if (blocksArr[4] == "a") {
    cChoiceFlag = 0;
    blockFive.innerText = "X";
    blocksArr[4] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[4] == "O") {
    return;
  }
});

blockSix.addEventListener("click", () => {
  if (blocksArr[5] == "a") {
    cChoiceFlag = 0;
    blockSix.innerText = "X";
    blocksArr[5] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[5] == "O") {
    return;
  }
});

blockSeven.addEventListener("click", () => {
  if (blocksArr[6] == "a") {
    cChoiceFlag = 0;
    blockSeven.innerText = "X";
    blocksArr[6] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[6] == "O") {
    return;
  }
});

blockEight.addEventListener("click", () => {
  if (blocksArr[7] == "a") {
    cChoiceFlag = 0;
    blockEight.innerText = "X";
    blocksArr[7] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
  } else if (blocksArr[7] == "O") {
    return;
  }
});

blockNine.addEventListener("click", () => {
  if(blocksArr[8]=='a'){cChoiceFlag = 0;
  blockNine.innerText = "X";
  blocksArr[8] = "X";
  computerO();
  blocksArr[comChoice] = "O";
  comScreen(comChoice);
  checkStatus();
  console.log(blocksArr);}else if (blocksArr[8] == "O") {
    return;
  }
});

//algo

function checkStatus() {
  if (blocksArr[0] == "X" && blocksArr[1] == "X" && blocksArr[2] == "X") {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[3] == "X" &&
    blocksArr[4] == "X" &&
    blocksArr[5] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[6] == "X" &&
    blocksArr[7] == "X" &&
    blocksArr[8] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[0] == "X" &&
    blocksArr[3] == "X" &&
    blocksArr[6] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[1] == "X" &&
    blocksArr[4] == "X" &&
    blocksArr[7] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[2] == "X" &&
    blocksArr[5] == "X" &&
    blocksArr[8] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[0] == "X" &&
    blocksArr[4] == "X" &&
    blocksArr[8] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[2] == "X" &&
    blocksArr[4] == "X" &&
    blocksArr[6] == "X"
  ) {
    resultScreen.style.transform = "translateY(0)";
  } else if (
    blocksArr[0] == "O" &&
    blocksArr[1] == "O" &&
    blocksArr[2] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[3] == "O" &&
    blocksArr[4] == "O" &&
    blocksArr[5] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[6] == "O" &&
    blocksArr[7] == "O" &&
    blocksArr[8] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[0] == "O" &&
    blocksArr[3] == "O" &&
    blocksArr[6] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[1] == "O" &&
    blocksArr[4] == "O" &&
    blocksArr[7] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[2] == "O" &&
    blocksArr[5] == "O" &&
    blocksArr[8] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[0] == "O" &&
    blocksArr[4] == "O" &&
    blocksArr[8] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  } else if (
    blocksArr[2] == "O" &&
    blocksArr[4] == "O" &&
    blocksArr[6] == "O"
  ) {
    resultScreen.style.transform = "translateY(-120px)";
  }
}
