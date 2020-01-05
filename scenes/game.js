import sprite from '../classes/sprite.js';
import player from '../classes/player.js';
import enemy from '../classes/enemy.js';

export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  preload() {
    
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    this.add.existing(new player(this, 60, 90, 100));
    //let player = new Player({scene: this, x: 100, y: 100, hp: 100, mana: 100, texture: 'player', frame: 23});

    this.add.existing(new enemy(this, 180, 90, 100));
  }
}