function callLoop() {
    var number = " ";
    var num = 0;
    while (num < 100) {
        number += "<br>" + num;
        num++;
    }
    document.getElementById("loop").innerHTML = number;
}

function str_len() {
    var my_string = "this is a sentence";
    var n = my_string.length;
    document.getElementById('str_len').innerHTML = n;
}

var instruments = ["Gutiar", "Drums", "Piano", "Bass", "Violin", "Trumpet"];
var content = " ";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
        document.getElementById("for_loop").innerHTML = content;
    }
}
 
var car_colors = ["Red", "Blue", "Purple", "Black", "White"];
var car_options = "";
var color;
function for_colors() {
    for (color = 0; color < car_colors.length; color++) {
        car_options += car_colors[color] + "<br>";
        document.getElementById('array_loop').innerHTML = car_options;
    }
}

function constant() {
    const hockeyStick = {
        brand: "baur",
        color: "blue",
        shot: "left",
        flex: "20"
    };   
    hockeyStick.brand = "ccm";
    hockeyStick.team = "Bruins";
    document.getElementById("constant").innerHTML = "My favorite hockey stick brand is " + hockeyStick.brand + " with a flex of " + hockeyStick.flex + " used by the " + hockeyStick.team;
}


var stick = "baur";
document.write(stick);
{ 
    let stick = "ccm"
    document.write("<br>" + stick)
}
document.write("<br>" + stick);


function myStick(stick) {
  return "My favorite hockey stick is  " + stick;
}
document.write("<br>" + "<br>" + myStick("Baur"));


let player = {
    name: "Liam Hobbs",
    age: "6",
    position: "left wing",
    number: "12",
    note : function() {
        return "Wings player, " + this.name + ", plays " + this.position + " and is number " + this.number + ".";
    }
};
document.write("<br>" + "<br>" + player.note());


var number = " ";
for (num = 0; num < 100; num++) {
    if (num === 78) { break ;}
    number += "Ray Bourque is number: " + num + "<br>";
}
document.write("<br>" + "<br>" + number);


var numbers = "";
var numNum;
for (numNum = 1; numNum < 23; numNum++) {
    if (numNum === 8) { continue; }
    numbers += "My least favorite number is " + numNum + "<br>"
}
document.write("<br>" + "<br>" + numbers);