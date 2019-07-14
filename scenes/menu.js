export default class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' });
  }

  create() {
    //backgroundImage//
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
  }
}
