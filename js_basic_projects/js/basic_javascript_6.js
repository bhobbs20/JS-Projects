function rideFunction() {
    var  height;
    var  can_ride;
    height = document.getElementById("Height").value;
    can_ride = (height < 52) ? "you are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride";
}

function canVote() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age >= 18) ? "You are old enough to vote" : "You are not old enough to vote";
    document.getElementById('able').innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erick.Vehicle_Color + " - colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year;
}

/** THIS AND NEW */

function Player(Name, Position, Shot, Age) {
    this.Player_Name = Name;
    this.Player_Position = Position;
    this.Player_Shot = Shot;
    this.Player_Age = Age;
}

var pasta = new Player("David Pastrnak", "Right Wing", "Right", "22");
var bergy = new Player("Patric Bergeron", "Center", "Left", "32");
var marchie = new Player("Brad Marchand", "Left Wing", "Left", "30");

function getPlayer() {
    document.getElementById("New_and_This").innerHTML = "Starting at " + pasta.Player_Position +  ", with a " +  pasta.Player_Shot + "  shot, and at the age of: " + pasta.Player_Age + ", " + pasta.Player_Name;
}

/** END THIS AND NEW */

/** Assign a variable the value of a reserved word. Attempt to display this in the browser. */
/** uncaught reference error */
function reserve() {
    var private = mike;
    document.getElementById('reserve').innerHTML = private;
}

/** end */

/** object constructor function */

function Dog(Breed, Weight, Color, Name) {
    this.Dog_Breed = Breed;
    this.Dog_Weight = Weight;
    this.Dog_Color = Color;
    this.Dog_Name = Name;
}

var dog_1 = new Dog("boxer", "50", "brown", "Roxy");

/** NESTED FUNCTIONS */

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function minus_Function() {
    document.getElementById("Nested_Function").innerHTML = subtraction();
    function subtraction() {
        var x = 15;
        function subtractByOne() { x -= 1;}
        subtractByOne();
        return x;
    }
}