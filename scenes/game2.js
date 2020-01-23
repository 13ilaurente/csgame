import sprite from '../classes/sprite.js';
import player from '../classes/player.js';
import enemy from '../classes/enemy.js';


export default class gameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  preload() {
    // Player idle animation //
    this.anims.create({
      key: 'playerIdle', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 0, end: 2}),
      frameRate: 8,
      repeat: -1
    });

    // Player slash animation //
    this.anims.create({
      key: 'playerSlash', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 53, end: 57}),
      frameRate: 8,
    });

    // Player Fire Ball animation //
    this.anims.create({
      key: 'playerFireBall', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 85, end: 93}),
      frameRate: 8,
    });

    // Player Block animation //
    this.anims.create({
      key: 'playerBlock', // name of animation
      frames: this.anims.generateFrameNames('player', {start: 59, end: 64}),
      frameRate: 7,
    });

    // Slime idle animation //
    this.anims.create({
      key: 'slimeIdle', // name of animation
      frames: this.anims.generateFrameNames('slime', {start: 0, end: 3}),
      frameRate: 8,
      repeat: -1
    });
  }

  create() {
    // Background image //
    this.background = this.add.image(0, -50, "forest-background");
    this.background.setOrigin(0, 0);

    let user = [];
    let enemies = [];

    let my_player = new player(this, 60, 90, 100, 100);
    user.push(my_player);

    let randHP = Phaser.Math.Between(25, 70);
    let opponent = new enemy(this, 180, 90, randHP, 100);
    enemies.push(opponent);

    console.log('player alive check:' + my_player.alive);
    console.log(user);
    console.log(enemies);

//----------------------------------------------------------------------------------------------------//
    
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
    slashButton.on('pointerover', function (pointer) {
        slashButton.setTint(0x44ff44);
    });
    slashButton.on('pointerout', function (pointer) {
        slashButton.clearTint();
    });
    slashButton.on('pointerdown', function (pointer) {
        slashButton.setTint(0xff0000);
        console.log('slash sleceted');
        my_player.slash();
        console.log(my_player.slash());
    });

    let fireBallButton = this.add.text(132, 135, 'FIRE BALL', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();
    fireBallButton.setVisible(false);
    fireBallButton.on('pointerover', function (pointer) {
        fireBallButton.setTint(0x44ff44);
    });
    fireBallButton.on('pointerout', function (pointer) {
        fireBallButton.clearTint();
    });
    fireBallButton.on('pointerdown', function (pointer) {
        fireBallButton.setTint(0xff0000);
        console.log('fire ball sleceted');
        my_player.fireBall();
        console.log(my_player.fireBall());
    });

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
        console.log('defend selected');
    });

    // Defend options //
    let blockButton = this.add.text(140, 120, 'BLOCK', {fontFamily: 'Arial', fontSize: 10}).setResolution(14).setInteractive();
    blockButton.setVisible(false);
    blockButton.on('pointerover', function (pointer) {
        blockButton.setTint(0x44ff44);
    });
    blockButton.on('pointerout', function (pointer) {
        blockButton.clearTint();
    });
    blockButton.on('pointerdown', function (pointer) {
        blockButton.setTint(0xff0000);
        console.log('block sleceted');
        my_player.block();
        console.log(my_player.block());
    });
  }
}
