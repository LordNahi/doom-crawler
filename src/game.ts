import { MainScene } from "./scenes/mainScene";
import windowConfig from "../window.json";

const config: GameConfig = {
  type: Phaser.AUTO,
  render: {
    antialias: false,
  },
  width: windowConfig.width,
  height: windowConfig.height,
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
