function bruinsDictionary() {
    var Team = {
        name: "Bruins",
        city: "Boston",
        division: "Atlantic",
        points: "74",
        place: "1st",
    };
    document.getElementById("dictionary").innerHTML = Team.name + " " + Team.place;

}