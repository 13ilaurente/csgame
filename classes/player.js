import sprite from "../classes/sprite.js";

export default class player extends sprite {
  constructor(scene, x, y, hp, mana) {
    super(scene, x, y, hp, 'user', mana);

    scene.add.existing(this);
    this.setTexture("player");
    this.play('playerIdle');
    this.setPosition(x, y);
    
    this.alive = true;
  }

  slash(dmg) {
    let slash_damage = 30;
    return slash_damage;
    console.log(damage);
  }
}

/*
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
}
*/
