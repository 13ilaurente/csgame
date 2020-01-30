export default class optionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'optionsScene' });
  }

  create() {
    // background tinted based on what scene //
    let background = this.add.image(0, 0, "mountain-background").setTint(0x336666);
    background.setOrigin(0, 0); 

    // Home button //
    let homeButton = this.add.sprite(136, 76, 'menuSpriteSheet').setInteractive().setFrame(8);
    homeButton.on('pointerdown', function (pointer) {
      this.scene.switch('menuScene');
      console.log('switched to option scene')
    }.bind(this));
    homeButton.on('pointerover', function (pointer) {
      let homeHelp = this.add.text(136, 135, 'Return to the main menu', {fontFamily: 'Arial', fontSize: 10}).setOrigin(0.5);
      homeButton.on('pointerout', function (pointer) {
        homeHelp.destroy();
      }.bind(this));
    }.bind(this));

    // Fullscreen button //
    let fullScreenButton = this.add.sprite(138, 110, 'menuSpriteSheet').setInteractive().setFrame(6);
    fullScreenButton.on('pointerdown', function (pointer) {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
        fullScreenButton.setFrame(6);
        console.log('exited fullscreen')
      } else {
        this.scale.startFullscreen();
        fullScreenButton.setFrame(7);
        console.log('entered fullscreen')   
      }
    }, this);
    /*
    fullScreenButton.on('pointerover', function (pointer) {
      if (fullScreenButton.setFrame(6) === true) {
        let fullScreenHelp = this.add.text(136, 135, 'Test1', {fontFamily: 'Arial', fontSize: 10}).setOrigin(0.5);
      } else {
        let fullScreenHelp = this.add.text(136, 135, 'Test2', {fontFamily: 'Arial', fontSize: 10}).setOrigin(0.5);
      }
      fullScreenButton.on('pointerout', function (pointer) {
        fullScreenHelp.destroy();
      }.bind(this));
    }.bind(this));
    */
  }
}

//this.scale.resize(272, 160);
//this.scale.resize(window.innerWidth, window.innerHeight);