import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";

class ResourceScene extends Phaser.Scene {
  constructor() {
    super({ key: "resourceScene" });
    console.log("resourceScene");
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
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
    const resourceCopy1 = "The average home can present more falling ";
    const resourceCopy2 = "hazards to children than you'd think.";
    const resourceCopy3 = "Click these links to learn more about ";
    const resourceCopy4 = "removing Hazards from your own home: ";

    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let title = this.add.text(50, 100, "Resources", { ...titleFontFam });

    let copy1 = this.add.text(50, 180, `${resourceCopy1}`, { ...fontFam });
    let copy2 = this.add.text(50, 210, `${resourceCopy2}`, { ...fontFam });
    let copy3 = this.add.text(50, 270, `${resourceCopy3}`, { ...fontFam });
    let copy4 = this.add.text(50, 300, `${resourceCopy4}`, { ...fontFam });

    let resource1Btn = this.add.text(
      50,
      350,
      "North Carolina Child Care Health and Safety Resource Center",
      { ...linkFontFam }
    );

    let backBtn = this.add.text(50, 450, "Back", { ...titleFontFam });

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

  openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }
}

export default ResourceScene;
