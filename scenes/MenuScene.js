class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'});
  }
  preload() {
    this.load.image('background_image', './assests/forest-background.png');
  }
  create() {
    this.add.text(20, 20, "Loading game...");
  }
}

export default MenuScene