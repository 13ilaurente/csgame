class menu extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {
    this.add.text(20, 20, "Loading game...");
  }
}