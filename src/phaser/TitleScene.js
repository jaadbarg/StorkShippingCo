import Phaser from "phaser";
import background from "../assets/houseFake.jpg";
// import smoov from "../assets/smoov.mp3";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
    console.log("titleScene");
  }

  preload() {
    this.load.image("background", background);
    // this.load.audio("music", smoov);
  }

  create() {
    //font style object
    const fontFam = {
      fontSize: 30,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    this.add.image(400, 300, "background");
    // let themusic = this.sound.add("music", { loop: true });
    // themusic.play();

    let title = this.add.text(100, 100, "Stork Shipping Co.", { ...fontFam });
    let subtitle = this.add.text(100, 150, "9 month shipping, guaranteed!", {
      ...fontFam,
    });

    let startBtn = this.add.text(100, 300, "Start", { ...fontFam });
    let instructBtn = this.add.text(100, 350, "Instructions", { ...fontFam });
    let resourceBtn = this.add.text(100, 400, "Resources", { ...fontFam });

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
}

export default TitleScene;
