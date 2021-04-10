import Phaser from "phaser";
import stairs from "../assets/minigames/stairs1/stairs.png";
import box from "../assets/minigames/stairs1/box.png";
import blocks from "../assets/minigames/stairs1/blocks.png";

let counter = 0;
let backButton;
let fontFam = {
    // fontFamily: "cursive",
    fontSize: 50,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};
let spawnEvent;

class stairs1Scene extends Phaser.Scene {
    constructor() {
        super("stairs1Scene");
        console.log("stairs1Scene");
    }

    preload() {
        this.load.image("stairs", stairs);
        this.load.image("box", box);
        this.load.image("blocks", blocks);
    }

    create() {

        //add background
        this.add.image(400, 300, "stairs");

        //place collection box image
        this.add.image(700, 500, "box").setScale(0.12);

        //add minigame title text
        this.add.text(250, 50, "CLEAR THE STAIRS!", { ...fontFam });

        //place all 3 clutter blocks
        var blocks1 = this.add.image(100, 175, "blocks").setScale(0.1);
        blocks1.setInteractive();
        this.input.setDraggable(blocks1);

        var blocks2 = this.add.image(250, 515, "blocks").setScale(0.1);
        blocks2.setInteractive();
        this.input.setDraggable(blocks2);

        var blocks3 = this.add.image(450, 300, "blocks").setScale(0.1);
        blocks3.setInteractive();
        this.input.setDraggable(blocks3);

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
            gameObject.destroy();
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

    //increments counter, at 3 it ends games
    update() {
        if (counter >= 3) {
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
        this.scene.stop('stairs1Scene')
        this.scene.run("gameScene")
    }
}

export default stairs1Scene;