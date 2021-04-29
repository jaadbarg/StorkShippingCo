import Phaser from "phaser";
import background from "../assets/logo.png";
import muteSymbol from "../assets/muteSymbol.png"
import smoov from "../assets/smoov.mp3";

let muteBar;

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
    console.log("titleScene");
  }

  preload() {
    this.load.image("background", background);
    this.load.image('mute', muteSymbol);
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
    themusic.setVolume(0.1);
    themusic.play();
    this.add.image(400, 300, "background");

    let startBtn = this.add.text(350, 500, "Start", { ...fontFam });
    let instructBtn = this.add.text(180, 550, "Instructions", { ...fontFam });
    let resourceBtn = this.add.text(420, 550, "Resources", { ...fontFam });  

    let muteBtn = this.add.image(720, 80, "mute").setScale(0.07);
    muteBar = this.add.rectangle(720, 80, 100, 5, 0x000000).setAngle(45);
    muteBar.setVisible(false);
    muteBtn.setInteractive({ useHandCursor: true });

    muteBtn.on("pointerdown", () => this.toggleMute());

    startBtn.setInteractive({ useHandCursor: true });
    startBtn.on("pointerdown", () => this.startGame());

    instructBtn.setInteractive({ useHandCursor: true });
    instructBtn.on("pointerdown", () => this.startInstruct());

    resourceBtn.setInteractive({ useHandCursor: true });
    resourceBtn.on("pointerdown", () => this.startResource());
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

  toggleMute() {
    if (!this.game.sound.mute) {
      this.game.sound.mute = true;
      muteBar.setVisible(true);
    } else {
      this.game.sound.mute = false;
      muteBar.setVisible(false);
    }
  }

  // delete this later
  startResults() {
    this.scene.switch("resultsScene");
  }
}

export default TitleScene;
