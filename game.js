import preloaderScene from './scenes/preloader';
import menuScene from './scenes/menu';
import gameScene from './scenes/game';

const config = {
  type: Phaser.AUTO,
  width: 272,
  height: 160,
  scene: [preloaderScene, menuScene, gameScene]
};

let game = new Phaser.Game(config);



