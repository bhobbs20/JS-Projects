function whoIsBest() {
    var first_name = "David";
    var Last_name = " Pastrnak";
    var team_name = " is on the bruins";
    var league = " and leads the league";
    var goals = " in goals"
    var best_player = first_name.concat(Last_name, team_name, league, goals);
    document.getElementById("concat").innerHTML = best_player;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

function newSlice() {
    var line = "With a dart that made him crazy?";
    var lineTwo = line.slice(7, 12);
    document.getElementById("slicer").innerHTML =  "A " + lineTwo;
}

function upperCase() {
    var letters = "hello everyone, how are you all doing?";
    var upperLetters = letters.toUpperCase();
    document.getElementById('upper').innerHTML = upperLetters;
}

function searchWords() {
    var players = document.getElementById("sent").innerHTML = "Bruins forwards are of to a good second half, including Pastarnak, Marchand, and Coyle";
    var player = players.search("Pastarnak");
    document.getElementById('search-players').innerHTML = "At position: " + player;
}