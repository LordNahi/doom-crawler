import "phaser";

import { Compass, generateRotationAnimations } from "../utils/util";

abstract class Pawn extends Phaser.Physics.Arcade.Sprite {
  faceDirection: Compass = Compass.SOUTH;
  pScale = 1;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | number | undefined
  ) {
    super(scene, x, y, texture, frame);

    generateRotationAnimations(this, texture, 5);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(this.pScale);
  }

  updateFaceDirection(direction: Compass) {
    if (direction === this.faceDirection) return;

    this.faceDirection = direction;
    this.setScale(this.pScale);

    switch (this.faceDirection) {
      case Compass.SOUTH_EAST:
        this.anims.play("W_SE");
        this.setScale(-this.pScale, this.pScale);
        break;
      case Compass.SOUTH:
        this.anims.play("W_S");
        break;
      case Compass.SOUTH_WEST:
        this.anims.play("W_SW");
        break;
      case Compass.WEST:
        this.anims.play("W_W");
        break;
      case Compass.NORTH_WEST:
        this.anims.play("W_NW");
        break;
      case Compass.NORTH:
        this.anims.play("W_N");
        break;
      case Compass.NORTH_EAST:
        this.anims.play("W_NE");
        this.setScale(-this.pScale, this.pScale);
        break;
      case Compass.EAST:
        this.anims.play("W_E");
        this.setScale(-this.pScale, this.pScale);
        break;
    }
  }
}

export default Pawn;
