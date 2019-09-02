export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    this.homeButton = this.add.sprite(136, 80, 'homeButton').setInteractive();
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.start('menuScene');
    }.bind(this));

    this.scene.launch('uiScene');
  }
}