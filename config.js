import preloaderScene from './scenes/preloader';
import menuScene from './scenes/menu';
import optionsScene from './scenes/options';
import gameScene from './scenes/game';
import uiScene from './scenes/ui';

const config = {
  type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        width: 272,
        height: 160
    },
  pixelArt: true,
  scene: [preloaderScene, menuScene, optionsScene, gameScene, uiScene]
};

let game = new Phaser.Game(config);



