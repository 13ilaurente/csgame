import player from "../classes/player.js";
import enemy from "../classes/enemy.js";

export default class sprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, hp, type) {
    super(scene, x, y, hp);
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.type = type;
  }

  damageDone(amount) {
    this.hp -= amount;
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
