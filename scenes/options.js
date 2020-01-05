export default class optionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'optionsScene' });
  }

  create() {
    // background tinted based on what scene 
    this.background = this.add.image(0, 0, "mountain-background").setTint(0x336666);
    this.background.setOrigin(0, 0);

    this.homeButton = this.add.sprite(136, 76, 'menuSpriteSheet').setInteractive().setFrame(8);
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.switch('menuScene');
    }.bind(this));

    // Fullscreen button 
    this.fullScreenButton = this.add.sprite(138, 110, 'menuSpriteSheet').setInteractive().setFrame(6);
    this.fullScreenButton.on('pointerdown', function (pointer) {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
        this.fullScreenButton.setFrame(6);
      } else {
        this.scale.startFullscreen();
        this.fullScreenButton.setFrame(7);   
      }
    }, this);
  }
}

//this.scale.resize(272, 160);
//this.scale.resize(window.innerWidth, window.innerHeight);