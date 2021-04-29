import Phaser from "phaser";
import stairs2 from "../../assets/minigames/stairs2/stairs2.jpg";
import gate from "../../assets/minigames/stairs2/gate.png";
import circle from "../../assets/minigames/stairs2/circle.png";
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


class stairs2Scene extends Phaser.Scene {
    constructor() {
        super("stairs2Scene");
        console.log("stairs2Scene");
    }

    preload() {
        this.load.image("stairs2", stairs2);
        this.load.image("gate", gate);
        this.load.image("circle", circle)
    }

    create() {

        counter = 0;

        // add window background
        this.add.image(400, 300, "stairs2").setScale(.8);

        // add unmoveable and moveable window
        var gate = this.add.image(650, 500, "gate").setScale(0.62,0.5);
        gate.setInteractive();
        this.input.setDraggable(gate);

        // add title
        instructionText = this.add.text(90, 50, "Gate the stairs!", { ...fontFam, wordWrap:{width:650} });

        // acceptable end state of window
        var zone = this.add.zone(310, 330, 300, 300).setRectangleDropZone(300, 300);

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

    createCircles() {
        instructionText.setText("Lock the gate!")

        var circle1 = this.add.image(125, 175, "circle").setScale(0.15).setInteractive();
        var circle2 = this.add.image(500, 175, "circle").setScale(0.15).setInteractive();
        var circle3 = this.add.image(125, 475, "circle").setScale(0.15).setInteractive();
        var circle4 = this.add.image(500, 475, "circle").setScale(0.15).setInteractive();
        
        circle1.on("pointerdown", function () {
            circle1.setVisible(false);
            counter++
        })
        circle2.on("pointerdown", function () {
            circle2.setVisible(false);
            counter++
        })
        circle3.on("pointerdown", function () {
            circle3.setVisible(false);
            counter++
        })
        circle4.on("pointerdown", function () {
            circle4.setVisible(false);
            counter++
        })
    }

    // activateLocks() {
    //     openLock1.setVisible(true);
    //     openLock2.setVisible(true);
    //     openLock1.setInteractive();
    //     instructionText.setText("Lock the gate!")
    //     openLock1.on("pointerdown", function () {
    //         openLock1.setVisible(false);
    //         closedLock1.setVisible(true)
    //         counter++
    //     })
    //     openLock2.setInteractive();
    //     openLock2.on("pointerdown", function () {
    //         openLock2.setVisible(false);
    //         closedLock2.setVisible(true)
    //         counter++
    //     })
    // }

    // increments counter, at 1 it ends games
    update() {
        if(counter == 1) {
            this.createCircles();
            counter++;
        }
        if (counter >= 6) {
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
        this.scene.stop('stairs2Scene')
        this.scene.switch("gameScene")
    }
}

export default stairs2Scene;