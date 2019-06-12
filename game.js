import MenuScene from './scenes/MenuScene';

let menuScene = new MenuScene();

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};

let game = new Phaser.Game(config);
game.scene.add('MenuScene', menuScene);
game.scene.start('MenuScene');

