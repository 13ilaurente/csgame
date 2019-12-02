import sprite from '../classes/sprite'

export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    this.player = new sprite(this, 100, 100, 100, 100, 'player', 23)
  }
}