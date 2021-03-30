import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";

class InstructScene extends Phaser.Scene {
  constructor() {
    super({ key: "instructScene" });
    console.log("instructScene");
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
  }

  create() {
    const fontFam = {
      //fontFamily: 'cursive',
      fontSize: 20,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    const titleFontFam = {
      //fontFamily: 'cursive',
      fontSize: 40,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    //setting copy for us
    const instructCopy1 = "Tap on Hazards as they appear on the track.";
    const instructCopy2 = "When you tap a Hazard, you'll have to";
    const instructCopy3 = "solve a Challenge to deactivate the Hazard and make";
    const instructCopy4 =
      "the home safer. The babies won't be able to move past a Hazard";
    const instructCopy5 = "until you deactivate it. ";
    const instructCopy6 =
      "Get as many babies to the Safe Zone at the end of the track";
    const instructCopy7 = "by deactivating Hazards as quickly as possible!";

    //setting background
    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    //title
    let title = this.add.text(50, 50, "Instructions", { ...titleFontFam });

    //instructions
    let copy1 = this.add.text(50, 150, `${instructCopy1}`, { ...fontFam });
    let copy2 = this.add.text(50, 180, `${instructCopy2}`, { ...fontFam });
    let copy3 = this.add.text(50, 210, `${instructCopy3}`, { ...fontFam });
    let copy4 = this.add.text(50, 240, `${instructCopy4}`, { ...fontFam });
    let copy5 = this.add.text(50, 270, `${instructCopy5}`, { ...fontFam });
    let copy6 = this.add.text(50, 350, `${instructCopy6}`, { ...fontFam });
    let copy7 = this.add.text(50, 380, `${instructCopy7}`, { ...fontFam });

    let backBtn = this.add.text(50, 450, "Back", { ...titleFontFam });

    //button resources
    backBtn.setInteractive({ useHandCursor: true });

    backBtn.on("pointerdown", () => this.goBack());
  }

  // button method
  goBack() {
    this.scene.switch("titleScene");
  }
}

export default InstructScene;
