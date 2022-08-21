import Pawn from "../abstract/pawn";

export enum Compass {
  SOUTH_EAST,
  SOUTH,
  SOUTH_WEST,
  WEST,
  NORTH_WEST,
  NORTH,
  NORTH_EAST,
  EAST,
}

export const getWalkAnimation = (pawn: Pawn) => {
  switch (pawn.faceDirection) {
    case Compass.NORTH:
      return "W_N";
    case Compass.NORTH_EAST:
      return "W_NE";
    case Compass.EAST:
      return "W_E";
    case Compass.SOUTH_EAST:
      return "W_SE";
    case Compass.SOUTH:
      return "W_S";
    case Compass.SOUTH_WEST:
      return "W_SW";
    case Compass.WEST:
      return "W_W";
    case Compass.NORTH_WEST:
      return "W_NW";
  }
};

export const generateRotationAnimations = (
  pawn: Pawn,
  key: string,
  duration = 50
) => {
  try {
    pawn.anims.create({
      key: `W_N`,
      frames: [
        { frame: `${key}A5`, duration, key: `${key}` },
        { frame: `${key}B5`, duration, key: `${key}` },
        { frame: `${key}C5`, duration, key: `${key}` },
        { frame: `${key}D5`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_NE`,
      frames: [
        { frame: `${key}A4A6`, duration, key: `${key}` },
        { frame: `${key}B4B6`, duration, key: `${key}` },
        { frame: `${key}C4C6`, duration, key: `${key}` },
        { frame: `${key}D4D6`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_E`,
      frames: [
        { frame: `${key}A3A7`, duration, key: `${key}` },
        { frame: `${key}B3B7`, duration, key: `${key}` },
        { frame: `${key}C3C7`, duration, key: `${key}` },
        { frame: `${key}D3D7`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_SE`,
      frames: [
        { frame: `${key}A2A8`, duration, key: `${key}` },
        { frame: `${key}B2B8`, duration, key: `${key}` },
        { frame: `${key}C2C8`, duration, key: `${key}` },
        { frame: `${key}D2D8`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_S`,
      frames: [
        { frame: `${key}A1`, duration, key: `${key}` },
        { frame: `${key}B1`, duration, key: `${key}` },
        { frame: `${key}C1`, duration, key: `${key}` },
        { frame: `${key}D1`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_SW`,
      frames: [
        { frame: `${key}A2A8`, duration, key: `${key}` },
        { frame: `${key}B2B8`, duration, key: `${key}` },
        { frame: `${key}C2C8`, duration, key: `${key}` },
        { frame: `${key}D2D8`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_W`,
      frames: [
        { frame: `${key}A3A7`, duration, key: `${key}` },
        { frame: `${key}B3B7`, duration, key: `${key}` },
        { frame: `${key}C3C7`, duration, key: `${key}` },
        { frame: `${key}D3D7`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
    pawn.anims.create({
      key: `W_NW`,
      frames: [
        { frame: `${key}A4A6`, duration, key: `${key}` },
        { frame: `${key}B4B6`, duration, key: `${key}` },
        { frame: `${key}C4C6`, duration, key: `${key}` },
        { frame: `${key}D4D6`, duration, key: `${key}` },
      ],
      frameRate: 8,
      repeat: -1,
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Failed to generate rotation animation");
    }
  }
};
