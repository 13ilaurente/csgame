import sprite from '../classes/sprite.js';

export default class enemy extends sprite {
  constructor(scene, x, y, hp) {
    super(scene, x, y, hp, 'enemy')

    this.setTexture('slime');
    this.setFrame(1);
    this.setPosition(x, y);
    this.alive = true;
  }
}

/*
export default class enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp) {
    super(scene, x, y, hp);
  
    this.setTexture('slime');
    this.setFrame(1);
    this.setPosition(x, y);
  }
}
*/