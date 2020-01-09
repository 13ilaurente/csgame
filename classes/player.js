export default class player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp, mana, score) {
    super(scene, x, y, hp, mana,);

    this.setTexture('player');
    this.setFrame(1);
    this.setPosition(x, y);
  }

  create() {
    function test1() {
      console.log('success')
    }
  }
  /*
  constructor(config) {
    super(config.scene, config.x, config.y, config.hp, config.mana, config.texture, config.frame, config.key)
    config.scene.add.existing(this);
  }
  */
}
