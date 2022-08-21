import "phaser";
import PawnFactory from "~/objects/pawns/utils/pawnFactory";

const ASSETS_PATH = "../src/assets/";

export class MainScene extends Phaser.Scene {
  private pawnFactory!: PawnFactory;

  constructor() {
    super({ key: "MainScene" });
  }

  public preload() {
    this.load.setBaseURL(ASSETS_PATH);
    this.load.atlas("PLAY", "./player/player.png", "./player/player.json");
    this.load.image("floor", "./floor/FLOOR4_6.png");
  }

  public create() {
    this.pawnFactory = new PawnFactory(this);

    this.add.existing(this.pawnFactory);

    const floor = this.add.image(0, 0, "floor");
    floor.setOrigin(0);
    floor.setScale(20);
    floor.width = this.cameras.main.width;
    floor.height = this.cameras.main.height;

    this.pawnFactory.spawnDoomGuy(600, 300);
  }
}
