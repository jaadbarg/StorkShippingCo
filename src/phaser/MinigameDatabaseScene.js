import Phaser from "phaser";

class minigameDatabaseScene extends Phaser.Scene {
    constructor() {
        super({ key: "minigameDatabaseScene" });
    }

    init(data) {
        this.gateID = data.id
    }

    preload() {
        console.log("database hit")
    }

    create(){
        this.transition();
    }

    transition() {
        this.scene.stop("stairs1Scene")
        this.scene.sleep("gameScene")
        this.scene.run("stairs1Scene");
    }

    update(){
    }
}

export default minigameDatabaseScene;