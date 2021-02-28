import Phaser from "phaser";
import baby1 from "../assets/baby1.png"
import grasstile from "../assets/grasstile.png"
import pathtile from "../assets/pathtile.png"
import map1 from "../assets/map1.json"

let graphics;
let path;

class createMap extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    preload() {
        this.load.image('baby', baby1);
        this.load.image('grass', grasstile);
        this.load.image('path', pathtile);
        this.load.tilemapTiledJSON('map', map1);
    }
    create() {
        graphics = this.add.graphics();

        let map = this.make.tilemap({key: "map"});
        let grassTile = map.addTilesetImage('grass', 'grass');
        let pathTile = map.addTilesetImage('path', 'path');
        map.createLayer("Tile Layer 1", [grassTile, pathTile]).setScale(0.312);

        //this.add.image(200, 200, "baby")

        this.createTrack();

        graphics.lineStyle(5, 0xffffff, 1);
        path.draw(graphics);

    }
    createTrack() {
        path = this.add.path(800, 40);
        path.lineTo(550, 40);
        path.lineTo(550, 300);
        path.lineTo(750, 300);
        path.lineTo(750, 550);
        path.lineTo(50, 550);
        path.lineTo(50, 50);
        path.lineTo(300, 50);
        path.lineTo(300, 300);
        path.lineTo(125, 300);
        path.lineTo(125, 500);
        path.lineTo(400, 500);
        path.lineTo(400, 100);
    }
}

export default createMap;