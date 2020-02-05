// var x = 10;
// function Add_Numbers_1() {
//     document.write(20 + x + "<br>");
// }
// function Add_Numbers_2() {
//     document.write(x + 100);
// }

// Add_Numbers_1();
// Add_Numbers_2();

// var number = 28;

// function divideNum() {
//     var number = 10;
//     console.log(number / 5);
// }
// function mulitplyNum() {
//     console.log(new_number * 100);
// }

// divideNum();
// mulitplyNum();

// if (1 < 2) {
//     document.write("the left number is smaller that the number on the right")
// }

function myTime() {
    my_time = new Date().getHours();
    what_to_eat = (my_time < 12) ? "Steak and Eggs" : "Burger and Beer";
    document.getElementById("time").innerHTML = what_to_eat;
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you Today";
    }
}

var number = 24;
if (number < 32) {
    document.write("Whats up");
}

function ageFunction() {
    Age = document.getElementById("age").value;
    if (Age >= 18) {
        Vote = "You are older enough to vote";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("your_age").innerHTML = Vote;
}

function mealCost() {
    meal_cost = document.getElementById('meal').value;
    if (meal_cost < 20.01) {
        meal = "Meal is $20.01, You dont have enough money too eat."; 
    }
    else {
        meal = "Meal is $20.01, You can buy lunch, ENJOY.";
    }
    document.getElementById('meal_price').innerHTML = meal;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;

    if (time < 12 == time > 0) {
        reply = "It is morning time";
    }
    else if (time > 12 == time < 18) {
        reply = "it is afternoon";
    }
    else {
         reply = "it is evening";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}