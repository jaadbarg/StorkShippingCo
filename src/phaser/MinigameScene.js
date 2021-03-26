import Phaser from "phaser";
import logo from "../assets/logo.png";

class MinigameScene extends Phaser.Scene {
  constructor() {
    super({ key: "minigameScene" });
    console.log("minigameScene");
  }

  preload() {
    this.load.image("logo", logo);
  }

  create() {
    //font style object
    const fontFam = {
      fontSize: 30,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    };

    this.add.image(400, 300, "logo");

    let backBtn = this.add.text(25, 550, "<-- Back", { ...fontFam });
    backBtn.setInteractive({ useHandCursor: true });
    backBtn.on("pointerdown", () => this.scene.switch("titleScene"));

    let stairs1Btn = this.add.text(50, 150, "Clear the Stairs!", { ...fontFam });
    stairs1Btn.setInteractive({ useHandCursor: true });
    stairs1Btn.on("pointerdown", () => this.scene.switch("stairs1Scene"));
  }
}

export default MinigameScene;
