export default class preloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloaderScene' });
  }

  preload() {
    this.load.image('forest-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/forest-background.png'
    );
    this.load.image('mountain-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/mountain-background.png');

    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/play.png');
    this.load.image('optionButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/option.png');
    this.load.image('homeButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/home%20button.png');

    this.load.image('playerFall0', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/player/individual%20sprites/adventurer-fall-00.png');
    this.load.image('playerFall1', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/player/individual%20sprites/adventurer-fall-01.png');

    this.load.spritesheet('player', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/player/adventurer-v1.5-Sheet.png', {frameWidth: 55, frameHeight: 37});
  }

  update() {
    this.scene.start('menuScene');
  }
}