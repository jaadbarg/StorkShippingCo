import Phaser from "phaser";
import background from "../assets/menu.jpg";

class ResourceScene extends Phaser.Scene {
  constructor() {
    super({ key: "resourceScene" });
    console.log("resourceScene");
  }

  preload() {
    this.load.image("background", background);
  }

  create() {
    const fontFam = {
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    const safetyUrl1 =
      "https://healthychildcare.unc.edu/cchc-competencies-health-and-safety-topics/environmental-health/";
    const resourceCopy1 = "The average home can present more falling";
    const resourceCopy2 = "hazards to children than you'd think.";
    const resourceCopy3 = "Click these links to learn more about ";
    const resourceCopy4 = "removing Hazards from your own home: ";

    let bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(500, 500);

    let title = this.add.text(100, 100, "Resources");

    let copy1 = this.add.text(100, 150, `${resourceCopy1}`);
    let copy2 = this.add.text(100, 180, `${resourceCopy2}`);
    let copy3 = this.add.text(100, 210, `${resourceCopy3}`);
    let copy4 = this.add.text(100, 240, `${resourceCopy4}`);

    let resource1Btn = this.add.text(
      100,
      350,
      "North Carolina Child Care Health and Safety Resource Center",
      { ...fontFam }
    );

    let backBtn = this.add.text(100, 450, "Back");

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
