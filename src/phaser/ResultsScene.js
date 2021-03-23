import Phaser from "phaser";

class ResultsScene extends Phaser.Scene {
  constructor() {
    super({ key: "resultsScene" });
    console.log("resultsScene");
  }

  preload() {
    this.load.image("background", "../assets/menu.jpg");
  }

  create() {
    //setting copy for us
    const instructCopy1 = "You helped X babies reach the goal in Y minutes!";
    const instructCopy2 = "This earns you the rank of...";
    const instructCopy3 = "CHILDPROOFING CHAMPION! / SAFETY SAVANT!";
    const instructCopy4 = "We hope you've learned more about how to keep your little ones";
    const instructCopy5 = "safe around the home. To learn more about fall prevention,";
    const instructCopy6 = "take a look at the Resources tab or play another round!";
    const instructCopy7 = "Click below to return to the title screen.";

    //setting background
    let bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(400, 300);

    //title
    let title = this.add.text(100, 100, "Your Results!");

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

export default ResultsScene;