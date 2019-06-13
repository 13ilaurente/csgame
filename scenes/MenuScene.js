class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'});
  }
  preload() {
    this.load.image('background', 'https://uploads.codesandbox.io/uploads/user/7bc1ff08-21d4-423d-a502-2f6a7608d4ae/U0mz-forest-background.png'
    );
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0,0);
  }
}

export default MenuScene