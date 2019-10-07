export default class uiScene extends Phaser.Scene {
  constructor() {
    super({ key: 'uiScene' });
  }

  create() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x783F04, 1);
    this.graphics.strokeRect(1, 110, 85, 50);
    this.graphics.fillRect(1, 111, 85, 50);
    this.graphics.strokeRect(83, 110, 150, 50);
    this.graphics.fillRect(83, 111, 150, 50);
    this.graphics.strokeRect(231, 110, 71, 50);
    this.graphics.fillRect(231, 111, 70, 50);

    this.homeButton = this.add.sprite(255, 123, 'menuSpriteSheet').setInteractive().setFrame(4);
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.start('menuScene');
    }.bind(this));

    this.optionButton = this.add.sprite(256, 145, 'menuSpriteSheet').setInteractive().setFrame(2);
    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.start('optionsScene');
    }.bind(this));
  }
  
}