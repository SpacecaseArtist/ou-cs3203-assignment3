// no analogous main function is JS
// user input prompt show up in browser immediately
let input = prompt(
 "Enter a list of numbers, separated by commas, to create our actionable array:"
);
let arra = input.split(",").map(Number);

//function to calc sum of elements in an array
function sum(arra) {
 let s = 0;

 for (let i = 0; i < arra.length; i++) s += arra[i];
 return s;
}

//function to calc product of elements in an array
function product(arra) {
 let prod = 1;
 for (i = 0; i < arra.length; i++) prod = prod * arra[i];
 return prod;
}

let arrarev = arra;
arra.reverse();

//let arra = [1, 8, 16, 24];
document.write("Array is " + arra + "<br>");
document.write("Array Sum is " + sum(arra) + "<br>");
document.write("Array product is " + product(arra) + "<br>");