import {Game} from "./models/game.js";

const game = new Game(document.getElementById('canvas'));
document.addEventListener("DOMContentLoaded", () => {
    game.start();
});