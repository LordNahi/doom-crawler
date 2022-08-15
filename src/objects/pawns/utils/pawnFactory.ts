import "phaser";
import DoomGuy from "../player";

class PawnFactory extends Phaser.GameObjects.Group {
  constructor(
    scene: Phaser.Scene,
    children?:
      | Phaser.GameObjects.GameObject[]
      | Phaser.Types.GameObjects.Group.GroupConfig
      | Phaser.Types.GameObjects.Group.GroupCreateConfig
      | undefined,
    config?:
      | Phaser.Types.GameObjects.Group.GroupConfig
      | Phaser.Types.GameObjects.Group.GroupCreateConfig
      | undefined
  ) {
    super(scene, children, config);
  }

  public spawnDoomGuy = (x: number, y: number) => {
    this.add(new DoomGuy(this.scene, x, y), true);
  };

  public spawnZombie = () => {
    /* TODO */
  };

  public spawnZombieShotgun = () => {
    /* TODO */
  };

  preUpdate() {
    this.children.entries.forEach((child) => child.update());
  }
}

export default PawnFactory;
