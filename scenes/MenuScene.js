export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'});
  }
  preload() {
    this.load.image('background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/backgrounds/forest-background.png'
    );
  }
  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0,0);
    this.background.setScale(3);
  }
}

export default MenuScene