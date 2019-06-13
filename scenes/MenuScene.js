class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'});
  }
  preload() {
    this.load.image('background', './assests/backgrounds/forest-background.png');
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.background = this.add.image(0, 0, "background")
  }
}

export default MenuScene