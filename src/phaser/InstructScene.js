import Phaser from "phaser";

class InstructScene extends Phaser.Scene {
  constructor() {
    super({ key: "instructScene" });
    console.log("instructScene");
  }

  preload() {
    this.load.image("background", "../assets/menu.jpg");
  }

  create() {
    //setting copy for us
    const instructCopy1 = "Tap on Hazards as they appear on the track.";
    const instructCopy2 = "When you tap a Hazard, you'll have to";
    const instructCopy3 =
      "solve a Challenge to deactivate the Hazard and make the home safer.";
    const instructCopy4 = "The babies won't be able to move past a Hazard";
    const instructCopy5 = "until you deactivate it. Get as many babies to ";
    const instructCopy6 =
      "the Safe Zone at the end of the track by deactivating Hazards";
    const instructCopy7 = "as quickly as possible!";

    //setting background
    let bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(400, 300);

    //title
    let title = this.add.text(100, 100, "Instructions");

    //instructions
    let copy1 = this.add.text(100, 150, `${instructCopy1}`);
    let copy2 = this.add.text(100, 180, `${instructCopy2}`);
    let copy3 = this.add.text(100, 210, `${instructCopy3}`);
    let copy4 = this.add.text(100, 240, `${instructCopy4}`);
    let copy5 = this.add.text(100, 270, `${instructCopy5}`);
    let copy6 = this.add.text(100, 300, `${instructCopy6}`);
    let copy7 = this.add.text(100, 330, `${instructCopy7}`);

    let backBtn = this.add.text(100, 450, "Back");

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
