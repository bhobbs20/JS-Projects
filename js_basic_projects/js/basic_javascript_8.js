function whoIsBest() {
    var first_name = "David";
    var Last_name = " Pastrnak";
    var team_name = " is on the bruins";
    var league = " and leads the league";
    var goals = " in goals"
    var best_player = first_name.concat(Last_name, team_name, league, goals);
    document.getElementById("concat").innerHTML = best_player;
}