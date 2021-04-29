import Phaser from "phaser";
import nightlight from "../../assets/minigames/bed2/nightlight.png";
import candle from "../../assets/minigames/bed2/candle.png";
import flashlight from "../../assets/minigames/bed2/flashlight.png"
import gray from "../../assets/minigames/bed2/gray.jpg"
import trashcan from "../../assets/minigames/bed2/trashcan.png"
import basket from "../../assets/minigames/bed2/basket.png"
import eventsCenter from "../EventsCenter"

let counter;
let backButton;
let fontFam = {
    // fontFamily: "cursive",
    fontSize: 30,
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

class bed2Scene extends Phaser.Scene {
    constructor() {
        super("bed2Scene");
        console.log("bed2Scene");
    }

    preload() {
        this.load.image("nightlight", nightlight);
        this.load.image("candle", candle);
        this.load.image("flashlight", flashlight);
        this.load.image("gray", gray);
        this.load.image("basket", basket);
        this.load.image("trashcan", trashcan);
    }

    create() {

        counter = 0;

        //add background
        this.add.rectangle(400, 300, 800, 600, 0x56A0D3)

        //add minigame title text
        this.add.text(140, 50, "BUY THE SAFEST NIGHTLIGHT AND DISCARD THE REST!", { ...fontFam, wordWrap:{width:500} });

        //shuffle chairs for replayability
        let lights = ["flashlight", "candle", "nightlight"];
        for (var i = lights.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = lights[i];
            lights[i] = lights[j];
            lights[j] = temp;
        }

        //place chairs on screen
        var nightlight;
        var flashlight;
        var candle;
        
        for (i = 0; i < lights.length; i++) {
            if(lights[i] == "nightlight"){
                nightlight = this.add.image((i*200)+200, 300, lights[i]).setScale(0.35);
                nightlight.setInteractive();
                nightlight.name = "buy";
                this.input.setDraggable(nightlight);
            }
            else if(lights[i] == "flashlight"){
                flashlight = this.add.image((i*200)+200, 300, lights[i]).setScale(0.15);
                flashlight.setInteractive();
                flashlight.name = "discard";
                this.input.setDraggable(flashlight);
            }
            else{
                candle = this.add.image((i*200)+200, 300, lights[i]).setScale(0.1);
                candle.setInteractive();
                candle.name = "discard";
                this.input.setDraggable(candle);
            }
        }
        

        //place drop zones
        var zone1 = this.add.zone(200, 500, 150, 250).setRectangleDropZone(150, 250);
        var zone2 = this.add.zone(600, 490, 150, 250).setRectangleDropZone(150, 250);
        zone1.name = "discard";
        zone2.name = "buy"

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
            if(gameObject.name == "buy" && dropZone.name == "buy"){
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                gameObject.input.enabled = false;
                gameObject.destroy();
                counter++;
            }
            else if(gameObject.name == "discard" && dropZone.name == "discard"){
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                gameObject.input.enabled = false;
                gameObject.destroy();
                counter++;
            }
            else{
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
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
        }
    }

    returnToMini() {
        //this.scene.restart("windows2Scene")
        this.scene.stop('bed2Scene')
        this.scene.switch("gameScene")
    }
}

export default bed2Scene;