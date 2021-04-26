import Phaser from "phaser";
import bed from "../assets/minigames/bed1/bed.png"
import fence from "../assets/minigames/bed1/fence.png"

let counter;
let backButton;
let fontFam = {
    fontFamily: "Sans-serif",
    fontSize: 40,
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

class bed1Scene extends Phaser.Scene {
    constructor() {
        super("bed1Scene");
        console.log("bed1Scene");
    }

    preload() {
        this.load.image("bed", bed)
        this.load.image("fence1", fence)
    }

    create() {

        counter = 0;

        //add background
        this.add.rectangle(400, 300, 800, 600, 0x56A0D3)
        this.add.image(400, 300, "bed").setScale(1.8)

        //add minigame title text
        this.add.text(163, 50, "ATTACH THE BED FENCE!", { ...fontFam, wordWrap:{width:650} });

        //add bed fence
        let fence = this.add.image(400, 500, "fence1").setScale(0.83)
        fence.setInteractive();
        this.input.setDraggable(fence);

        //place drop zones
        var zone = this.add.zone(400, 220, 400, 150).setRectangleDropZone(400, 200);

        //moves dragged object to front
        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        //moves object
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        //when object dropped into dropzone, increment counter
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            counter++;
        });

        //when drag ends and object is not in the dropzone
        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });
    }

    //increments counter, at 1 it ends games
    update() {
        if (counter >= 1) {
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

    returnToMini() {
        //this.scene.restart("windows2Scene")
        this.scene.stop('bed1Scene')
        this.scene.switch("gameScene")
    }
}

export default bed1Scene;