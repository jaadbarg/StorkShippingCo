import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";

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
  }

  create() {
    const fontFam = {
      // fontFamily: "cursive",
      // fontSize: 30,
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
      fontSize: 30,
      color: "#Ceae2f",
      backgroundColor: "#FFFFFF",
    };

    let rankTitle = this.getTitle(this.totalScore);

    //setting copy for us
    const instructCopy1 =
      "You helped " +
      this.totalScore / 200 +
      " babies reach the goal in 5 minutes!";
    const instructCopy2 = "This earns you the rank of...";
    const instructCopy4 =
      "We hope you've learned more about how to keep your little ones";
    const instructCopy5 =
      "safe around the home. To learn more about fall prevention,";
    const instructCopy6 =
      "take a look at the Resources tab or play another round!";
    const instructCopy7 = "Click below to return to the title screen.";

    //setting background
    this.background = this.add.image(400, 300, "blueBackground");
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    //title
    let title = this.add.text(100, 70, "Your Results!", { ...titleFontFam });

    //instructions
    let copy1 = this.add.text(100, 150, `${instructCopy1}`, { ...fontFam });
    let copy2 = this.add.text(100, 175, `${instructCopy2}`, { ...fontFam });
    let copy3 = this.add.text(100, 240, `${rankTitle}`, { ...rankFontFam });
    let copy4 = this.add.text(100, 305, `${instructCopy4}`, { ...fontFam });
    let copy5 = this.add.text(100, 330, `${instructCopy5}`, { ...fontFam });
    let copy6 = this.add.text(100, 360, `${instructCopy6}`, { ...fontFam });
    let copy7 = this.add.text(100, 420, `${instructCopy7}`, { ...fontFam });

    let backBtn = this.add.text(100, 480, "Back", { ...titleFontFam });

    //button resources
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.goBack());
  }

  // button method
  goBack() {
    this.scene.switch("titleScene");
  }

  getTitle(score) {
    if (score < 1000) {
      return "Novice Inspector";
      //brown
    }
    if (score < 2000) {
      return "Adept Inspector";
    }
    if (score < 3000) {
      return "Magnus Inspector";
    }
    if (score < 4000) {
      return "Grandmaster Inspector";
    }
    if (score < 5000) {
      return "Legendary Inspector";
    }
    return "Visionary Inspector";
  }
}

export default ResultsScene;
