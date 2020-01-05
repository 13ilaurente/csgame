import sprite from '../classes/sprite.js';

export default class enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp, mana) {
    super(scene, x, y, hp, mana,);

    this.setTexture('slime');
    this.setFrame(1);
    this.setPosition(x, y);
  }
}
