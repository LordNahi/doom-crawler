import Pawn from "./abstract/pawn";

class DoomGuy extends Pawn {
  private lastPointer = { x: 0, y: 0 };
  private mouseOct = 1;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");

    this.originX = 0.5;
    this.originY = 1;

    /**
     * TODO:
     *
     * You're going to need to do this for every character type, so you're
     * gonna need to streamline this ...
     */

    this.anims.create({
      key: "W_N",
      frames: [
        { frame: "PLAYA5", duration: 50, key: "player" },
        { frame: "PLAYB5", duration: 50, key: "player" },
        { frame: "PLAYC5", duration: 50, key: "player" },
        { frame: "PLAYD5", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_S",
      frames: [
        { frame: "PLAYA1", duration: 50, key: "player" },
        { frame: "PLAYB1", duration: 50, key: "player" },
        { frame: "PLAYC1", duration: 50, key: "player" },
        { frame: "PLAYD1", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_NE",
      frames: [
        { frame: "PLAYA4A6", duration: 50, key: "player" },
        { frame: "PLAYB4B6", duration: 50, key: "player" },
        { frame: "PLAYC4C6", duration: 50, key: "player" },
        { frame: "PLAYD4D6", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_E",
      frames: [
        { frame: "PLAYA3A7", duration: 50, key: "player" },
        { frame: "PLAYB3B7", duration: 50, key: "player" },
        { frame: "PLAYC3C7", duration: 50, key: "player" },
        { frame: "PLAYD3D7", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_SE",
      frames: [
        { frame: "PLAYA2A8", duration: 50, key: "player" },
        { frame: "PLAYB2B8", duration: 50, key: "player" },
        { frame: "PLAYC2C8", duration: 50, key: "player" },
        { frame: "PLAYD2D8", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_NW",
      frames: [
        { frame: "PLAYA4A6", duration: 50, key: "player" },
        { frame: "PLAYB4B6", duration: 50, key: "player" },
        { frame: "PLAYC4C6", duration: 50, key: "player" },
        { frame: "PLAYD4D6", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_W",
      frames: [
        { frame: "PLAYA3A7", duration: 50, key: "player" },
        { frame: "PLAYB3B7", duration: 50, key: "player" },
        { frame: "PLAYC3C7", duration: 50, key: "player" },
        { frame: "PLAYD3D7", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "W_SW",
      frames: [
        { frame: "PLAYA2A8", duration: 50, key: "player" },
        { frame: "PLAYB2B8", duration: 50, key: "player" },
        { frame: "PLAYC2C8", duration: 50, key: "player" },
        { frame: "PLAYD2D8", duration: 50, key: "player" },
      ],
      frameRate: 8,
      repeat: -1,
    });

    this.anims.play("W_S");
  }

  update() {
    super.update();
    this.updateRotation();
    this.updateAnimation();
  }

  updateRotation() {
    const mx = this.scene.input.activePointer.worldX;
    const my = this.scene.input.activePointer.worldY;
    const np = { x: mx, y: my };

    if (this.lastPointer.x !== np.x || this.lastPointer.y !== np.y) {
      this.lastPointer = np;

      const { Between, Normalize } = Phaser.Math.Angle;

      const q = Phaser.Math.PI2 / 8;
      const a = Normalize(Between(this.x, this.y, mx, my) - q / 2);

      const result = Math.floor(a / q);

      this.mouseOct = result;
    }
  }

  updateAnimation() {
    this.scaleX = 1;

    switch (this.mouseOct) {
      case 0:
        this.anims.play("W_SE");
        this.scaleX = -1;
        break;
      case 1:
        this.anims.play("W_S");
        break;
      case 2:
        this.anims.play("W_SW");
        break;
      case 3:
        this.anims.play("W_W");
        break;
      case 4:
        this.anims.play("W_NW");
        break;
      case 5:
        this.anims.play("W_N");
        break;
      case 6:
        this.anims.play("W_NE");
        this.scaleX = -1;
        break;
      case 7:
        this.anims.play("W_E");
        this.scaleX = -1;
        break;
    }
  }
}

export default DoomGuy;
