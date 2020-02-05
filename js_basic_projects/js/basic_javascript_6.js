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