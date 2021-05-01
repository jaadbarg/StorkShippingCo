import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";
import baby1 from "../assets/babies/baby1.png";
import baby4 from "../assets/babies/baby4.png";

class InstructScene extends Phaser.Scene {
  constructor() {
    super({ key: "instructScene" });
    console.log("instructScene");
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
    this.load.image("baby1", baby1);
    this.load.image("baby4", baby4);
  }

  create() {
    const fontFam = {
      fontSize: 20,
      color: "#000000",
    };

    const titleFontFam = {
      fontSize: 40,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    //setting up instructions
    const instructCopy1 = "Tap on Hazards as they appear on the track. When you tap a Hazard, you'll have to solve a Challenge to deactivate the Hazard and make the home safer. The babies won't be able to move past a Hazard until you deactivate it. Get as many babies to the Safe Zone at the end of the track and deactivate as many hazards as possible!";

    //setting background
    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    this.createBackground();

    //title
    let title = this.add.text(55, 70, "Instructions", { ...titleFontFam });

    //instructions
    let copy1 = this.add.text(60, 200, `${instructCopy1}`, { ...fontFam, wordWrap: { width: 680 } });

    let backBtn = this.add.text(620, 450, "Back", { ...titleFontFam });

    //button resources
    backBtn.setInteractive({ useHandCursor: true });

    backBtn.on("pointerdown", () => this.goBack());
  }

  createBackground() {
    this.add.rectangle(400, 270, 700, 200, 0xFFFFFF)
    this.add.image(150, 470, "baby1").setScale(0.07);
    this.add.image(350, 470, "baby4").setScale(0.07);
  }

  // button method
  goBack() {
    this.scene.switch("titleScene");
  }
}

export default InstructScene;
