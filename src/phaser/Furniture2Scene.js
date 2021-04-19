import Phaser from "phaser";
import good_chair from "../assets/minigames/furniture2/good_chair.png";
import wobbly_chair from "../assets/minigames/furniture2/wobbly_chair.png";
import tall_chair from "../assets/minigames/furniture2/tall_chair.png"
import eventsCenter from "./EventsCenter"

let counter;
let backButton;
let fontFam = {
    // fontFamily: "cursive",
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
let backBtn;
let titleText;

class furniture2Scene extends Phaser.Scene {
    constructor() {
        super("furniture2Scene");
        console.log("furniture2Scene");
    }

    preload() {
        this.load.image("good_chair", good_chair);
        this.load.image("wobbly_chair", wobbly_chair);
        this.load.image("tall_chair", tall_chair);
    }

    create() {

        counter = 0;

        //add background
        //this.add.image(400, 300, "room").setScale(0.55);

        //add minigame title text
        this.add.text(90, 50, "BUY THE SAFEST CHAIR!", { ...fontFam, wordWrap:{width:650} });

        //shuffle chairs for replayability
        let chairs = ["good_chair", "wobbly_chair", "tall_chair"];
        chairs = shuffleArray(chairs);

        //place chairs on screen
        for (i = 0; i < chairs.length; i++) {
            if(chairs[i] == "good_chair"){
                var good_chair = this.add.image((i*200)+200, 400, chairs[i]).setScale(0.5);
                good_chair.setInteractive();
                this.input.setDraggable(good_chair);
            }
            else if(chairs[i] == "wobbly_chair"){
                var wobbly_chair = this.add.image((i*200)+200, 400, chairs[i]).setScale(0.5);
                wobbly_chair.setInteractive();
                this.input.setDraggable(wobbly_chair);
            }
            else{
                var tall_chair = this.add.image((i*200)+200, 400, chairs[i]).setScale(0.5);
                tall_chair.setInteractive();
                this.input.setDraggable(tall_chair);
            }
        }
        

        //place drop zone
        var zone = this.add.zone(150, 400, 150, 250).setRectangleDropZone(150, 250);

        //*  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        //*/

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
            //graphics.clear();
            //graphics.lineStyle(2, 0x00ffff);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when dragged object leaves dropzone
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            //graphics.clear();
            //graphics.lineStyle(2, 0xffff00);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when object dropped into dropzone, increment counter
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            if(gameObject == good_chair){
                counter++
            }
            else{
                this.scene.switch("furniture2Scene");
            };
            //graphics.clear();
            //graphics.lineStyle(2, 0xffff00);
            //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        });

        //when drag ends and object is not in the dropzone
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

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    returnToMini() {
        //this.scene.restart("windows2Scene")
        this.scene.stop('furniture2Scene')
        this.scene.switch("gameScene")
    }
}

export default furniture2Scene;