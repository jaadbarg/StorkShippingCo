import Phaser from "phaser";
import eventsCenter from "./EventsCenter"

let timePassed;
let spawnEvent;
let key;
let coin;
let indexCounter = [0, 0, 0, 0, 0, 0]

class minigameDatabaseScene extends Phaser.Scene {
    constructor() {
        super({ key: "minigameDatabaseScene" });
    }

    init(data) {
        this.gateID = data.id
    }

    /*
        0 stairs
        1 windows
        2 openwater
        3 baby equipment
        4 furniture
        5 bed
    */

    preload() {
        console.log("database hit")
    }

    create() {
        timePassed = 0;
        coin = false;
        this.trackTime();

        this.transition();
    }

    transition() {
        if (this.gateID == 0) {
            this.stairsGame();
        } else if (this.gateID == 1) {
            this.windowsGame();
        } else if (this.gateID == 2) {
            this.openwaterGame();
        } else if (this.gateID == 3) {
            this.babyEquipmentGame();
        } else if (this.gateID == 4) {
            this.furnitureGame();
        } else if (this.gateID == 5) {
            this.bedGame();
        } else {
            alert("Something is wrong! gateID not recognized")
        }
    }

    stairsGame() {
        if(indexCounter[0] == 0) {
            this.scene.stop("stairs1Scene")
            this.scene.run("stairs1Scene");
            key = 'stairs1Scene'
        } else {
            this.scene.stop("stairs2Scene")
            this.scene.run("stairs2Scene");
            key = 'stairs2Scene'
        }
        indexCounter[0]++;
        if(indexCounter[0] >= 2) {
            indexCounter[0] = 0
        }
    }

    windowsGame() {
        if(indexCounter[1] == 0) {
            this.scene.stop("windows1Scene")
            this.scene.run("windows1Scene");
            key = 'windows1Scene'
        } else {
            this.scene.stop("windows2Scene")
            this.scene.run("windows2Scene");
            key = 'windows2Scene'
        }
        indexCounter[1]++;
        if(indexCounter[1] >= 2) {
            indexCounter[1] = 0
        }
    }

    openwaterGame() {
        this.scene.stop("water1Scene")
        this.scene.run("water1Scene");
        key = 'water1Scene'
    }

    babyEquipmentGame() {
        if(indexCounter[3] == 0) {
            this.scene.stop("baby1Scene")
            this.scene.run("baby1Scene");
            key = 'baby1Scene'
        } else {
            this.scene.stop("baby2Scene")
            this.scene.run("baby2Scene");
            key = 'baby2Scene'
        }
        indexCounter[3]++;
        if(indexCounter[3] >= 2) {
            indexCounter[3] = 0
        }
    }

    furnitureGame() {
        if(indexCounter[4] == 0) {
            this.scene.stop("furniture1Scene")
            this.scene.run("furniture1Scene");
            key = 'furniture1Scene'
        } else {
            this.scene.stop("furniture2Scene")
            this.scene.run("furniture2Scene");
            key = 'furniture2Scene'
        }
        indexCounter[4]++;
        if(indexCounter[4] >= 2) {
            indexCounter[4] = 0
        }
    }

    bedGame() {
        if(indexCounter[5] == 0) {
            this.scene.stop("bed1Scene")
            this.scene.run("bed1Scene");
            key = 'bed1Scene'
        } else {
            this.scene.stop("bed2Scene")
            this.scene.run("bed2Scene");
            key = 'bed2Scene'
        }
        indexCounter[5]++;
        if(indexCounter[5] >= 2) {
            indexCounter[5] = 0
        }
    }

    //sends timer information back to gamescene when minigame scene ends
    update() {
        if(this.scene.isVisible(key)){
            coin = true;
        }

        if(!this.scene.isVisible(key) && coin) {
            eventsCenter.emit('timePassedMini', timePassed);
            coin = false;
            this.scene.stop('minigameDatabaseScene');
        }
    }

    //tracks time passed in minigame scene
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
}

export default minigameDatabaseScene;