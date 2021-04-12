import Phaser from "phaser";
import outside from "../assets/minigames/windows1/background.png";
import window from "../assets/minigames/windows1/window.png";
import eventsCenter from "./EventsCenter"

let counter = 0;
let backButton;
let fontFam = {
    // fontFamily: "cursive",
    fontSize: 45,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};
let spawnEvent;

class windows1Scene extends Phaser.Scene {
    constructor() {
        super("windows1Scene");
        console.log("windows1Scene");
    }

    preload() {
        this.load.image("outside", outside);
        this.load.image("window", window);
    }

    create() {

        // add window background
        this.add.image(400, 300, "outside").setScale(1.5);

        // add unmoveable and moveable window
        var windowNotDraggable = this.add.image(400, 100, "window").setScale(1.25);
        var windowDraggable = this.add.image(400, 100, "window").setScale(1.25);
        windowDraggable.setInteractive();
        this.input.setDraggable(windowDraggable);

        // add title
        this.add.text(90, 50, "SHUT THE WINDOW!", { ...fontFam, wordWrap:{width:650} });

        // acceptable end state of window
        var zone = this.add.zone(400, 600, 500, 200).setRectangleDropZone(500, 200);

        /* from windows2scene 
        Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        */

        //moves dragged object to front
        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        // moves object
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
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
            counter++;
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

    // increments counter, at 1 it ends games
    update() {
        if (counter >= 1) {
            counter = 0;
            backButton = this.add.text(250, 150, "Return to game", { ...fontFam })
            backButton.setInteractive();
            let homeBtn = this.add.text(25, 550, "<-- Back");
            homeBtn.setInteractive({ useHandCursor: true });
            homeBtn.on("pointerdown", () => this.scene.start("minigameScene"));
            backButton.on('pointerdown', () =>
                this.returnToMini());
        }
    }

    returnToMini() {
        //this.scene.restart("windows1Scene")
        this.scene.stop('windows1Scene')
        this.scene.switch("gameScene")
    }
}

export default windows1Scene;