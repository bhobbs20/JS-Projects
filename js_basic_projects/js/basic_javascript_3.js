function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 = " + subtraction; 
}

function multiplication() {
    var simple_math = 6 * 8;
    document.getElementById("math").innerHTML = "6 * 8 = " + simple_math;
}

function division() {
    var simple_math = 48 / 6;
    document.getElementById("math").innerHTML = "48 / 6 = " + simple_math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("math").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("math").innerHTML = -x;
}

// var x = 5.25;
// x--;
// document.write(x);
function showNumber() {
    var number = 10;
    document.getElementById("equals").innerHTML = number;
}

function add_one() {
    x = 10;
    x++;
    document.getElementById("add").innerHTML = x + " Plus Incr";
}

function minus_one() {
    x = 10;
    x--;
    document.getElementById("minus").innerHTML = x + " Minus Incr";
}
// var y = 5;
// y++;
// document.write( y);