import Phaser from "phaser";
import CharlieBrown from "../assets/CharlieBrown.jpg"

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
    this.load.image("Baby", CharlieBrown);
  }
  create() {
    graphics = this.add.graphics();
    spawnEvent = this.time.addEvent({ delay: 3000, callback: this.onSpawn, callbackScope: this, repeat: 10})

    this.createTrack();

    graphics.lineStyle(2, 0xffffff, 1);
    path.draw(graphics);

  }
  update() {
    for(let i = 0; i < toddlerList.length; i++) {
      this.moveToddler(toddlerList[i], placeHolderList[i]);
    }
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
    let toddler = this.add.image(50, 800, "Baby").setScale(0.4);
    let placeHolder = { t: 0, vec: new Phaser.Math.Vector2() };

    let marker = this.tweens.add({
      targets: placeHolder,
      t: 1,
      ease: 'Sine.easeInOut',
      duration: 30000,
      yoyo: false,
      repeat: -1
    });

    toddlerList.push(toddler);
    placeHolderList.push(placeHolder);
  }
}

export default playGame;
