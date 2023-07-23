let num1 = parseInt(prompt("Saisissez num 1"));
let num2 = parseInt(prompt("Saisissez num 2"));
let operateur = prompt("Saisissez l'opérateur");
let result;

if (operateur === "+") {
    result = num1 + num2;
} else if (operateur === "-") {
    result = num1 - num2;
} else if (operateur === "*") {
    result = num1 * num2;
} else if (operateur === "/") {
    result = num1 / num2;
} else {
    result = "t'es fou";
}

alert(result);