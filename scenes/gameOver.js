export default class gameOverScene extends Phaser.Scene {
  constructor(){
    super({ key: 'gameOverScene'});
  }

  preload() {

  }

  create() {
    let gameOverText = this.add.text(136, 40, 'YOU DIED', {fontFamily: 'Arial', fontSize: 30}).setOrigin(0.5);
  }
}