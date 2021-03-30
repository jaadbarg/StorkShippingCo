import Phaser from "phaser";
import background from "../assets/logo.png";
import smoov from "../assets/smoov.mp3";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
    console.log("titleScene");
  }

  preload() {
    this.load.image("background", background);
    this.load.audio("smoov", smoov);
  }

  create() {
    //font style object
    const fontFam = {
      //fontFamily: 'cursive',
      fontSize: 30,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    let themusic = this.sound.add("smoov", { loop: true });
    themusic.play();
    this.add.image(400, 300, "background");

    let startBtn = this.add.text(350, 500, "Start", { ...fontFam });
    let instructBtn = this.add.text(50, 550, "Instructions", { ...fontFam });
    let resourceBtn = this.add.text(550, 550, "Resources", { ...fontFam });
    let minigameBtn = this.add.text(317, 550, "Minigames", {...fontFam})


    // let muteBtn = this.add.text(700, 100, "Mute", { ...fontFam });
    // muteBtn.setInteractive({ useHandCursor: true });
    // muteBtn.on(
    //   "pointerdown",
    //   () => console.log(themusic.play()),
    //   themusic.play ? themusic.pause() : themusic.play()
    // );

    startBtn.setInteractive({ useHandCursor: true });
    startBtn.on("pointerdown", () => this.startGame());

    instructBtn.setInteractive({ useHandCursor: true });
    instructBtn.on("pointerdown", () => this.startInstruct());

    resourceBtn.setInteractive({ useHandCursor: true });
    resourceBtn.on("pointerdown", () => this.startResource());

    minigameBtn.setInteractive({ useHandCursor: true });
    minigameBtn.on("pointerdown", () => this.startMinigame());
  }

  startGame() {
    this.scene.switch("gameScene");
  }
  startInstruct() {
    this.scene.switch("instructScene");
  }
  startResource() {
    this.scene.switch("resourceScene");
  }
  startMinigame() {
    this.scene.switch("minigameScene");
  }

  // delete this later
  startResults() {this.scene.switch("resultsScene")}
}

export default TitleScene;
