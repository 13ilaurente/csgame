export default class uiScene extends Phaser.Scene {
  constructor() {
    super({ key: 'uiScene' });
  }

  create() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x783F04, 1);
    this.graphics.strokeRect(1, 110, 90, 100);
    this.graphics.fillRect(1, 110, 90, 100);
    this.graphics.strokeRect(93, 110, 90, 100);
    this.graphics.fillRect(93, 110, 90, 100);
    this.graphics.strokeRect(185, 110, 130, 100);
    this.graphics.fillRect(185, 110, 130, 100);
  }
}