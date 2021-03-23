import Phaser from "phaser";
import baby from "../assets/babies/baby1.png";

class stairs1Scene extends Phaser.Scene {
    constructor() {
      super("stairs1Scene");
      console.log("stairs1Scene");
    }

    preload(){
        this.load.image('baby', baby);
    }
    
    create(){

        var image = this.add.sprite(200, 300, 'baby').setInteractive();
    
        this.input.setDraggable(image);
    
        //  The pointer has to move 16 pixels before it's considered as a drag
        this.input.dragDistanceThreshold = 16;
    
        this.input.on('dragstart', function (pointer, gameObject) {
    
            gameObject.setTint(0xff0000);
    
        });
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
    
        this.input.on('dragend', function (pointer, gameObject) {
    
            gameObject.clearTint();
    
        });
    }
}

export default stairs1Scene;