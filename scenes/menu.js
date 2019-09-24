export default class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' });
  }

  preload() {
    // Player fall animation //
    this.anims.create({
      key: 'playerFall', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 22, end: 23}),
      frameRate: 8,
      repeat: -1
    });
  }

  create() {
    // Background image //
    this.background = this.add.image(0, 0, "mountain-background");
    this.background.setOrigin(0, 0); 

    // Play button to start game //
    this.playButton = this.add.sprite(136, 80, 'playButton').setInteractive();
    this.playButton.on('pointerdown', function (pointer) {
      this.scene.start('gameScene');
    }.bind(this));

    this.optionButton = this.add.sprite(136, 110, 'optionButton').setInteractive().setFrame(4);
    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.start('optionsScene');
    }.bind(this));

    // Play fall animation //
    this.add.sprite(132, 50, 'player').play('playerFall');
  }

}

