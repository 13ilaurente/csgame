export default class sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    this.scene = scene;
  }
  /*
  constructor(config) {
    super(config.scene, config.x, config.y, config.hp, config.mana, config.texture, config.frame, config.key)
    config.scene.add.existing(this);
  }
  */
}
