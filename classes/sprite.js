import player from '../classes/player.js';
import enemy from '../classes/enemy.js';
import { user, enemies } from '../scenes/game2.js';
import healthDisplay from '../classes/healthDisplay.js';

export default class sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp, type) {
    super(scene, x, y, hp);
    this.x = x;
    this.y = y;
    let maxHp = hp;
    this.hp = hp;
    this.type = type;

    //this.healthBar = new healthDisplay(scene, x, y - 20, hp + '/' + hp);
    this.healthBar = new healthDisplay(scene, x, y - 20, hp);
  }

    damageDone(amount) {
      this.hp -= amount;
      this.healthBar.draw()
      if (this.hp < 0) {
        this.hp = 0;
      }
    }

    damage(dmg) { 
      var target = this.type === "user" ? enemies : user;

      if (target && this.alive) {
        target.damageDone(dmg);
      }
    }
}

/*
  constructor(config) {
    super(config.scene, config.x, config.y, config.hp, config.mana, config.texture, config.frame, config.key)
    config.scene.add.existing(this);
  }
  */