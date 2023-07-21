function rollDice() {
  const diceSidesElement = document.getElementById("dice-sides");
  const numFaces = parseInt(diceSidesElement.value);
  const resultElement = document.getElementById("result");
  if (numFaces < 2) resultElement.innerText = "Not a valid dice option ";
  if (numFaces > 100) resultElement.innerText = "Too many sides, honestly why even have a dice that big"
  else {
    const result = generatenumber(numFaces);
    resultElement.innerText = "Result: " + result;
  }
}
function generatenumber(numFaces) {
  const min = 1;
  const max = numFaces;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

if (generatenumber(6) > 6) {
  throw new Error("Result exceeded dice");
}

if (generatenumber(6) < 1) {
  throw new Error("Result not a dice option");
}

if (generatenumber(6) == 0) {
  throw new Error("Result not a option");
}
