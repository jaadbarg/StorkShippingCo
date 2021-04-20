import Phaser from "phaser";
import dresser from "../assets/minigames/furniture1/dresser.png";
import drawer from "../assets/minigames/furniture1/drawer.png";

let counter;
let backButton;
let fontFam = {
    fontFamily: "Sans-serif",
    fontSize: 50,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};
const fontFamBack = {
    fontSize: 30,
    fontFamily: "Sans-serif",
    color: "#000000",
    fontStyle: "bold",
    backgroundColor: "#FFFFFF",
};

let backBtn;
let titleText;

class furniture1Scene extends Phaser.Scene {
    constructor() {
        super("furniture1Scene");
        console.log("furniture1Scene");
    }

    preload() {
        this.load.image("dresser", dresser);
        this.load.image("drawer", drawer);
    }

    create() {

        counter = 0;

        //add background and dresser
        this.add.image(400, 300, "dresser").setScale(0.43);

        //add minigame title text
        this.add.text(125, 75, "CLOSE THE DRAWERS!", { ...fontFam });

        //place all open drawers
        var drawer1 = this.add.image(245, 300, "drawer").setScale(0.45);
        drawer1.setInteractive();
        drawer1.on("pointerdown", function () {
            drawer1.setVisible(false);
            counter++;
        });

        var drawer2 = this.add.image(600, 400, "drawer").setScale(0.45);
        drawer2.setInteractive();
        drawer2.on("pointerdown", function () {
            drawer2.setVisible(false);
            counter++;
        });

        var drawer3 = this.add.image(245, 505, "drawer").setScale(0.45);
        drawer3.setInteractive();
        drawer3.on("pointerdown", function () {
            drawer3.setVisible(false);
            counter++;
        });
    }

    //increments counter, at 3 it ends games
    update() {
        if (counter >= 3) {
            counter = 0;

            let modal = this.add.rectangle(400, 300, 400, 220, 0xffffff);
            modal.setStrokeStyle(10, 0x00bb00);

            titleText = this.add.text(328, 213, "Good Job!", { ...fontFamBack });
            backBtn = this.add.text(282, 330, "", { ...fontFamBack });
            backBtn.setText("Return to game");
            backBtn.setInteractive({ useHandCursor: true });
            backBtn.on("pointerdown", () => this.returnToMini());

            let homeBtn = this.add.text(25, 550, "<-- Back");
            homeBtn.setInteractive({ useHandCursor: true });
            homeBtn.on("pointerdown", () => this.scene.start("minigameScene"));
        }
    }

    closeDrawer (drawer) {
        drawer.setVisible(false);
        counter++;
    }

    returnToMini() {
        this.scene.stop('furniture1Scene');
        this.scene.run("gameScene");
    }
}

export default furniture1Scene;

