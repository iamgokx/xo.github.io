let blocksArr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];

function computerChoice() {
  return Math.floor(Math.random() * 9);
}

let cChoiceFlag = 0;
let comChoice = 0;
let testNum = 0;

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
  testNum = 0;
}

function randomChoice(comChoice) {
  if(blocksArr[0]=="a"){
    return 0
  }else if (blocksArr[1]=="a"){
    return 1
  }
  else if (blocksArr[2]=="a"){
    return 2
  }
  else if (blocksArr[3]=="a"){
    return 3
  }
  else if (blocksArr[4]=="a"){
    return 4
  }
  else if (blocksArr[5]=="a"){
    return 5
  }
  else if (blocksArr[6]=="a"){
    return 6
  }
  else if (blocksArr[6]=="a"){
    return 6
  }
  else if (blocksArr[8]=="a"){
    return 8
  }
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
  if (
    (blocksArr[0] == "X" && blocksArr[1] == "X") ||
    (blocksArr[5] == "X" && blocksArr[8] == "X") ||
    (blocksArr[6] == "X" && blocksArr[4] == "X")
  ) {
    if (blocksArr[2] == "a") {
      comChoice = 2;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[1] == "X" && blocksArr[2] == "X") ||
    (blocksArr[3] == "X" && blocksArr[6] == "X") ||
    (blocksArr[4] == "X" && blocksArr[8] == "X")
  ) {
    if (blocksArr[0] == "a") {
      comChoice = 0;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[0] == "X" && blocksArr[2] == "X") ||
    (blocksArr[4] == "X" && blocksArr[7] == "X")
  ) {
    if (blocksArr[1] == "a") {
      comChoice = 1;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[0] == "X" && blocksArr[6] == "X") ||
    (blocksArr[4] == "X" && blocksArr[5] == "X")
  ) {
    if (blocksArr[3] == "a") {
      comChoice = 3;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[2] == "X" && blocksArr[8] == "X") {
    if (blocksArr[5] == "a") {
      comChoice = 5;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[0] == "X" && blocksArr[3] == "X") ||
    (blocksArr[7] == "X" && blocksArr[8] == "X") ||
    (blocksArr[2] == "X" && blocksArr[4] == "X")
  ) {
    if (blocksArr[6] == "a") {
      comChoice = 6;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[1] == "X" && blocksArr[4] == "X") ||
    (blocksArr[6] == "X" && blocksArr[8] == "X")
  ) {
    if (blocksArr[7] == "a") {
      comChoice = 7;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[6] == "X" && blocksArr[7] == "X") ||
    (blocksArr[2] == "X" && blocksArr[5] == "X") ||
    (blocksArr[0] == "X" && blocksArr[4] == "X")
  ) {
    if (blocksArr[8] == "a") {
      comChoice = 8;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[0] == "X" && blocksArr[5] == "X") {
    //odd cases
    if (blocksArr[2] == "a") {
      comChoice = 2;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[0] == "X" && blocksArr[7] == "X") {
    if (blocksArr[6] == "a") {
      comChoice = 6;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[0] == "X" && blocksArr[8] == "X") {
    if (blocksArr[6] == "a") {
      comChoice = 6;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[1] == "X" && blocksArr[3] == "X") ||
    (blocksArr[1] == "X" && blocksArr[6] == "X")
  ) {
    if (blocksArr[0] == "a") {
      comChoice = 0;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[1] == "X" && blocksArr[5] == "X") ||
    (blocksArr[1] == "X" && blocksArr[8] == "X")
  ) {
    if (blocksArr[2] == "a") {
      comChoice = 2;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[1] == "X" && blocksArr[7] == "X") {
   if (blocksArr[5] == "a") {
      comChoice = 5;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[2] == "X" && blocksArr[3] == "X") {
    if (blocksArr[0] == "a") {
      comChoice = 0;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[2] == "X" && blocksArr[7] == "X") {
    if (blocksArr[8] == "a") {
      comChoice = 8;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[2] == "X" && blocksArr[6] == "X") ||
    (blocksArr[0] == "X" && blocksArr[8] == "X")
  ) {
    if (blocksArr[1] == "a") {
      comChoice = 1;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    (blocksArr[5] == "X" && blocksArr[3] == "X") ||
    (blocksArr[1] == "X" && blocksArr[7] == "X")
  ) {
    if (blocksArr[0] == "a") {
      comChoice = 0;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[3] == "X" && blocksArr[7] == "X") {
    if (blocksArr[6] == "a") {
      comChoice = 6;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[5] == "X" && blocksArr[7] == "X") {
    if (blocksArr[8] == "a") {
      comChoice = 8;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[5] == "X" && blocksArr[6] == "X") {
    if (blocksArr[8] == "a") {
      comChoice = 8;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[5] == "X" && blocksArr[0] == "X") {
    if (blocksArr[2] == "a") {
      comChoice = 2;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[6] == "X" && blocksArr[5] == "X") {
    if (blocksArr[8] == "a") {
      comChoice = 8;
    }else {
    comChoice = randomChoice();
  }
  } else if (blocksArr[6] == "X" && blocksArr[1] == "X") {
    if (blocksArr[0] == "a") {
      comChoice = 0;
    }else {
    comChoice = randomChoice();
  }
  } else if (
    blocksArr[0] == "X" ||
    blocksArr[1] == "X" ||
    blocksArr[2] == "X" ||
    blocksArr[3] == "X" ||
    blocksArr[5] == "X" ||
    blocksArr[6] == "X" ||
    blocksArr[7] == "X" ||
    blocksArr[8] == "X" ||
    blocksArr[9] == "X"
  ) {
    comChoice = 4;
  } else if (blocksArr[4] == "X") {
    comChoice = Math.floor(Math.random() * 3);
  } else {
    comChoice = randomChoice();
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
  if (blocksArr[8] == "a") {
    cChoiceFlag = 0;
    blockNine.innerText = "X";
    blocksArr[8] = "X";
    computerO();
    blocksArr[comChoice] = "O";
    comScreen(comChoice);
    checkStatus();
    console.log(blocksArr);
  } else if (blocksArr[8] == "O") {
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
