import Phaser from "phaser";
import baby1 from "../assets/baby1.png"
import baby2 from "../assets/baby2.png"
import grasstile from "../assets/grasstile.png"
import pathtile from "../assets/pathtile.png"
import map1 from "../assets/map1.json"

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
    this.load.image("Baby", baby1);
    this.load.image("Baby2", baby2)
    this.load.image('grass', grasstile);
    this.load.image('path', pathtile);
    this.load.tilemapTiledJSON('map', map1);
  }
  create() {
    this.createMap();

    graphics = this.add.graphics();
    this.onSpawn();
    spawnEvent = this.time.addEvent({ delay: 4000, callback: this.onSpawn, callbackScope: this, repeat: 10 })

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
    let map = this.make.tilemap({ key: "map" });
    let grassTile = map.addTilesetImage("grass", "grass");
    let pathTile = map.addTilesetImage("path", "path");
    map.createLayer("Tile Layer 1", [grassTile, pathTile]).setScale(0.312);
  }
  moveToddler(toddler, placeHolder) {
    path.getPoint(placeHolder.t, placeHolder.vec);
    toddler.x = placeHolder.vec.x;
    toddler.y = placeHolder.vec.y;
  }
  onSpawn() {
    let toddler;
    let coin = Math.random() * 100;
    console.log(coin);
    if(coin < 50) {
      toddler = this.add.image(50, 800, "Baby").setScale(0.15);
    } else {
      toddler = this.add.image(50, 800, "Baby2").setScale(0.15);
    }
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
