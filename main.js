//main.js

//function to calc sum of elements in an array
function sum(arra) { 
    let s = 0;

    for (let i = 0; i < arra.length; i++) 
        s += arra[i]; 
    return s; 
} 
 
let arra = [1, 8, 16, 24];
document.write("Array is " + arra + "<br>");
document.write("Array Sum is " + sum(arra) + "<br>");