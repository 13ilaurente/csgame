export default class preloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloaderScene' });
  }

  preload() {
    this.load.image('forest-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/forest-background.png'
    );
    this.load.image('mountain-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/mountain-background.png')

    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/play.png');

    this.load.image('playerFall0', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/Player/adventurer/Individual%20Sprites/adventurer-fall-00.png');
    this.load.image('playerFall1', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/Player/adventurer/Individual%20Sprites/adventurer-fall-01.png');
  }

  update() {
    this.scene.start('menuScene');
  }
}