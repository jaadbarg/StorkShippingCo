import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";
import baby4 from "../assets/babies/baby4.png";
import baby5 from "../assets/babies/baby5.png";

class ResourceScene extends Phaser.Scene {
  constructor() {
    super({ key: "resourceScene" });
    console.log("resourceScene");
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
    this.load.image("baby4", baby4);
    this.load.image("baby5", baby5);
  }

  create() {
    const fontFam = {
      // fontFamily: 'cursive',
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

    const linkFontFam = {
      fontSize: 20,
      color: "#6e82d4",
      backgroundColor: "#FFFFFF",
    };

    const safetyUrl1 =
      "https://healthychildcare.unc.edu/cchc-competencies-health-and-safety-topics/environmental-health/";
    const resourceCopy1 = "The average home can present more falling hazards to children than you'd think. Click these links to learn more about removing Hazards from your own home: ";

    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    this.createBackground();

    let title = this.add.text(50, 100, "Resources", { ...titleFontFam });

    let copy1 = this.add.text(70, 210, `${resourceCopy1}`, { ...fontFam, wordWrap:{width:700} });

    let resource1Btn = this.add.text(
      120,
      290,
      "North Carolina Child Care Health and Safety Resource Center",
      { ...linkFontFam, wordWrap:{width:600} }
    );

    let backBtn = this.add.text(590, 450, "Back", { ...titleFontFam });

    // backbtn resources
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.goBack());

    resource1Btn.setInteractive({ useHandCursor: true });
    resource1Btn.on("pointerdown", () => this.openInNewTab(safetyUrl1));
  }
  // button method
  goBack() {
    this.scene.switch("titleScene");
  }

  createBackground() {
    this.add.rectangle(400, 270, 700, 200, 0xFFFFFF)
    this.add.image(150, 470, "baby4").setScale(0.36);
    this.add.image(350, 470, "baby5").setScale(0.36);
  }

  openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }
}

export default ResourceScene;
