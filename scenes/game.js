import sprite from '../classes/sprite.js';
import player from '../classes/player.js';
import enemy from '../classes/enemy.js';

export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  preload() {
    this.anims.create({
      key: 'playerIdle', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 0, end: 2}),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slimeIdle', // name of animation
      frames: this.anims.generateFrameNames('slime', {start: 0, end: 3}),
      frameRate: 8,
      repeat: -1
    });
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    this.add.existing(new player(this, 60, 90, 100)).play('playerIdle');
    //let player = new Player({scene: this, x: 100, y: 100, hp: 100, mana: 100, texture: 'player', frame: 23});

    this.add.existing(new enemy(this, 180, 90, 100)).play('slimeIdle');
  }
}