export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  preload() {
    this.load.spritesheet('player', 'https://github.com/13ilaurente/csgame/blob/master/assests/sprites/Player/adventurer/adventurer-v1.5-Sheet.png', {framewidth: 55, frameheight: 37});
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    const player = this.add.sprite(100, 100, 'player', 0);
  }
}