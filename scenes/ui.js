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

    this.homeButton = this.add.sprite(235, 125, 'homeButton').setInteractive().setFrame(6);
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.start('menuScene');
    }.bind(this));

    this.optionButton = this.add.sprite(235, 145, 'optionButton').setInteractive().setFrame(4);
    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.start('optionsScene');
    }.bind(this));
  }
  
}