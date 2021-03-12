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
import boundary from "../assets/boundary.png"

let hazardGroup;
let spawnEvent;
let toddlerList = [];
let boundaryList = [];
let directionList = [];

let velocityConstant = 50;
let accelerationConstant = 40;

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
    this.load.image("boundary", boundary)
  }
  create() {

    //this.createMap(); hold on to this (Evan)
    this.add.image(400, 300, 'map').setScale(1.3); //not sure if scale exactly fits window

    this.createBoundary();
    this.createStaticImages();
    this.createHazards();

    this.onSpawn();
    spawnEvent = this.time.addEvent({
      delay: 4000,
      callback: this.onSpawn,
      callbackScope: this,
      repeat: 10,
    });

  }
  update() {
    // max of 10 children on the track
  }
  createStaticImages(){
    this.add.image(420, 90, 'house').setScale(0.1);
    this.add.image(175, 170, 'water').setScale(0.25);
    this.add.image(345, 370, 'water').setScale(0.25);
    this.add.image(630, 460, 'water').setScale(0.25);
  }
  createBoundary() {
    this.addBoundary(505, 45, "down");
    this.addBoundary(545, 321, "right");
    this.addBoundary(775, 281, "down");
    this.addBoundary(735, 561, "left");
    this.addBoundary(0, 521, "up");
    this.addBoundary(65, 0, "right");
    this.addBoundary(340, 40, "down");
    this.addBoundary(300, 321, "left");
    this.addBoundary(99, 281, "down");
    this.addBoundary(139, 481, "right");
    this.addBoundary(462, 441, "up");
    this.addBoundary(422, 60, "void");
  }
  addBoundary(x, y, direction) {
    let boundary = this.physics.add.image(x, y, "boundary").setScale(0.02).setVisible(false);
    boundary.setPushable(false);
    boundaryList.push(boundary);
    directionList.push(direction);
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
  toggleHazard(hazard) {
    hazard.on('pointerdown', function () {
      hazard.destroy();
    });
  }
  createMap() {
    //this does nothing rn
  }
  onSpawn() {
    let toddler;
    let index = Math.floor(Math.random() * 5); // there are currently 5 baby designs
    let babies = ["Baby1", "Baby2", "Baby3", "Baby4", "Baby5"];
    toddler = this.physics.add.image(800, 40, babies[index]).setScale(0.15);

    this.setUp(toddler);
    this.collisionBetween(toddler);

    toddlerList.push(toddler);
  }
  setUp(toddler) {
    toddler.setVelocityX(velocityConstant * -1);
    toddler.setAcceleration(accelerationConstant * -1, 0);
    toddler.setPushable(false);
    toddler.setFlipX(true);
    this.physics.add.collider(hazardGroup, toddler);
    for (let i = 0; i < boundaryList.length; i++) {
      this.physics.add.collider(toddler, boundaryList[i],
        function () {
          toddler.setVelocityX(0);
          toddler.setVelocityY(0);
          if (directionList[i] == "left") {
            toddler.setVelocityX(velocityConstant * -1);
            toddler.setAcceleration(accelerationConstant * -1, 0)
          } else if (directionList[i] == "right") {
            toddler.setVelocityX(velocityConstant);
            toddler.setAcceleration(accelerationConstant, 0);
          } else if (directionList[i] == "up") {
            toddler.setVelocityY(velocityConstant * -1);
            toddler.setAcceleration(0, accelerationConstant * -1);
          } else if (directionList[i] == "down") {
            toddler.setVelocityY(velocityConstant);
            toddler.setAcceleration(0, accelerationConstant)
          } else {
            toddler.setVisible(false);
            toddler.body.setEnable(false);
            toddler.setAcceleration(0, 0);
          }
        });
    }
  }
  collisionBetween(toddler) {
    let l = toddlerList.length;
    if (l != 0) {
      this.physics.add.collider(toddler, toddlerList[l - 1]);
    }
  }
}


export default gameScene;