function bruinsDictionary() {
    var Team = {
        name: "Bruins",
        city: "Boston",
        division: "Atlantic",
        points: "74",
        place: "1st",
    };
    delete Team.division;
    // document.getElementById("dictionary").innerHTML = Team.name + " " + Team.place;
    document.getElementById("dictionary").innerHTML = Team.division; 

}

document.write(typeof "word");
document.write(typeof 3);