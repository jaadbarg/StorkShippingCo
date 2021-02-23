import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import homeTrack from "./phaser/scene";
import CharlieBrown from "./assets/CharlieBrown.jpg"

export const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var follower;
var path;
var graphics;

function preload() {
  this.load.image("Baby", CharlieBrown);
}

function create ()
{
  const baby = this.add.image(400, 150, "Baby");
    graphics = this.add.graphics();

    follower = { t: 0, vec: new Phaser.Math.Vector2() };

    //  Path starts at 100x100
    path = new Phaser.Curves.Path(100, 100);

    path.lineTo(500, 200);
    path.lineTo(200, 300);
    path.lineTo(400, 500);

    this.tweens.add({
        targets: follower,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 4000,
        yoyo: true,
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
    graphics.fillCircle(follower.vec.x, follower.vec.y, 12);
}

var game = new Phaser.Game(config);


ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);
