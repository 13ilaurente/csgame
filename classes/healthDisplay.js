import sprite from "../classes/sprite.js";

export default class healthDisplay extends Phaser.GameObjects.Text {
  constructor(scene, x, y, hp) {
    super(scene, x, y);
    this.x = x;
    this.y = y;
    this.setOrigin(0.5);
    this.hp = hp;
    this.draw();

    scene.add.existing(this);
  }

  draw() {
    let text;
    let text = this.hp +'/'+ this.hp;
    this.text = text;
  }
}

