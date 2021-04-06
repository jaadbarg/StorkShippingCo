import Phaser from "phaser";

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
            alert("Something is wrong lol; gateID not recognized")
        }
    }

    stairsGame() {
        this.scene.stop("stairs1Scene")
        this.scene.sleep("gameScene")
        this.scene.run("stairs1Scene");
    }

    windowsGame() {

    }

    openwaterGame() {

    }

    babyEquipmentGame() {

    }

    furnitureGame() {

    }

    bedGame() {

    }

    update() {
    }
}

export default minigameDatabaseScene;