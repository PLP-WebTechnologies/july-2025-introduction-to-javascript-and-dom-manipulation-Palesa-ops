const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = Number(document.getElementById("ageInput").value);

  if (age >= 18) {
    ageResult.textContent = "You are an adult!";
  } else if (age > 0) {
    ageResult.textContent = "You are a minor!";
  } else {
    ageResult.textContent = "Please enter a valid age.";
  }
});


function greetUser(name) {
  return `Hello, ${name}! Welcome to JS fundamentals.`;
}

function squareNumber(num) {
  return num * num;
}

const greetBtn = document.getElementById("greetBtn");
const greetResult = document.getElementById("greetResult");

greetBtn.addEventListener("click", () => {
  const greeting = greetUser("Palesa"); // Example name
  greetResult.textContent =
    greeting + " Your lucky number squared is " + squareNumber(7);
});

const showNumbersBtn = document.getElementById("showNumbersBtn");
const loopResult = document.getElementById("loopResult");

showNumbersBtn.addEventListener("click", () => {
  let numbers = "";

  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }

  let j = 5;
  while (j > 0) {
    numbers += "*";
    j--;
  }

  loopResult.textContent = numbers;
});

const toggleColorBtn = document.getElementById("toggleColorBtn");
const body = document.body;

toggleColorBtn.addEventListener("click", () => {
  body.style.backgroundColor =
    body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
});

const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = document.getElementById("fruitList");

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});
