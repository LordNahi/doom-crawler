import Phaser from "phaser";

import Pawn from "../../abstract/pawn";
import { Controllable } from "./base";

interface KeyboardInputs {
  W: Phaser.Input.Keyboard.Key;
  S: Phaser.Input.Keyboard.Key;
  A: Phaser.Input.Keyboard.Key;
  D: Phaser.Input.Keyboard.Key;
}

export class Keyboard implements Controllable {
  inputs: KeyboardInputs;
  pawn: Pawn;
  maxVelocity = 200;

  constructor(pawn: Pawn) {
    this.inputs = pawn.scene.input.keyboard.addKeys(
      "W,A,S,D"
    ) as KeyboardInputs;
    this.pawn = pawn;
    this.pawn.setDrag(this.maxVelocity);
    this.pawn.setAngularDrag(this.maxVelocity);
    this.pawn.setMaxVelocity(this.maxVelocity);
  }

  update = () => {
    this.pawn.setAcceleration(0);

    if (this.inputs.W.isDown) {
      this.pawn.setAccelerationY(-this.maxVelocity * 3);
    }
    if (this.inputs.S.isDown) {
      this.pawn.setAccelerationY(this.maxVelocity * 3);
    }
    if (this.inputs.A.isDown) {
      this.pawn.setAccelerationX(-this.maxVelocity * 3);
    }
    if (this.inputs.D.isDown) {
      this.pawn.setAccelerationX(this.maxVelocity * 3);
    }
  };
}
