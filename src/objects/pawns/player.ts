import Pawn from "./abstract/pawn";
import { Keyboard } from "./utils/movementStrategies/keyboard";
import {
  Compass,
  generateRotationAnimations,
  getWalkAnimation,
} from "./utils/util";

enum PlayerState {
  IDLE,
  MOVE,
  ATTACK,
}

class DoomGuy extends Pawn {
  private lastPointer = { x: 0, y: 0 };
  private keyboard: Keyboard;
  private playerState: PlayerState;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "PLAY");
    this.keyboard = new Keyboard(this);

    this.originX = 0.5;
    this.originY = 1;

    this.playerState = PlayerState.IDLE;
  }

  update() {
    super.update();
    this.keyboard.update();
    this.updateMouse();
    this.updateAnimationState();
  }

  updateAnimationState() {
    switch (this.playerState) {
      case PlayerState.IDLE:
        this.anims.pause();

        if (!!this.body.velocity.x || !!this.body.velocity.y) {
          this.anims.play(getWalkAnimation(this));
          this.playerState = PlayerState.MOVE;
        }
        break;
      case PlayerState.ATTACK:
        break;
      case PlayerState.MOVE:
        if (!this.body.velocity.x && !this.body.velocity.y) {
          this.playerState = PlayerState.IDLE;
        }
        break;
    }
  }

  updateMouse() {
    const mx = this.scene.input.activePointer.worldX;
    const my = this.scene.input.activePointer.worldY;
    const np = { x: mx, y: my };

    if (this.lastPointer.x !== np.x || this.lastPointer.y !== np.y) {
      this.lastPointer = np;

      const { Between, Normalize } = Phaser.Math.Angle;

      const q = Phaser.Math.PI2 / 8;
      const a = Normalize(Between(this.x, this.y, mx, my) - q / 2);

      const result = Math.floor(a / q);

      if (this.faceDirection !== result) {
        this.updateFaceDirection(result);
      }
    }
  }
}

export default DoomGuy;
