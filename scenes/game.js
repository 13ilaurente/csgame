import sprite from '../classes/sprite'

export default class gameScene extends Phaser.GameObjects.Sprite {
  constructor() {
    super({ key: 'gameScene' });
  }

  create() {
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    this.add.existing(new player(this, 100, 100));
    //let player = new Player({scene: this, x: 100, y: 100, hp: 100, mana: 100, texture: 'player', frame: 23});
  }
}