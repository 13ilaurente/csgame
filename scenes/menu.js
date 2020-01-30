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
    /*
    this.background = this.add.image(0, 0, "mountain-background");
    this.background.setOrigin(0, 0);
    */
    let background = this.add.image(0, 0, "mountain-background");
    background.setOrigin(0, 0); 

    // Play button to start game //
    let playButton = this.add.sprite(136, 80, 'menuSpriteSheet').setInteractive();
    playButton.on('pointerdown', function (pointer) {
      this.scene.switch('gameScene');
      console.log('switched to game scene');
    }.bind(this)); 
    playButton.on('pointerover', function (pointer) {
      let playHelp = this.add.text(136, 135, 'Click to begin fighting!', {fontFamily: 'Arial', fontSize: 10}).setOrigin(0.5);
      playButton.on('pointerout', function (pointer) {
        playHelp.destroy();
      }.bind(this));
    }.bind(this));
    
    // Option Button to go to options //   
    
    let optionButton = this.add.sprite(138, 110, 'menuSpriteSheet').setInteractive().setFrame(4);
    optionButton.on('pointerdown', function (pointer) {
      this.scene.switch('optionsScene');
      console.log('switched to option scene')
    }.bind(this));
    optionButton.on('pointerover', function (pointer) {
      let optionHelp = this.add.text(136, 135, 'Change settings and preferences of the game', {fontFamily: 'Arial', fontSize: 10}).setOrigin(0.5);
      optionButton.on('pointerout', function (pointer) {
        optionHelp.destroy();
      }.bind(this));
    }.bind(this));

    // Play fall animation //
    this.add.sprite(132, 50, 'player').play('playerFall');
  }

  
}

