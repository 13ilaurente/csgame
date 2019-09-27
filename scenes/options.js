export default class optionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'optionsScene' });
  }

  create() {
    // background tinted based on what scene it was accessed from //
    this.background = this.add.image(0, 0, "mountain-background").setTint(0x336666);
    this.background.setOrigin(0, 0);

    this.homeButton = this.add.sprite(136, 80, 'homeButton').setInteractive().setFrame(4);
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.start('menuScene');
    }.bind(this));

    // Fullscreen button //
    this.fullscreenText = this.add.text(90, 110, 'Fullscreen').setInteractive();
    this.fullscreenText.on('pointerdown', function () {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
        //this.scale.resize(272, 160);
      } else {
        this.scale.startFullscreen();
        //this.scale.resize(window.innerWidth, window.innerHeight);
      }
    }, this);

  }

}