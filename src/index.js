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
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let follower;
let path;
let graphics;

function preload() {
  this.load.image("Baby", CharlieBrown);
}

function create ()
{
  graphics = this.add.graphics();   
  follower = { t: 0, vec: new Phaser.Math.Vector2() }; 
    
    // the path for our enemies
    // parameters are the start x and y of our path
    path = this.add.path(50, 800);
    path.lineTo(50, 550);
    path.lineTo(300, 550);
    path.lineTo(300, 300);
    path.lineTo(500, 300);
    path.ellipseTo(200, 100, 90, 270, true);
    path.lineTo(600, 500);
    path.ellipseTo(150, 150, 0, 360, false, 315);
    path.lineTo(500, 605);

    var placeHolder = this.tweens.add({
      targets: follower,
      t: 1,
      ease: 'Sine.easeInOut',
      duration: 30000,
      yoyo: false,
      repeat: -1
    });

}

function update ()
{

  graphics.clear();
  graphics.lineStyle(2, 0xffffff, 1);

  path.draw(graphics);

  path.getPoint(follower.t, follower.vec);

  graphics.fillStyle(0xff0000, 1);
  graphics.fillCircle(follower.vec.x, follower.vec.y, 1);
  fillHazards();
  var newBaby = this.add.image(follower.vec.x, follower.vec.y, "Baby");
  newBaby.setScale(0.4);
  setTimeout(() => {  newBaby.destroy(); }, 1);
}

function fillHazards() {
  graphics.fillCircle(50, 550, 30);
  graphics.fillStyle(0x07e000, 1);
  graphics.fillCircle(300, 550, 30);
  graphics.fillCircle(300, 300, 30);
  graphics.fillStyle(0xff0000, 1);
  graphics.fillCircle(500, 300, 30);
  graphics.fillStyle(0x07e000, 1);
  graphics.fillCircle(600, 500, 30);
}

var game = new Phaser.Game(config);


ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);
