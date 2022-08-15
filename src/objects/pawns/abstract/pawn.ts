import { Vector } from "matter";
import "phaser";

export type FaceDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

abstract class Pawn extends Phaser.GameObjects.Sprite {
  faceDirection: FaceDirection = "S";

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame?: string | number | undefined
  ) {
    super(scene, x, y, texture, frame);
  }
}

export default Pawn;
