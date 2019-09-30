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

    this.load.spritesheet('playButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/menu_buttons.png', {frameWidth: 30, frameHeight: 20});
    this.load.spritesheet('optionButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/menu_buttons.png', {frameWidth: 30, frameHeight: 20});
    this.load.spritesheet('homeButton', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/buttons/menu_buttons.png', {frameWidth: 30, frameHeight: 20});

    this.load.spritesheet('player', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assets/sprites/player/adventurer.png', {frameWidth: 50, frameHeight: 37});
  }

  update() {
    this.scene.start('menuScene');
  }
  
}

