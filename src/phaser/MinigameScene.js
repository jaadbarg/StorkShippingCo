import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";

class MinigameScene extends Phaser.Scene {
  constructor() {
    super({ key: "minigameScene" });
    console.log("minigameScene");
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
  }

  create() {
    //font style object
    const fontFam = {
      // fontFamily: "cursive",
      fontSize: 30,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    const titleFontFam = {
      //fontFamily: 'cursive',
      fontSize: 40,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    // this.add.image(400, 300, "logo");
    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let backBtn = this.add.text(50, 450, "Back", { ...titleFontFam });
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.scene.switch("titleScene"));

    let stairs1Btn = this.add.text(50, 150, "Clear the Stairs!", {...fontFam});

    let windows1Btn = this.add.text(50, 250, "Shut the Window!", {...fontFam})
    
    let windows2Btn = this.add.text(50, 350, "Clear the Windows!", {...fontFam})

    stairs1Btn.setInteractive({ useHandCursor: true });
    stairs1Btn.on("pointerdown", () => this.scene.switch("stairs1Scene"));

    windows1Btn.setInteractive({ useHandCursor: true });
    windows1Btn.on("pointerdown", () => this.scene.switch("windows1Scene"));

    windows2Btn.setInteractive({ useHandCursor: true });
    windows2Btn.on("pointerdown", () => this.scene.switch("windows2Scene"));
  }
}

export default MinigameScene;
