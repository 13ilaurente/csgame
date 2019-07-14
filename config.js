import preloaderScene from './scenes/preloader';
import menuScene from './scenes/menu';
import gameScene from './scenes/game';
import uiScene from './scenes/ui';

const config = {
  type: Phaser.AUTO,
  width: 272,
  height: 160,
  scene: [preloaderScene, menuScene, optionsScene, gameScene, uiScene]
};

let game = new Phaser.Game(config);



