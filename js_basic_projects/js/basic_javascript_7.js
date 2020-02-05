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