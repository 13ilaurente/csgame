import sprite from '../classes/sprite.js';
import player from '../classes/player.js';

export default class uiScene extends Phaser.Scene {
  constructor() {
    super({ key: 'uiScene' });
  }

  create() {
    // UI //
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x783F04, 1);
    this.graphics.strokeRect(1, 110, 85, 50);
    this.graphics.fillRect(1, 111, 85, 50);
    this.graphics.strokeRect(83, 110, 150, 50);
    this.graphics.fillRect(83, 111, 150, 50);
    this.graphics.strokeRect(231, 110, 41, 50);
    this.graphics.fillRect(231, 111, 40, 50);

    // Home button //
    this.homeButton = this.add.sprite(255, 123, 'menuSpriteSheet').setInteractive().setFrame(8);
    this.homeButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.switch('menuScene');
      console.log('switched to home scene (menu)');
    }.bind(this));

    // Option button //
    this.optionButton = this.add.sprite(256, 145, 'menuSpriteSheet').setInteractive().setFrame(4);
    this.optionButton.on('pointerdown', function (pointer) {
      this.scene.sleep('gameScene');
      this.scene.switch('optionsScene')
      console.log('switched to option scene');
    }.bind(this));

    // Attack button //
    let attackTextButton = this.add.text(20, 120, 'ATTACK', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();

    attackTextButton.on('pointerover', function (pointer) {
        attackTextButton.setTint(0x44ff44);
    });
    attackTextButton.on('pointerout', function (pointer) {
        attackTextButton.clearTint();
    });
    attackTextButton.on('pointerdown', function (pointer) {
        attackTextButton.setTint(0xff0000);
        blockButton.setVisible(false);
        slashButton.setVisible(true);
        fireBallButton.setVisible(true);
        console.log('attack selected')
    });

    // Attack options //
    let slashButton = this.add.text(140, 120, 'SLASH', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();
    slashButton.setVisible(false);
    let fireBallButton = this.add.text(132, 135, 'FIRE BALL', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();
    fireBallButton.setVisible(false);

    // Defend button //
    let defendTextButton = this.add.text(19, 140, 'DEFEND', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();

    defendTextButton.on('pointerover', function (pointer) {
        defendTextButton.setTint(0x44ff44);
    });
    defendTextButton.on('pointerout', function (pointer) {
        defendTextButton.clearTint();
    });
    defendTextButton.on('pointerdown', function (pointer) {
        defendTextButton.setTint(0xff0000);
        slashButton.setVisible(false);
        fireBallButton.setVisible(false);
        blockButton.setVisible(true);
        console.log('defend selected')
    });
    defendTextButton.on('pointerup', function (pointer) {
      test.call(this);
      //this.player.test();
      //player.test();
    });
    

    /*
    function test() {
      console.log('success')
    }
    */

    // Defend options //
    let blockButton = this.add.text(140, 120, 'BLOCK', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();
    blockButton.setVisible(false);
  }

/*
defendTextButton.on('pointerup', () => {this.test()}); <--- inside create()

test() {                                               <--- outside create()
  console.log('success')
}
*/
}