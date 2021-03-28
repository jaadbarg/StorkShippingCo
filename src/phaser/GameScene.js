import Phaser from "phaser";
import baby1 from "../assets/babies/baby1.png";
import baby2 from "../assets/babies/baby2.png";
import baby3 from "../assets/babies/baby3.png";
import baby4 from "../assets/babies/baby4.png";
import baby5 from "../assets/babies/baby5.png";
import gate1 from "../assets/stop.png";
import map from "../assets/map.png";
import boundary from "../assets/boundary.png";
import eventsCenter from "./EventsCenter"

let gateGroup;
let spawnEvent;
let toddlerList = [];
let boundaryList = [];
let directionList = [];
let scoreBoard;
let timeBoard;
let gateTracker = [true, true, true, true, true, true];

let velocityConstant = 40;
let accelerationConstant = 15;
let maxBabyCounter = 1;
let totalScore = 0;
let timeLeft = 300;
let MAXIMUMBABIES = 5
let fontFam = {
  fontSize: 17,
  color: "#000000",
  backgroundColor: "#FFFFFF",
};
let timeAdjustment;

class gameScene extends Phaser.Scene {
  constructor() {
    super("gameScene");
    console.log("gameScene");
  }

  preload() {
    //preloads assets that will be used in the game
    this.load.image("baby1", baby1);
    this.load.image("baby2", baby2);
    this.load.image("baby3", baby3);
    this.load.image("baby4", baby4);
    this.load.image("baby5", baby5);
    this.load.image("map", map);
    this.load.image("gate1", gate1);
    this.load.image("boundary", boundary);
  }

  create() {
    //initially places assets into game
    this.add.image(400, 300, "map").setScale(1.3); //adds map
    this.createBoundary();
    this.createGates(); //adds gates that sit next to hazards
    this.createScoreBoard();
    this.createTimer();

    eventsCenter.on("timePassedData", this.substractTime, this);
    timeAdjustment = 0;

    this.onSpawn(); //spawn toddler?
    spawnEvent = this.time.addEvent({
      delay: 4000,
      callback: this.onSpawn,
      callbackScope: this,
      loop: true,
    });
  }

  update() {
    scoreBoard.setText(totalScore);
    let standardTime = this.convertTime(timeLeft);
    timeBoard.setText(standardTime);

    if(timeLeft <= 0) {
      this.scene.start("resultsScene", {score: totalScore});
    }
  }

  createScoreBoard() {
    this.add.text(450, 180, "Score:", fontFam)
    scoreBoard = this.add.text(450, 210, totalScore, fontFam)
  }

  createTimer() {
    spawnEvent = this.time.addEvent({
      delay: 1000,
      callback: this.increaseTime,
      callbackScope: this,
      loop: true,
    });
    this.add.text(330, 180, "Time:", fontFam)
    timeBoard = this.add.text(330, 210, timeLeft, fontFam)
  }

  increaseTime() {
    timeLeft--;
  }

  substractTime(timePassed) {
    let placeHolder = timePassed;
    timePassed -= timeAdjustment;
    console.log("timepassed is equal ===" + timePassed)
    timeLeft -= timePassed;
    timeAdjustment = placeHolder;
  }

  convertTime(x) {
    let min = Math.floor(x/60)
    let sec = x%60
    if(sec == 0) {
      return min + ":" + sec + "0"
    }
    if(sec < 10) {
      return min + ":" + "0" + sec
    }
    return min + ":" + sec
  }

  createBoundary() {
    //mass insert boundaries to keep babies on the screen
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
    //add boundary to game
    let boundary = this.physics.add
      .image(x, y, "boundary")
      .setScale(0.02)
      .setVisible(false);
    boundary.setPushable(false);
    boundaryList.push(boundary);
    directionList.push(direction);
  }

  createGates() {
    //inserts all gates into game
    gateGroup = this.physics.add.group();
    this.addGate(550, 190, "gate1", 0.05, 0, 2); //openwater
    this.addGate(750, 440, "gate1", 0.05, 0, 0); //stairs
    this.addGate(525, 550, "gate1", 0.05, 0, 1); //windows
    this.addGate(50, 120, "gate1", 0.05, 0, 5); //baby walkers
    this.addGate(290, 250, "gate1", 0.05, 0, 3); //baby equipment
    this.addGate(275, 465, "gate1", 0.05, 0, 4); //furniture
  }

  addGate(x, y, type, scale, angle, gateID) {
    //adds gate to game
    let gate = this.physics.add
      .image(x, y, type)
      .setScale(scale)
      .setInteractive();  
    gate.setAngle(angle);
    this.toggleGate(gate, gateID);
    gate.setPushable(false);
    gateGroup.add(gate);
  }

  toggleGate(gate, gateID) {
    //makes gate clickable/breakable
    gate.on("pointerdown", function () {
      gate.destroy();
      gateTracker[gateID] = false;
    });
    gate.on('pointerdown', () => this.openQuiz(gateID));
  }

  // intention is for scene to switch to quizScene when gate is clicked -- right now
  // openQuiz is running when gate is clicked but scene isn't switching
  openQuiz(gateID) {
    this.scene.stop("quizScene")
    this.scene.sleep("gameScene")
    this.scene.run("quizScene", {id: gateID});
  }

  onSpawn() {
    if (maxBabyCounter <= MAXIMUMBABIES) {
      //spawns baby into game
      let toddler;
      let index = Math.floor(Math.random() * 5); // there are currently 5 baby designs
      let babies = ["baby1", "baby2", "baby3", "baby4", "baby5"];
      toddler = this.physics.add.image(800, 40, babies[index]).setScale(0.15);

      this.setUp(toddler);
      this.collisionBetween(toddler);

      toddlerList.push(toddler);

      if(Math.random() * 100 < 40) {
        this.respawnGate();
      }

      maxBabyCounter++;
    }
  }

  respawnGate() {
    let respawnPool = []
    for(let i = 0; i < gateTracker.length; i++) {
      if(!gateTracker[i]) {
        respawnPool.push(i)
      }
    }
    if(respawnPool.length == 0) {
      return;
    }
    let respawnNumber = respawnPool[Math.floor(Math.random() * respawnPool.length)];
    this.readdGate(respawnNumber);
  }

  readdGate(x) {
    if(x == 0) {
      this.addGate(750, 440, "gate1", 0.05, 0, 0); //stairs
    } else if (x == 1) {
      this.addGate(525, 550, "gate1", 0.05, 270, 1); //windows
    } else if(x == 2) {
      this.addGate(550, 190, "gate1", 0.05, 0, 2); //openwater
    } else if (x == 3) {
      this.addGate(290, 250, "gate1", 0.05, 0, 3); //baby equipment
    } else if (x == 4) {
      this.addGate(275, 465, "gate1", 0.05, 270, 4);
    } else if (x == 5) {
      this.addGate(50, 120, "gate1", 0.05, 0, 5);
    }
    gateTracker[x] = true;
  }

  setUp(toddler) {
    //gives baby physics
    toddler.setVelocityX(velocityConstant * -1);
    toddler.setAcceleration(accelerationConstant * -1, 0);
    toddler.setPushable(false);
    toddler.setFlipX(true);
    this.physics.add.collider(gateGroup, toddler);
    for (let i = 0; i < boundaryList.length; i++) {
      this.physics.add.collider(toddler, boundaryList[i], function () {
        toddler.setVelocityX(0);
        toddler.setVelocityY(0);
        if (directionList[i] == "left") {
          toddler.setVelocityX(velocityConstant * -1);
          toddler.setAcceleration(accelerationConstant * -1, 0);
        } else if (directionList[i] == "right") {
          toddler.setVelocityX(velocityConstant);
          toddler.setAcceleration(accelerationConstant, 0);
          MAXIMUMBABIES = 10;
        } else if (directionList[i] == "up") {
          toddler.setVelocityY(velocityConstant * -1);
          toddler.setAcceleration(0, accelerationConstant * -1);
        } else if (directionList[i] == "down") {
          toddler.setVelocityY(velocityConstant);
          toddler.setAcceleration(0, accelerationConstant);
        } else {
          toddler.setVisible(false);
          toddler.body.setEnable(false);
          toddler.setAcceleration(0, 0);
          maxBabyCounter--;
          totalScore+=200;
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
