const calcForm = document.getElementById('calc-form');

setInterval(() => {
  alert("Please, use me...");
}, 30000);

function checkNum(obj) {
  if (obj.value < 0) {
    alert("Error :(");
    console.log("Error :(");
  }
}

function showOpt(obj) {
  console.log(obj.value);
}

calcForm.addEventListener("submit", (e) => {
  const valueA = document.getElementById("input-a").value;
  const valueB = document.getElementById("input-b").value;
  const opt = document.getElementById("sel-opt").value;
  calculation(valueA, valueB, opt);
  e.preventDefault();
});

function calculation(valueA, valueB, opt) {
  if ((opt === "divide" || opt === "mod") && valueB == 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  const a = parseInt(valueA);
  const b = parseInt(valueB);
  let result;

  switch (opt) {
    case "plus": result = a + b; break;
    case "minus": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide": result = a / b; break;
    case "mod": result = a % b; break;
  }

  alert(`result: ${result}`);
  console.log(`result: ${result}`);
}
