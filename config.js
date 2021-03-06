import preloaderScene from './scenes/preloader';
import menuScene from './scenes/menu';
import optionsScene from './scenes/options';
//import gameScene from './scenes/game';
import gameScene from './scenes/game2';
import uiScene from './scenes/ui';
import gameOverScene from './scenes/gameOver';

const config = {
  type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        width: 272,
        height: 160
    },
  pixelArt: true,
  scene: [preloaderScene, menuScene, optionsScene, gameScene, uiScene, gameOverScene]
};

let game = new Phaser.Game(config);



