import Phaser from "phaser";
import blueBackground from "../assets/blueBackground.png";
import baby1 from "../assets/babies/baby1.png";
import baby2 from "../assets/babies/baby2.png";
import baby3 from "../assets/babies/baby3.png";
import baby4 from "../assets/babies/baby4.png";
import baby5 from "../assets/babies/baby5.png";

let optionsModal;
let optionsMenu;
let resumeOption;
let menuOption;

let fontFam2 = {
    fontSize: 45,
    color: "#000000",
    fontStyle: "bold"
  };
  let fontFam3 = {
    fontSize: 30,
    color: "#000000",
    fontStyle: "bold",
    backgroundColor: "#cccc00"
  };

class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: "pauseScene" });
        console.log("pauseScene");
    }

    preload() {
        this.load.image("pauseBackground", blueBackground);
        this.load.image("baby1", baby1);
        this.load.image("baby2", baby2);
        this.load.image("baby3", baby3);
        this.load.image("baby4", baby4);
        this.load.image("baby5", baby5);
    }

    create() {

        //create scene background
        this.background = this.add.image(400, 300, "pauseBackground");
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;

        //add images
        this.add.image(140, 470, "baby1").setScale(0.07);
        this.add.image(260, 470, "baby2").setScale(0.07);
        this.add.image(380, 470, "baby3").setScale(0.07);
        this.add.image(500, 470, "baby4").setScale(0.07);
        this.add.image(620, 470, "baby5").setScale(0.07);

        //create pause menu options
        this.createOptions();
    }

    //pause menu
    createOptions() {
        optionsModal = this.add.rectangle(400, 230, 500, 320, 0xffffff);
        optionsModal.setStrokeStyle(10, 0xcccc00);

        optionsMenu = this.add.text(256, 130, "Game Paused!", fontFam2)

        //resuming the game
        resumeOption = this.add.text(272, 210, "Return to game", fontFam3);
        resumeOption.setInteractive({ useHandCursor: true });
        resumeOption.on("pointerdown", () => this.resumeGame());

        //returning to the menu
        menuOption = this.add.text(272, 280, "Return to menu", fontFam3)
        menuOption.setInteractive({ useHandCursor: true });
        menuOption.on("pointerdown", () => this.returnToMenu());

    }

    //returns to main menu
    returnToMenu() {
        this.scene.stop("gameScene");
        this.scene.switch("titleScene")
    }

    //returns to gameScene
    resumeGame() {
        this.scene.sleep("pauseScene")
        this.scene.switch("gameScene")
    }

    update() {

    }
}

export default PauseScene;