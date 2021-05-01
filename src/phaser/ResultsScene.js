import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";
import baby4 from "../assets/babies/baby4.png";
import baby1 from "../assets/babies/baby1.png";

class ResultsScene extends Phaser.Scene {
  constructor() {
    super({ key: "resultsScene" });
    console.log("resultsScene");
  }

  init(data) {
    this.totalScore = data.score[0];
    this.totalHazard = data.score[1];
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
    this.load.image("baby4", baby4);
    this.load.image("baby1", baby1);
  }

  create() {
    const fontFam = {
      fontSize: 20,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    const titleFontFam = {
      fontSize: 40,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    const rankFontFam = {
      fontSize: 33,
      color: "#Ceae2f",
      backgroundColor: "#FFFFFF",
    };

    let rankTitle = this.getTitle(this.totalScore);

    //displays results with hazards and babies cleared
    const instructCopy1 =
      "You helped " +
      (this.totalScore / 200) +
      " babies reach the goal and cleared " + this.totalHazard +" hazards in 5 minutes! This earns you the rank of...";
    const instructCopy4 =
      "We hope you've learned more about how to keep your little ones safe around the home. To learn more about fall prevention, take a look at the Resources tab or play another round!";
    const instructCopy7 = "Click below to return to the title screen.";

    //setting background
    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
    this.createBackground();

    //title
    let title = this.add.text(100, 70, "Your Results!", { ...titleFontFam });

    //instructions
    let copy1 = this.add.text(100, 150, `${instructCopy1}`, { ...fontFam, wordWrap:{width:600} });
    let copy3 = this.add.text(215, 240, `${rankTitle}`, { ...rankFontFam });
    let copy4 = this.add.text(100, 305, `${instructCopy4}`, { ...fontFam, wordWrap:{width:600} });
    let copy7 = this.add.text(100, 400, `${instructCopy7}`, { ...fontFam, wordWrap:{width:600} });

    //back button returns to title scene
    let backBtn = this.add.text(570, 480, "Back", { ...titleFontFam });
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.scene.switch("titleScene"));
  }

  //converts score into title
  getTitle(score) {
    score += this.totalHazard * 75
    if (score < 800) {
      return "Novice Inspector";
    }
    if (score < 1600) {
      return "Adept Inspector";
    }
    if (score < 2400) {
      return "Super Inspector";
    }
    if (score < 3200) {
      return "Expert Inspector";
    }
    if (score < 4000) {
      return "Legendary Inspector";
    }
    return "Grandmaster Inspector";
  }

  //generates background
  createBackground() {
    this.add.rectangle(400, 310, 620, 500, 0xFFFFFF)
    this.add.image(170, 480, "baby1").setScale(0.07);
    this.add.image(370, 480, "baby4").setScale(0.07);
  }
}

export default ResultsScene;
