import Phaser from "phaser";
import background from "../assets/minigames/windows2/background.png";
import chair from "../assets/minigames/windows2/chair.png";
import eventsCenter from "./EventsCenter"

let counter = 0;
let backButton;
let fontFam = {
    // fontFamily: "cursive",
    fontSize: 50,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};
let timePassed;
let spawnEvent;

class windows2Scene extends Phaser.Scene {
    constructor() {
        super("windows2Scene");
        console.log("windows2Scene");
    }

    preload() {
        this.load.image("background", background);
        this.load.image("chair", chair);
    }

    create() {

        this.trackTime();

        timePassed = 0;

        //add background
        this.add.image(400, 300, "background");

        //add minigame title text
        this.add.text(250, 50, "SEPARATE THE FURNITURE FROM THE WINDOW!", { ...fontFam });

        //place chair
        var chair = this.add.image(100, 175, "chair").setScale(0.5);
        chair.setInteractive();
        this.input.setDraggable(chair);

        //place drop zone
        var zone = this.add.zone(700, 500, 100, 100).setRectangleDropZone(150, 150);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        //moves dragged object to front
        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
        }, this);

        //moves object
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        //when dragged object touches dropzones
        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when dragged object leaves dropzone
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when object dropped into dropzone, increment counter
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            counter++;
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when drag ends and object is not in the dropzone
        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });
    }

    //increments counter, at 1 it ends games
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

    trackTime() {
        spawnEvent = this.time.addEvent({
            delay: 1000,
            callback: this.increaseTime,
            callbackScope: this,
            loop: true,
        });
    }

    increaseTime() {
        timePassed++;
    }

    returnToMini() {
        eventsCenter.emit('timePassedMini', timePassed)
        console.log('TIMETIME === ' + timePassed)
        //this.scene.restart("windows2Scene")
        this.scene.switch("gameScene")
    }
}

export default windows2Scene;