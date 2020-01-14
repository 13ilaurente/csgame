export default class preloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloaderScene' });
  }

  preload() {
    this.load.image('forest-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/forest-background.png'
    );
    this.load.image('mountain-background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/backgrounds/mountain-background.png');

    /*
    this.load.image('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/play.png');
    this.load.image('optionButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/option.png');
    this.load.image('homeButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/home%20button.png');
    */

    this.load.spritesheet('menuSpriteSheet', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/menu.png', {frameWidth: 28, frameHeight: 21});

    this.load.spritesheet('player', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/player/adventurer.png', {frameWidth: 50, frameHeight: 37});

    this.load.spritesheet('slime', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/slime/slime-Sheet.png', {frameWidth: 32, frameHeight: 24})
  }

  update() {
    this.scene.start('menuScene');
    console.log('menu scene started');
  }
  
}

