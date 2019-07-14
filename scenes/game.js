export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

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

    this.add.sprite(25, 90, 'playerIdle1').play('idle1');

    this.scene.launch('uiScene');
  }
}