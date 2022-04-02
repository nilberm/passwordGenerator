import "./assets/css/style.css";

const result = document.querySelector("#resultPassword");

const numbers = document.querySelector("#numbers");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const symbols = document.querySelector("#symbols");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  checkOptions();
});

function printResult(value) {
  result.innerHTML = value;
}

function randNumber(min, max) {
  min = 0;
  max = 10;
  return Math.floor(Math.random() * (max - min) + min).toString();
}

function randLetter() {
  const characters = "abcdefghijklmnopqrsvuxywz";
  return characters[Math.floor(Math.random() * characters.length)];
}

function uppercaseLetter() {
  const uppercaseResult = randLetter();
  return uppercaseResult.toUpperCase();
}

function randSymbol() {
  const syb = `!"$%&()*+,-.;:<=>@[]_{}^~`;
  return syb[Math.floor(Math.random() * syb.length)];
}

function checkOptions() {
  const numberCharacters = document.querySelector("#numberCharacters").value;
  if (
    (numbers.checked === false) &
    (uppercase.checked === false) &
    (lowercase.checked === false) &
    (symbols.checked === false)
  ) {
    printResult("No option selected");
  } else if (numberCharacters == 0) {
    printResult("Enter the Number of characters");
  } else {
    printResult(loopPassword(numberCharacters));
  }
}

function loopPassword(value) {
  var previewResult = "";
  for (let i = 0; i < value; i++) {
    if (numbers.checked === true) {
      if (previewResult.length >= value) break;
      previewResult += randNumber();
    }
    if (uppercase.checked === true) {
      if (previewResult.length >= value) break;
      previewResult += uppercaseLetter();
    }
    if (lowercase.checked === true) {
      if (previewResult.length >= value) break;
      previewResult += randLetter();
    }
    if (symbols.checked === true) {
      if (previewResult.length >= value) break;
      previewResult += randSymbol();
    }
  }

  return previewResult;
}
