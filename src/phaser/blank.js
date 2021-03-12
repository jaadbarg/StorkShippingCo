import Phaser from "phaser";
import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import baby3 from "../assets/baby3.png";
import baby4 from "../assets/baby4.png";
import baby5 from "../assets/baby5.png";
import map from "../assets/map.png";

let graphics;
let path;
let spawnEvent;

let toddlerList = [];
let placeHolderList = [];

class gameScene extends Phaser.Scene {
  constructor() {
    super("gameScene");
    console.log("gameScene");
  }
  preload() {
    this.load.image("Baby1", baby1);
    this.load.image("Baby2", baby2);
    this.load.image("Baby3", baby3);
    this.load.image("Baby4", baby4);
    this.load.image("Baby5", baby5);
    this.load.image("map", map);
  }
  create() {
    //this.createMap();
    this.add.image(400, 300, 'map').setScale(1.3);
    graphics = this.add.graphics();
    this.onSpawn();
    spawnEvent = this.time.addEvent({
      delay: 4000,
      callback: this.onSpawn,
      callbackScope: this,
      repeat: 10,
    });

    this.createTrack();

    graphics.lineStyle(2, 0xffffff, 1);
    //path.draw(graphics);

  }
  update() {
    for (let i = 0; i < toddlerList.length; i++) {
      this.moveToddler(toddlerList[i], placeHolderList[i]);
    }
  }
  createTrack() {
    path = this.add.path(800, 40);
    path.lineTo(545, 40);
    path.lineTo(545, 281);
    path.lineTo(735, 281);
    path.lineTo(735, 521);
    path.lineTo(65, 521);
    path.lineTo(65, 40);
    path.lineTo(300, 40);
    path.lineTo(300, 281);
    path.lineTo(138, 281);
    path.lineTo(138, 441);
    path.lineTo(422, 441);
    path.lineTo(422, 100);
  }
  createMap() {
    //no
  }
  moveToddler(toddler, placeHolder) {
    path.getPoint(placeHolder.t, placeHolder.vec);
    toddler.x = placeHolder.vec.x;
    toddler.y = placeHolder.vec.y;
  }
  onSpawn() {
    let toddler;
    let index = Math.floor(Math.random() * 5); // there are currently 5 baby designs
    console.log(index);
    let babies = ["Baby1","Baby2","Baby3","Baby4","Baby5"];
    toddler = this.add.image(50, 800, babies[index]).setScale(0.15);
    let placeHolder = { t: 0, vec: new Phaser.Math.Vector2() };

    let marker = this.tweens.add({
      targets: placeHolder,
      t: 1,
      ease: "Sine.easeInOut",
      duration: 40000,
      yoyo: false,
      repeat: -1,
    });

    toddlerList.push(toddler);
    placeHolderList.push(placeHolder);
  }
}

export default gameScene;