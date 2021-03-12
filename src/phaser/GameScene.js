import Phaser from "phaser";
import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import baby3 from "../assets/baby3.png";
import baby4 from "../assets/baby4.png";
import baby5 from "../assets/baby5.png";
import water from "../assets/openwater.png"
import house from "../assets/house.png";
import gate from "../assets/gate.png";
import map from "../assets/map.png";

let graphics;
let path;
let spawnEvent;

let toddlerList = [];
let hazardGroup;

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
    this.load.image('water', water)
    this.load.image('house', house);
    this.load.image("gate", gate);
  }
  create() {

    //this.createMap(); hold on to this (Evan)
    this.add.image(400, 300, 'map').setScale(1.3); //not sure if scale exactly fits window
    graphics = this.add.graphics();
    this.add.image(420, 90, 'house').setScale(0.1);
    this.add.image(175, 170, 'water').setScale(0.25);
    this.add.image(345, 370, 'water').setScale(0.25);
    this.add.image(630, 460, 'water').setScale(0.25);

    this.createHazards();

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
      this.moveToddler(toddlerList[i]);
    }
  }
  moveToddler(i) {
    if(Math.round(i.x) == 545 && Math.round(i.y) == 40) {
      i.setVelocityX(0);
      i.setVelocityY(35);
      i.setAcceleration(0, 5);
    } else if ((i.x > 544 && i.x < 546) && (i.y > 280 && i.y < 282)) {
      i.setVelocityX(35);
      i.setVelocityY(0);
      i.setAcceleration(5, 0);
      i.setFlipX(false);
    } else if (Math.round(i.x) == 735 && (i.y > 280 && i.y < 282)) {
      i.setVelocityX(0);
      i.setVelocityY(35);
      i.setAcceleration(0, 5);
    } else if ((i.x > 734 && i.x < 736) && (i.y > 520 && i.y < 522)) {
      i.setVelocityX(-35);
      i.setVelocityY(0);
      i.setAcceleration(-10, 0);
      i.setFlipX(true);
    } else if ((i.x > 63 && i.x < 67) && (i.y > 519 && i.y < 523)) {
      i.setVelocityX(0);
      i.setVelocityY(-35);
      i.setAcceleration(0, -5);
    } else if ((i.x > 63 && i.x < 67) && (i.y > 39 && i.y < 41)) {
      i.setVelocityX(35);
      i.setVelocityY(0);
      i.setAcceleration(0, 0);
      i.setFlipX(false);
    } else if ((i.x > 298 && i.x < 302) && (i.y > 39 && i.y < 41)) {
      i.setVelocityX(0);
      i.setVelocityY(35);
      i.setAcceleration(0, 10);
    } else if ((i.x > 298 && i.x < 302) && (i.y > 278 && i.y < 284)) {
      i.setVelocityX(-35);
      i.setVelocityY(0);
      i.setAcceleration(-5, 0);
      i.setFlipX(true);
    } else if ((i.x > 135 && i.x < 143) && (i.y > 278 && i.y < 284)) {
      i.setVelocityX(0);
      i.setVelocityY(35);
      i.setAcceleration(0, 5);
    } else if ((i.x > 135 && i.x < 143) && (i.y > 439 && i.y < 443)) {
      i.setVelocityX(35);
      i.setVelocityY(0);
      i.setAcceleration(5, 0);
      i.setFlipX(false);
    } else if ((i.x > 419 && i.x < 425) && (i.y > 439 && i.y < 443)) {
      i.setVelocityX(0);
      i.setVelocityY(-35);
      i.setAcceleration(0, -5);
    } else if ((i.x > 419 && i.x < 425) && (i.y > 96 && i.y < 104)) {
      i.setVelocityX(0);
      i.setVelocityY(0);
      i.setVisible(false);
      i.body.setEnable(false);
      i.setAcceleration(0, 0);
    }
  }
  createHazardImages(x, y, type, scale) {
    this.add.image(x, y, type).setScale(scale);
  }
  createHazards() {
    hazardGroup = this.physics.add.group();
    this.addHazard(70, 180, 'gate', 0.1, 0);
    this.addHazard(120, 540, 'gate', 0.1, 270);
    this.addHazard(735, 480, 'gate', 0.1, 0);
    this.addHazard(422, 300, 'gate', 0.1, 0);
  }
  addHazard(x, y, type, scale, angle) {
    let hazard = this.physics.add.image(x, y, type).setScale(scale).setInteractive();
    hazard.setAngle(angle);
    this.toggleHazard(hazard);
    hazard.setPushable(false);
    hazardGroup.add(hazard);
  }
  toggleHazard(hazard){
    hazard.on('pointerdown', function (){
      hazard.destroy();
    });
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
    //this does nothing rn
  }
  onSpawn() {
    let toddler;
    let index = Math.floor(Math.random() * 5); // there are currently 5 baby designs
    console.log(index);
    let babies = ["Baby1","Baby2","Baby3","Baby4","Baby5"];
    toddler = this.physics.add.image(800, 40, babies[index]).setScale(0.15);

    toddler.setVelocityX(-35);
    toddler.setAcceleration(-5, 0);
    toddler.setPushable(false);
    toddler.setFlipX(true);
    this.physics.add.collider(hazardGroup, toddler);
    this.collisionBetween(toddler);

    toddlerList.push(toddler);
  }
  collisionBetween(toddler) {
    let l = toddlerList.length;
    if(l != 0) {
      this.physics.add.collider(toddler, toddlerList[l - 1]);
    }
  }
}

export default gameScene;