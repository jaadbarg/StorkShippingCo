import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import GameScene from "./phaser/GameScene.js";
import TitleScene from "./phaser/TitleScene.js";
import ResourceScene from "./phaser/ResourceScene.js";
import InstructScene from "./phaser/InstructScene.js";
import ResultsScene from "./phaser/ResultsScene.js"
import QuizScene from "./phaser/QuizScene.js";
// import QuizQuestions from "./phaser/QuizQuestions";
import Stairs1Scene from "./phaser/Stairs1Scene";
import Stairs2Scene from "./phaser/Stairs2Scene";
import Furniture1Scene from "./phaser/Furniture1Scene";
import Furniture2Scene from "./phaser/Furniture2Scene";
import Windows1Scene from "./phaser/Windows1Scene.js";
import Windows2Scene from "./phaser/Windows2Scene";
import Baby1Scene from "./phaser/Baby1Scene";
import MinigameDatabaseScene from "./phaser/MinigameDatabaseScene";

import PreloadScene from "./phaser/PreloadScene.js";
import MinigameScene from "./phaser/MinigameScene.js";
import baby1Scene from "./phaser/Baby1Scene";
import baby2Scene from "./phaser/Baby2Scene";


// Initializing game scenes
let preloadScene = new PreloadScene();
let gameScene = new GameScene();
let titleScene = new TitleScene();

let resourceScene = new ResourceScene();
let instructScene = new InstructScene();
let resultsScene = new ResultsScene();
let quizScene = new QuizScene();
// let quizQuestions = new QuizQuestions();
let minigameScene = new MinigameScene();
let stairs1Scene = new Stairs1Scene();
let stairs2Scene = new Stairs2Scene();
let furniture1Scene = new Furniture1Scene();
let furniture2Scene = new Furniture2Scene();
let windows1Scene = new Windows1Scene();
let windows2Scene = new Windows2Scene();
let baby1Mini = new Baby1Scene();
let baby2Mini = new baby2Scene();
let minigameDatabaseScene = new MinigameDatabaseScene();

//set up phaser config
export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};
let game = new Phaser.Game(config);

//load scenes
game.scene.add("preloadScene", preloadScene); //this isn't loading in for some reason, even the constructor doesn't get initiated to console.log
game.scene.add("titleScene", titleScene);
game.scene.add("gameScene", gameScene);

game.scene.add("resourceScene", resourceScene);
game.scene.add("instructScene", instructScene);
game.scene.add("resultsScene", resultsScene)

game.scene.add("quizScene", quizScene);
// game.scene.add("quizQuestions", quizQuestions);
game.scene.add("minigameScene", minigameScene);
game.scene.add("stairs1Scene", stairs1Scene);
game.scene.add("stairs2Scene", stairs2Scene);
game.scene.add("furniture1Scene", furniture1Scene);
game.scene.add("furniture1Scene", furniture2Scene);
game.scene.add("windows1Scene", windows1Scene)
game.scene.add("windows2Scene", windows2Scene);
game.scene.add("baby1Scene", baby1Mini);
game.scene.add("baby2Scene", baby2Mini);
game.scene.add("minigameDatabaseScene", minigameDatabaseScene);

// start the title scene
game.scene.start("preloadScene");
