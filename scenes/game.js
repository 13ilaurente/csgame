export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    const player = this.add.sprite(100, 100, 'player', 0);
  }
}