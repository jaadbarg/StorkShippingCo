import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import homeTrack from "./phaser/scene";
import CharlieBrown from "./assets/CharlieBrown.jpg"
import playGame from "./phaser/scene";

export const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: 800,
  height: 800,
  scene: playGame
};

var game = new Phaser.Game(config);

ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);
