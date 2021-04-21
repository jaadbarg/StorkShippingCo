import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";
import baby7 from "../assets/babies/baby7.png";
import baby5 from "../assets/babies/baby5.png";

class ResultsScene extends Phaser.Scene {
  constructor() {
    super({ key: "resultsScene" });
    console.log("resultsScene");
  }

  init(data) {
    this.totalScore = data.score;
  }

  preload() {
    this.load.image("blueBackground", blueBackground);
    this.load.image("baby7", baby7);
    this.load.image("baby5", baby5);
  }

  create() {
    const fontFam = {
      // fontFamily: "cursive",
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

    const rankFontFam = {
      fontSize: 33,
      color: "#Ceae2f",
      backgroundColor: "#FFFFFF",
    };

    let rankTitle = this.getTitle(this.totalScore);

    //setting copy for us
    const instructCopy1 =
      "You helped " +
      this.totalScore / 200 +
      " babies reach the goal in 5 minutes! This earns you the rank of...";
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

    let backBtn = this.add.text(570, 480, "Back", { ...titleFontFam });

    //button resources
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.goBack());
  }

  // button method
  goBack() {
    this.scene.switch("titleScene");
  }

  getTitle(score) {
    if (score < 800) {
      return "Novice Inspector";
      //brown
    }
    if (score < 1600) {
      return "Adept Inspector";
    }
    if (score < 2400) {
      return "Magnus Inspector";
    }
    if (score < 3200) {
      return "Grandmaster Inspector";
    }
    if (score < 4000) {
      return "Legendary Inspector";
    }
    return "Visionary Inspector";
  }

  createBackground() {
    this.add.rectangle(400, 310, 620, 500, 0xFFFFFF)
    this.add.image(170, 480, "baby4").setScale(0.15);
    this.add.image(370, 480, "baby5").setScale(0.15);
  }
}

export default ResultsScene;
