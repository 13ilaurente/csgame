export default class uiScene extends Phaser.Scene {
  constructor() {
    super({ key: 'uiScene' });
  }

  create() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x783F04, 1);
    this.graphics.strokeRect(1, 110, 80, 50);
    this.graphics.fillRect(1, 110, 80, 50);
    this.graphics.strokeRect(83, 110, 120, 50);
    this.graphics.fillRect(83, 110, 120, 50);
    this.graphics.strokeRect(201, 110, 70, 50);
    this.graphics.fillRect(201, 110, 70, 50);
  }
}