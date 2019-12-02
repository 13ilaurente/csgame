export default class sprite extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, hp: number, texture: string, frame: number) {
    super(scene, x, y, hp, mana, texture, frame)
  }
}