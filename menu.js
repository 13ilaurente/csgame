class menu extends Phaser.Scene {
  constructor() {
    super("bootGame")
  }
}

function create() {
  this.add.text(20, 20, "Loading Screen")
}
