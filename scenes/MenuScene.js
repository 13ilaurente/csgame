export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }
  preload() {
    this.load.image('background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/backgrounds/forest-background.png'
    );

    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/play.png');

    this.load.image('playerIdle1', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-00.png')
    this.load.image('playerIdle2', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-01.png')
    this.load.image('playerIdle3', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-02.png')
    this.load.image('playerIdle4', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-03.png')
  }
  create() {
    /*
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.setScale(3);
    */

    this.playButton = this.add.sprite(400, 200, 'playButton').setInteractive();
    this.playButton.setScale(4)

    this.playButton.on('pointerdown', function (pointer) {
      this.scene.start('Game');
    }.bind(this));

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

    this.add.sprite(400, 300, 'playerIdle1').play('idle1');
  }
}

export default MenuScene