import player from '../classes/player.js';
import enemy from '../classes/enemy.js';

export default class sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp) {
    super(scene, x, y, hp)
    this.x = x;
    this.y = y;
    this.hp = hp;
  }
  
  damageTaken(damage) { 
    if (hp > 0) {
      this.hp -= damage
    }
  }
}

  /*
  constructor(config) {
    super(config.scene, config.x, config.y, config.hp, config.mana, config.texture, config.frame, config.key)
    config.scene.add.existing(this);
  }
  */
