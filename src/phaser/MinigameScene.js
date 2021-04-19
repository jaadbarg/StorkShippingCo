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

    let windows1Btn = this.add.text(50, 200, "Shut the Window!", {...fontFam})
    
    let windows2Btn = this.add.text(50, 250, "Clear the Windows!", {...fontFam})

    let baby1Btn = this.add.text(50, 300, "Place the highchairs!", {...fontFam})

    let furniture1Btn = this.add.text(50, 350, "Close the drawers!", {...fontFam})

    stairs1Btn.setInteractive({ useHandCursor: true });
    stairs1Btn.on("pointerdown", () => this.scene.switch("stairs1Scene"));

    windows1Btn.setInteractive({ useHandCursor: true });
    windows1Btn.on("pointerdown", () => this.scene.switch("windows1Scene"));

    windows2Btn.setInteractive({ useHandCursor: true });
    windows2Btn.on("pointerdown", () => this.scene.switch("windows2Scene"));

    baby1Btn.setInteractive({ useHandCursor: true });
    baby1Btn.on("pointerdown", () => this.scene.switch("baby1Scene"));

    furniture1Btn.setInteractive({ useHandCursor: true });
    furniture1Btn.on("pointerdown", () => this.scene.switch("furniture1Scene"));
  }
}

export default MinigameScene;
