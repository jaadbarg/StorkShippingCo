import Phaser from "phaser";
import tiledfloor from "../../assets/minigames/water1/tiledfloor.jpg";
import toilet from "../../assets/minigames/water1/toilet.png";
import toiletlock from "../../assets/minigames/water1/toiletlock.png";
import eventsCenter from "../EventsCenter"

let counter;
let backButton;
let fontFam = {
    fontSize: 45,
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
let spawnEvent;
let instructionText;
let backBtn;
let titleText;


class water1Scene extends Phaser.Scene {
    constructor() {
        super("water1Scene");
        console.log("water1Scene");
    }

    preload() {
        this.load.image("tiledfloor", tiledfloor);
        this.load.image("toilet", toilet);
        this.load.image("toiletlock", toiletlock)
    }

    create() {

        counter = 0;

        // add tiled floor background and toilet
        this.add.image(400, 300, "tiledfloor").setScale(.6);
        this.add.image(400, 300, "toilet")

        // add draggable toilet lock
        var toiletlock = this.add.image(650, 500, "toiletlock").setScale(0.8);
        toiletlock.setInteractive();
        this.input.setDraggable(toiletlock);

        // add title
        instructionText = this.add.text(90, 50, "Attach the Toilet Lock!", { ...fontFam, wordWrap:{width:650} });

        // acceptable end state of lock
        var zone = this.add.zone(410, 290, 300, 300).setRectangleDropZone(300, 300);

        //moves dragged object to front
        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        // moves object
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // when dragged object touches dropzones
        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
            //graphics.clear();
            //graphics.lineStyle(2, 0x00ffff);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        // when dragged object leaves dropzone
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            //graphics.clear();
            //graphics.lineStyle(2, 0xffff00);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        // when object dropped into dropzone, increment counter
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;

            counter = 1;
            //graphics.clear();
            //graphics.lineStyle(2, 0xffff00);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        // when drag ends and object is not in the dropzone
        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
            //graphics.clear();
            //graphics.lineStyle(2, 0xffff00);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });
    }

    secureLock() {
        instructionText.setText("Press the lock repeatedly to secure it!")

        var lockTappable = this.add.image(410, 290, "toiletlock").setScale(0.8).setInteractive();
        
        lockTappable.on("pointerdown", function () {
            counter++
        })
    }

    // increments counter, at 8 it ends games
    update() {
        if(counter == 1) {
            this.secureLock();
            counter++;
        }
        if (counter >= 8) {
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
        //this.scene.restart("windows1Scene")
        this.scene.stop('water1Scene')
        this.scene.switch("gameScene")
    }
}

export default water1Scene;