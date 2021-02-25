import Phaser from "phaser";
import CharlieBrown from "../assets/CharlieBrown.jpg"

let toddler1;
let graphics;
let path;
let placeHolder;
let spawnEvent;

let toddlerList;
let graphicsList;
let pathList;
let placeHolderList;


class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.image("Baby", CharlieBrown);
  }
  create() {
    toddler1 = this.add.image(50, 800, "Baby").setScale(0.4);
    graphics = this.add.graphics();
    placeHolder = { t: 0, vec: new Phaser.Math.Vector2() }; 
    //spawnEvent = this.time.addEvent({ delay: 3000, callback: onSpawn, callbackScope: this, repeat: 10})

    this.createTrack();

    graphics.lineStyle(2, 0xffffff, 1);
    path.draw(graphics);

    let marker = this.tweens.add({
      targets: placeHolder,
      t: 1,
      ease: 'Sine.easeInOut',
      duration: 30000,
      yoyo: false,
      repeat: -1
    });
  }
  update() {
    this.moveToddler(toddler1, placeHolder);
  }
  createTrack() {
    path = this.add.path(50, 800);
    path.lineTo(50, 550);
    path.lineTo(300, 550);
    path.lineTo(300, 150);
    path.lineTo(700, 230);
    path.lineTo(700, 800);
  }
  moveToddler(toddler, placeHolder) {
    path.getPoint(placeHolder.t, placeHolder.vec);
    toddler.x = placeHolder.vec.x;
    toddler.y = placeHolder.vec.y;
  }
  onSpawn() {

  }
}

export default playGame;
