import Phaser from "phaser";
import carSeat from "../../assets/minigames/baby2/carSeat.png"
import background from "../../assets/minigames/baby2/background.jpg"
import openBelt from "../../assets/minigames/baby2/openBelt.png"
import closedBelt from "../../assets/minigames/baby2/closedBelt.png"

let counter;
let fontFam = {
    fontFamily: "Sans-serif",
    fontSize: 35,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};
let fontFamBack = {
    fontSize: 30,
    color: "#000000",
    fontStyle: "bold",
    backgroundColor: "#FFFFFF",
};
let backBtn;
let titleText;
let openBelt1;
let openBelt2;
let openBelt3;
let openBelt4;
let openBelt5;
let closedBelt1;
let closedBelt2;
let closedBelt3;
let closedBelt4;
let closedBelt5;

class baby2Scene extends Phaser.Scene {
    constructor() {
        super("baby2Scene");
        console.log("baby2Scene");
    }

    preload() {
        this.load.image("carSeat", carSeat);
        this.load.image("background2", background);
        this.load.image("openBelt", openBelt)
        this.load.image("closedBelt", closedBelt)
    }

    create() {

        counter = 0;

        //add background
        this.add.rectangle(400, 300, 800, 600, 0x56A0D3)
        this.add.image(400, 300, "background2").setScale(1)

        //add seat
        this.add.image(430, 335, "carSeat").setScale(.5).setAngle(1);

        //add belt
        this.addBelt();

        //add minigame title text
        this.add.text(215, 50, "SECURE THE HARNESS!", { ...fontFam, wordWrap:{width:650} });
        
    }

    //adding each belt and making them interactive
    addBelt() {
        openBelt1 = this.add.image(335, 405, "openBelt").setScale(0.3).setAngle(2)
        openBelt2 = this.add.image(540, 415, "openBelt").setScale(0.3).setAngle(2)
        openBelt3 = this.add.image(430, 480, "openBelt").setScale(0.3).setAngle(92)
        openBelt4 = this.add.image(405, 290, "openBelt").setScale(0.3).setAngle(82)
        openBelt5 = this.add.image(495, 292, "openBelt").setScale(0.3).setAngle(102)

        closedBelt1 = this.add.image(335, 405, "closedBelt").setScale(0.3).setAngle(2)
        closedBelt2 = this.add.image(540, 415, "closedBelt").setScale(0.3).setAngle(2)
        closedBelt3 = this.add.image(430, 480, "closedBelt").setScale(0.3).setAngle(92)
        closedBelt4 = this.add.image(405, 290, "closedBelt").setScale(0.3).setAngle(82)
        closedBelt5 = this.add.image(495, 292, "closedBelt").setScale(0.3).setAngle(102)

        closedBelt1.setVisible(false);
        closedBelt2.setVisible(false);
        closedBelt3.setVisible(false);
        closedBelt4.setVisible(false);
        closedBelt5.setVisible(false);

        this.testBelt(openBelt1, closedBelt1);
        this.testBelt(openBelt2, closedBelt2);
        this.testBelt(openBelt3, closedBelt3);
        this.testBelt(openBelt4, closedBelt4);
        this.testBelt(openBelt5, closedBelt5);
    }

    //when belt is secured, counter++
    testBelt(open, closed) {
        open.setInteractive();
        open.on("pointerdown", function () {
            open.setVisible(false);
            closed.setVisible(true)
            counter++
        })
    }

    //increments counter, at 1 it ends games
    update() {
        if (counter >= 5) {
            counter = 0;
            
            let modal = this.add.rectangle(400, 300, 400, 220, 0xffffff);
            modal.setStrokeStyle(10, 0x00bb00);

            titleText = this.add.text(328, 213, "Good Job!", { ...fontFamBack });
            backBtn = this.add.text(282, 330, "", { ...fontFamBack });
            backBtn.setText("Return to game");
            backBtn.setInteractive({ useHandCursor: true });
            backBtn.on("pointerdown", () => this.returnToMini());
        }
    }

    returnToMini() {
        this.scene.stop("baby2Scene")
        this.scene.switch("gameScene")
    }
}

export default baby2Scene;