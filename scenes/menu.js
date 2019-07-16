export default class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' });
  }

  create() {
    // Background image //
    this.background = this.add.image(0, 0, "mountain-background");
    this.background.setOrigin(0, 0);

    // Grid to scale sprites //
    /*this.aGrid = new AlignGrid({scene:this,rows:11,cols:11});
    this.aGrid.showNumbers();*/

    // Play button to start game //
    this.playButton = this.add.sprite(136, 80, 'playButton').setInteractive();
    this.playButton.on('pointerdown', function (pointer) {
      this.scene.start('gameScene');
    }.bind(this));

    this.optionButton = this.add.sprite(136, 110, 'optionButton').setInteractive();
    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.start('optionsScene');
    }.bind(this));

    // Fullscreen button // 
    /*
    gameObject.setInteractive().on('pointerdown', function() {
    if (scene.scale.isFullscreen) {
        scene.scale.stopFullscreen();
    } else {
        scene.scale.startFullscreen();
    }
    });
    */

    // Player animation //
    this.anims.create({
      key: 'fall',
      frames: [
        { key: 'playerFall0', frame: null },
        { key: 'playerFall1', frame: null }
      ],
      frameRate: 8,
      repeat: -1
    });

    this.add.sprite(132, 50, 'playerFall0').play('fall');
  }
}
