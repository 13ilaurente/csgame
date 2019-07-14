export default class preloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloaderScene' });
  }

  preload() {
    this.load.image('background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/backgrounds/forest-background.png'
    );

    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/play.png');

    this.load.image('playerIdle1', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-00.png')
    this.load.image('playerIdle2', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-01.png')
    this.load.image('playerIdle3', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-02.png')
    this.load.image('playerIdle4', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/sprites/sprites/Player/adventurer/Individual%20Sprites/adventurer-idle-03.png')

    this.load.spritesheet('player', 'https://github.com/13ilaurente/csgame/blob/master/assests/sprites/Player/adventurer/adventurer-v1.5-Sheet.png', { framewidth: 55, frameheight: 37 });
  }
}

update() {
  this.scene.start('menuScene');
}
}