export default class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' });
  }

  create() {
    //backgroundImage//
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    // Grid to scale sprites //
    /*this.aGrid = new AlignGrid({scene:this,rows:11,cols:11});
    this.aGrid.showNumbers();*/

    // Play button to start game //
    this.playButton = this.add.sprite(136, 80, 'playButton').setInteractive();

    this.playButton.on('pointerdown', function (pointer) {
      this.scene.start('gameScene');
    }.bind(this));

    // Character idle animation // 
    this.anims.create({
      key: 'idle1',
      frames: [
        { key: 'playerIdle1', frame: null },
        { key: 'playerIdle2', frame: null },
        { key: 'playerIdle3', frame: null },
        { key: 'playerIdle4', frame: null }
      ],
      frameRate: 8,
      repeat: -1
    });

    this.add.sprite(25, 140, 'playerIdle1').play('idle1');
  }
}
