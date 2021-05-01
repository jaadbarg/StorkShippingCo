import Phaser from "phaser";
import baby1 from "../assets/babies/baby1.png";
import baby2 from "../assets/babies/baby2.png";
import baby3 from "../assets/babies/baby3.png";
import baby4 from "../assets/babies/baby4.png";
import baby5 from "../assets/babies/baby5.png";
import baby6 from "../assets/babies/baby6.png";
import baby7 from "../assets/babies/baby7.png";
import baby8 from "../assets/babies/baby8.png";
import baby9 from "../assets/babies/baby9.png";
import baby10 from "../assets/babies/baby10.png";
import gate1 from "../assets/stop.png";
import map from "../assets/map.png";
import lightbulb from "../assets/lightbulb.png";
import fullscreen from "../assets/fullscreen.png";
import boundary from "../assets/boundary.png";
import eventsCenter from "./EventsCenter"

let gateGroup;
let spawnEvent;
let gateSpawnEvent;
let toddlerList = [];
let boundaryList = [];
let directionList = [];
let scoreBoard;
let timeBoard;
let gateTracker;
let inactiveModal;
let inactiveTip;
let respawnGateCoin;
let delayRespawn;

let velocityConstant = 40;
let accelerationConstant = 15;
let maxBabyCounter;
let totalScore;
let timeLeft;
let MAXIMUMBABIES;
let fontFam = {
  // fontFamily: "cursive",
  fontSize: 17,
  color: "#9f5919",
  //backgroundColor: "#6e82d4",
  fontStyle: "bold"
};
let timeAdjustment;
let timeAdjustMini;
let clearedBoard;
let togoBoard;
let hazardsCleared;
let hazardsToGo;
let inactiveTimer;
let pingCounter;
let emitterCount = 0;

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
    this.load.image("baby6", baby6);
    this.load.image("baby7", baby7);
    this.load.image("baby8", baby8);
    this.load.image("baby9", baby9);
    this.load.image("baby10", baby10);
    this.load.image("map", map);
    this.load.image("gate1", gate1);
    this.load.image("boundary", boundary);
    this.load.image("lightbulb", lightbulb);
    this.load.image("fullscreen", fullscreen);
  }

  create() {
    //initialize constants
    maxBabyCounter = 1;
    totalScore = 0;
    timeLeft = 300;
    MAXIMUMBABIES = 5
    gateTracker = [true, true, true, true, true, true];
    hazardsCleared = 0;
    hazardsToGo = 6;
    emitterCount++;
    inactiveTimer = 0;
    respawnGateCoin = false;

    //initially places assets into game
    this.add.image(400, 300, "map").setScale(1.3); //adds map
    this.createBoundary();
    this.createGates(); //adds gates that sit next to hazards
    this.createScoreBoard();
    this.createTimer();
    this.createHazardBoard();
    this.createInactiveTip();

    //sets fullscreen button
    let fullscreenBtn = this.add.image(20, 20, "fullscreen").setScale(0.15);
    fullscreenBtn.setInteractive();
    fullscreenBtn.on("pointerdown", function () {
        if (this.scale.isFullscreen){
            this.scale.stopFullscreen();
        }
        else{
            this.scale.startFullscreen();
        }}, this);

    //setting up timer to keep track of time during minigame and quiz
    eventsCenter.on("timePassedData", this.subtractTime, this);
    eventsCenter.on("timePassedMini", this.subtractTime, this);
    timeAdjustment = 0;
    timeAdjustMini = 0;

    //spawning new babies every 8 seconds
    this.onSpawn(); 
    spawnEvent = this.time.addEvent({
      delay: 8000,
      callback: this.onSpawn,
      callbackScope: this,
      loop: true,
    });

    
  }

  //updates all score boards and changes scenes when timer hits 0
  update() {
    scoreBoard.setText(totalScore);
    let standardTime = this.convertTime(timeLeft);
    timeBoard.setText(standardTime);

    clearedBoard.setText(hazardsCleared)
    togoBoard.setText(hazardsToGo)

    if (timeLeft <= 0) {
      this.scene.start("resultsScene", { score: [totalScore - (75 * hazardsCleared), hazardsCleared] });
      this.scene.stop('quizScene');
    }
  }

  createScoreBoard() {
    let scoreBox = this.add.rectangle(360, 218, 65, 90, 0xffffff)

    this.add.text(330, 220, "Score:", fontFam)
    scoreBoard = this.add.text(330, 240, totalScore, fontFam)

    pingCounter = this.add.image(420, 90, 'lightbulb').setScale(0.1);
    pingCounter.setVisible(false);
  }

  //creater timer score board
  createTimer() {
    spawnEvent = this.time.addEvent({
      delay: 1000,
      callback: this.increaseTime,
      callbackScope: this,
      loop: true,
    });
    this.add.text(330, 180, "Time:", fontFam)
    timeBoard = this.add.text(330, 200, timeLeft, fontFam)
  }

  //display hazard score board
  createHazardBoard() {
    let hazardBox = this.add.rectangle(483, 218, 77, 90, 0xffffff)

    this.add.text(445, 180, "Cleared:", { ...fontFam, wordWrap: { width: 100 } })
    clearedBoard = this.add.text(450, 200, hazardsCleared, fontFam)
    this.add.text(450, 220, "To Go:", fontFam)
    togoBoard = this.add.text(450, 240, hazardsToGo, fontFam)
  }

  //keep track of time during the game
  increaseTime() {
    timeLeft--;
    inactiveTimer++;
    if (inactiveTimer >= 15) {
      inactiveTimer = 0;
      inactiveModal.setVisible(true);
      inactiveTip.setVisible(true);
    }
  }

  //keep track of time during minigame and quiz
  subtractTime(timePassed) {
    console.log("timePassed === " + timePassed)
    timePassed /= emitterCount;
    timeLeft -= timePassed;
    timeLeft = Math.round(timeLeft)
  }

  //seconds --> minutes and seconds
  convertTime(x) {
    let min = Math.floor(x / 60)
    let sec = x % 60
    if (sec == 0) {
      return min + ":" + sec + "0"
    }
    if (sec < 10) {
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

  //boundaries to help change direction of babies
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
    this.addGate(550, 220, "gate1", 0.04, 0, 2); //openwater
    this.addGate(750, 440, "gate1", 0.04, 0, 0); //stairs
    this.addGate(525, 550, "gate1", 0.04, 0, 1); //windows
    this.addGate(50, 120, "gate1", 0.04, 0, 5); //bed
    this.addGate(290, 250, "gate1", 0.04, 0, 3); //baby equipment
    this.addGate(275, 465, "gate1", 0.04, 0, 4); //furniture
  }

  //setting up gates with collision properties
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

  //making the gates interactive
  toggleGate(gate, gateID) {
    //makes gate clickable/breakable
    gate.on("pointerdown", function () {
      gate.destroy();
      gateTracker[gateID] = false;

      hazardsCleared++;
      hazardsToGo--;
      totalScore += 75;

      inactiveModal.setVisible(false);
      inactiveTip.setVisible(false);

      inactiveTimer = 0;
    });
    gate.on('pointerdown', () => this.openGate(gateID));
    gate.on('pointerdown', () => this.respawnOperation(gateID));
  }

  //gates will respond 5.2 seconds after being cleared
  respawnOperation(gateID) {
    delayRespawn = this.time.addEvent({
      delay: 5200,
      callback: this.respawnGate,
      args: [gateID],
      callbackScope: this,
      loop: false,
    });
  }

  //inactive tip will shown after 15secs
  createInactiveTip() {
    inactiveModal = this.add.rectangle(550, 420, 280, 120, 0xffffff);
    inactiveModal.setStrokeStyle(10, 0xe90000);

    inactiveTip = this.add.text(445, 400, "Click on a stop sign to clear a hazard!", { ...fontFam, wordWrap: { width: 240 } })

    inactiveModal.setVisible(false);
    inactiveTip.setVisible(false);
  }

  openMiniGame(gateID) {
    this.scene.stop("quizScene")
    this.scene.sleep("gameScene")
    this.scene.run("stairs1Scene");
  }

  //opens a quiz question or minigame
  openGate(gateID) {
    let coin = Math.random() * 100;
    
    //open water has lower minigame chance b/c only 1 minigame
    if(gateID == 2) {
      coin *= 2;
    }
    
    //35% of getting a minigame
    if (coin <= 35) {
      //run minigame
      this.scene.stop("minigameDatabaseScene", { id: gateID })
      this.scene.sleep("gameScene")
      this.scene.run("minigameDatabaseScene", { id: gateID });
    } else {
      //run quiz question
      this.scene.stop("quizScene")
      this.scene.sleep("gameScene")
      this.scene.run("quizScene", { id: gateID });
    }
  }

  onSpawn() {
    if (maxBabyCounter <= MAXIMUMBABIES) {

      //spawns baby into game
      let toddler;
      let index = Math.floor(Math.random() * 10); // there are 10 baby designs
      let babies = ["baby1", "baby2", "baby3", "baby4", "baby5", "baby6", "baby7", "baby8", "baby9", "baby10"];
      toddler = this.physics.add.image(1000, 40, babies[index]).setScale(0.035);

      this.setUp(toddler);
      this.collisionBetween(toddler);

      toddlerList.push(toddler);

      maxBabyCounter++;
    }
  }

  respawnGate(gateID) {
    this.readdGate(gateID);
    hazardsToGo++;
  }

  readdGate(x) {
    if (x == 0) {
      this.addGate(750, 440, "gate1", 0.04, 0, 0); //stairs
    } else if (x == 1) {
      this.addGate(525, 550, "gate1", 0.04, 0, 1); //windows
    } else if (x == 2) {
      this.addGate(550, 220, "gate1", 0.04, 0, 2); //openwater
    } else if (x == 3) {
      this.addGate(290, 250, "gate1", 0.04, 0, 3); //baby equipment
    } else if (x == 4) {
      this.addGate(275, 465, "gate1", 0.04, 0, 4);
    } else if (x == 5) {
      this.addGate(50, 120, "gate1", 0.04, 0, 5);
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

    //babies will change directions when colliding with boundary
    for (let i = 0; i < boundaryList.length; i++) {
      this.physics.add.collider(toddler, boundaryList[i], function () {
        toddler.setVelocityX(0);
        toddler.setVelocityY(0);
        if (directionList[i] == "left") {
          toddler.setVelocityX(velocityConstant * -1);
          toddler.setAcceleration(accelerationConstant * -1, 0);
          MAXIMUMBABIES = 10;
        } else if (directionList[i] == "right") {
          toddler.setVelocityX(velocityConstant);
          toddler.setAcceleration(accelerationConstant, 0);
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
          totalScore += 200;
          pingCounter.setVisible(true);
          setTimeout(function(){ pingCounter.setVisible(false); }, 1050);
        }
      });
    }
  }

  //physics collision between babaies
  collisionBetween(toddler) {
    let l = toddlerList.length;
    if (l != 0) {
      this.physics.add.collider(toddler, toddlerList[l - 1]);
    }
    if (l != 1) {
      this.physics.add.collider(toddler, toddlerList[l - 2]);
    }
  }
}

export default gameScene;
