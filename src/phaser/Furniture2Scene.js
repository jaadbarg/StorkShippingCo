import Phaser from "phaser";
import good_chair from "../assets/minigames/furniture2/good_chair.png";
import wobbly_chair from "../assets/minigames/furniture2/wobbly_chair.png";
import tall_chair from "../assets/minigames/furniture2/tall_chair.png"
import gray from "../assets/minigames/furniture2/gray.jpg"
import trashcan from "../assets/minigames/furniture2/trashcan.png"
import basket from "../assets/minigames/furniture2/basket.png"
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
        this.load.image("gray", gray);
        this.load.image("basket", basket);
        this.load.image("trashcan", trashcan);
    }

    create() {

        counter = 0;

        //add background
        this.add.image(400, 300, "gray").setScale(2);

        //add minigame title text
        this.add.text(90, 50, "BUY THE SAFEST CHAIR AND DISCARD THE REST!", { ...fontFam, wordWrap:{width:650} });

        //shuffle chairs for replayability
        let chairs = ["good_chair", "wobbly_chair", "tall_chair"];
        for (var i = chairs.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = chairs[i];
            chairs[i] = chairs[j];
            chairs[j] = temp;
        }

        //place chairs on screen
        var good_chair1;
        var wobbly_chair1;
        var tall_chair1;
        
        for (i = 0; i < chairs.length; i++) {
            if(chairs[i] == "good_chair"){
                good_chair1 = this.add.image((i*200)+200, 300, chairs[i]).setScale(0.5);
                good_chair1.setInteractive();
                this.input.setDraggable(good_chair1);
            }
            else if(chairs[i] == "wobbly_chair"){
                wobbly_chair1 = this.add.image((i*200)+200, 300, chairs[i]).setScale(0.5);
                wobbly_chair1.setInteractive();
                this.input.setDraggable(wobbly_chair1);
            }
            else{
                tall_chair1 = this.add.image((i*200)+200, 300, chairs[i]).setScale(0.5);
                tall_chair1.setInteractive();
                this.input.setDraggable(tall_chair1);
            }
        }
        

        //place drop zones
        var zone1 = this.add.zone(200, 500, 150, 250).setRectangleDropZone(150, 250);
        var zone2 = this.add.zone(600, 490, 150, 250).setRectangleDropZone(150, 250);

        //place trashcan
        this.add.image(200, 500, "trashcan").setScale(0.1);
        //place shopping basket
        this.add.image(600, 490, "basket").setScale(0.1);

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
           //just vibe
        });

        //when dragged object leaves dropzone
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            //just vibe
        });

        //when object dropped into dropzone
        this.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            gameObject.destroy();
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

    returnToMini() {
        //this.scene.restart("windows2Scene")
        this.scene.stop('furniture2Scene')
        this.scene.switch("gameScene")
    }
}

export default furniture2Scene;