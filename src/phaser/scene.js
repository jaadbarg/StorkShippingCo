import Phaser from "phaser";
import baby1 from "../assets/baby1.png"
import grasstile from "../assets/grasstile.png"
import pathtile from "../assets/pathtile.png"
import map1 from "../assets/map1.json"

let graphics;
let path;
let spawnEvent;

let toddlerList = [];
let placeHolderList = [];


class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.image("Baby", baby1);
    this.load.image('grass', grasstile);
    this.load.image('path', pathtile);
    this.load.tilemapTiledJSON('map', map1);
  }
  create() {
    this.createMap();

    graphics = this.add.graphics();
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
    path.lineTo(550, 40);
    path.lineTo(550, 275);
    path.lineTo(725, 275);
    path.lineTo(725, 525);
    path.lineTo(50, 525);
    path.lineTo(50, 50);
    path.lineTo(300, 50);
    path.lineTo(300, 280);
    path.lineTo(138, 280);
    path.lineTo(138, 420);
    path.lineTo(422, 420);
    path.lineTo(422, 100);
  }
  createMap() {
    let map = this.make.tilemap({key: "map"});
    let grassTile = map.addTilesetImage('grass', 'grass');
    let pathTile = map.addTilesetImage('path', 'path');
    map.createLayer("Tile Layer 1", [grassTile, pathTile]).setScale(0.312);
  }
  moveToddler(toddler, placeHolder) {
    path.getPoint(placeHolder.t, placeHolder.vec);
    toddler.x = placeHolder.vec.x;
    toddler.y = placeHolder.vec.y;
  }
  onSpawn() {
    let toddler = this.add.image(50, 800, "Baby").setScale(0.4);
    let placeHolder = { t: 0, vec: new Phaser.Math.Vector2() };

    let marker = this.tweens.add({
      targets: placeHolder,
      t: 1,
      ease: 'Sine.easeInOut',
      duration: 40000,
      yoyo: false,
      repeat: -1
    });

    toddlerList.push(toddler);
    placeHolderList.push(placeHolder);
  }
}

export default playGame;
