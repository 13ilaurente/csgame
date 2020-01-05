import sprite from '../classes/sprite.js';

export default class enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp, mana) {
    super(scene, x, y, hp, mana,);

    this.setTexture('player');
    this.setFrame(1);
    this.flipX = true;
    this.setPosition(x, y);
  }
}
