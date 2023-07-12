let game;
function newGame(){
    game = new spiel();
    game.neuesSpiel();
    document.getElementById("newGameButton").remove();
}
