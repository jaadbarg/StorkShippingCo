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
      fontSize: 24,
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

    let stairs2Btn = this.add.text(50, 200, "Gate the Stairs!", {...fontFam});

    let windows1Btn = this.add.text(50, 250, "Shut the Window!", {...fontFam})
    
    let windows2Btn = this.add.text(50, 300, "Clear the Windows!", {...fontFam})

    let baby1Btn = this.add.text(50, 350, "Place the highchairs!", {...fontFam})

    let furniture1Btn = this.add.text(50, 400, "Close the drawers!", {...fontFam})

    let furniture2Btn = this.add.text(380, 150, "Know your furnitures!", {...fontFam})

    let baby2Btn = this.add.text(380, 200, "Secure the Harness!", {...fontFam})

    stairs1Btn.setInteractive({ useHandCursor: true });
    stairs1Btn.on("pointerdown", () => this.scene.switch("stairs1Scene"));

    stairs2Btn.setInteractive({ useHandCursor: true });
    stairs2Btn.on("pointerdown", () => this.scene.switch("stairs2Scene"));

    windows1Btn.setInteractive({ useHandCursor: true });
    windows1Btn.on("pointerdown", () => this.scene.switch("windows1Scene"));

    windows2Btn.setInteractive({ useHandCursor: true });
    windows2Btn.on("pointerdown", () => this.scene.switch("windows2Scene"));

    baby1Btn.setInteractive({ useHandCursor: true });
    baby1Btn.on("pointerdown", () => this.scene.switch("baby1Scene"));

    baby2Btn.setInteractive({ useHandCursor: true });
    baby2Btn.on("pointerdown", () => this.scene.switch("baby2Scene"));

    furniture1Btn.setInteractive({ useHandCursor: true });
    furniture1Btn.on("pointerdown", () => this.scene.switch("furniture1Scene"));

    furniture2Btn.setInteractive({ useHandCursor: true });
    furniture2Btn.on("pointerdown", () => this.scene.switch("furniture2Scene"));

  }
}

export default MinigameScene;
