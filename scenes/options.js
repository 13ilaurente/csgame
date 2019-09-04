export default class optionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'optionsScene' });
  }

  create() {
    // background tinted //
    this.background = this.add.image(0, 0, "mountain-background").setTint(0x336666);
    this.background.setOrigin(0, 0);

    this.homeButton = this.add.sprite(136, 80, 'homeButton').setInteractive();
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.start('menuScene');
    }.bind(this));

    // Fullscreen button // 
    this.fullscreenText = this.add.text(90, 110, 'Fullscreen').setInteractive();
    this.fullscreenText.on('pointerdown', function () {
      this.scale.toggleFullscreen();
      if (this.scale.isFullscreen) {
        // On start fulll screen
      } else {
        // On stop fulll screen
      }
    });
  }
}