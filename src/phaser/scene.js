import Phaser from "phaser";
import CharlieBrown from "../assets/CharlieBrown.jpg"

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    // this.load.image("Baby", CharlieBrown);
  }
  create() {
    // const baby = this.add.image(400, 150, "Baby");
    // this.tweens.add({
    //   targets: baby,
    //   y: 450,
    //   duration: 2000,
    //   ease: "Power2",
    //   yoyo: true,
    //   loop: -1
    // });
  }
}

export default playGame;
