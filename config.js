import preloaderScene from './scenes/preloader';
import menuScene from './scenes/menu';
import optionsScene from './scenes/options';
import gameScene from './scenes/game';
import uiScene from './scenes/ui';

const config = {
  mode: Phaser.Scale.NONE,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 272,
  height: 160,
  scene: [preloaderScene, menuScene, optionsScene, gameScene, uiScene]
};

let game = new Phaser.Game(config);



