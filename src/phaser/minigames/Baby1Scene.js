import Phaser from "phaser";
import kitchen from "../../assets/minigames/baby1/kitchenTopDown.png";
import highChair from "../../assets/minigames/baby1/highChair.png"
import ground from "../../assets/minigames/baby1/ground.jpg"

let counter;
let fontFam = {
    fontFamily: "Sans-serif",
    fontSize: 25,
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

class baby1Scene extends Phaser.Scene {
    constructor() {
        super("baby1Scene");
        console.log("baby1Scene");
    }

    preload() {
        this.load.image("kitchen", kitchen);
        this.load.image("highChair", highChair);
        this.load.image("ground", ground);
    }

    create() {

        counter = 0;

        //creating background
        this.add.image(400, 300, "ground").setScale(0.7)

        //adding images
        let chair1 = this.add.image(162, 400, "highChair").setScale(0.3);
        let chair2 = this.add.image(460, 400, "highChair").setScale(0.3);
        let chair3 = this.add.image(320, 350, "highChair").setScale(0.3);

        chair1.setInteractive();
        chair2.setInteractive();
        chair3.setInteractive();

        //making chairs draggable
        this.input.setDraggable(chair1);
        this.input.setDraggable(chair2);
        this.input.setDraggable(chair3);

        this.add.image(400, 300, "kitchen").setScale(0.97);

        //add minigame title text
        this.add.text(37, 550, "SEPARATE THE HIGHCHAIRS FROM SURROUNDING ITEMS!", { ...fontFam, wordWrap:{width:780} });

        var zone1 = this.add.zone(535, 510, 130, 120).setRectangleDropZone(130, 120);
        var zone2 = this.add.zone(535, 390, 130, 120).setRectangleDropZone(130, 120);
        var zone3 = this.add.zone(535, 270, 130, 120).setRectangleDropZone(130, 120);
        var zone4 = this.add.zone(415, 270, 130, 120).setRectangleDropZone(130, 120);
        var zone5 = this.add.zone(295, 270, 130, 120).setRectangleDropZone(130, 120);
        var zone6 = this.add.zone(155, 270, 170, 120).setRectangleDropZone(170, 120);
        var zone7 = this.add.zone(105, 510, 120, 120).setRectangleDropZone(120, 120);
        var zone8 = this.add.zone(105, 390, 120, 120).setRectangleDropZone(120, 120);

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
        })

        //when drag ends and object is not in the dropzone
        this.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })
    }

    //game ends when all 3 chairs are placed
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
        this.scene.stop('baby1Scene')
        this.scene.switch("gameScene")
    }
}

export default baby1Scene;