class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'});
  }
  preload() {
    this.load.image('background', 'https://cdn.jsdelivr.net/gh/13ilaurente/csgame@master/assests/backgrounds/forest-background.png'
    );
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0,0);
  }
}

export default MenuScene