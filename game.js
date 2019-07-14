import menuScene from './scenes/menuScene';
import Game from './scenes/Game';

const config = {
  type: Phaser.AUTO,
  width: 272,
  height: 160,
  scene: [menuScene, Game]
};

let game = new Phaser.Game(config);



