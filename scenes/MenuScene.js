export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }
  preload() {
    this.load.image('background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/backgrounds/forest-background.png'
    );
    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/play.png');
  }
  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.setScale(3);

    this.playButton = this.add.sprite(400, 200, 'playButton').setInteractive();
    this.playButton.setScale(4)

    this.playButton.on('pointerdown', function (pointer) {
      this.scene.start('Game');
    }.bind(this));
  }
}

export default MenuScene