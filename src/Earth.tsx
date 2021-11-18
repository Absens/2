import { Sphere, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { Object3D } from "three";
import type { Coord } from "./App";
import { Point } from "./Point";
import { coordToVec3 } from "./utils";

export interface EarthProps {
  coords: Coord[];
}

export function Earth({ coords }: EarthProps): JSX.Element {
  const forwardRef = useRef<Object3D | undefined>();
  const [earthColor, ocean] = useTexture([
    "/textures/earth-color.jpg",
    "/textures/earth-ocean.jpg"
  ]);

  const radius = 1;
  return (
    <group rotation={[0.4, 3, 0]}>
      {coords.map((coord) => (
        <Point
          position={coordToVec3(coord.lat, coord.lon, radius).position}
          key={coord.hash}
          coord={coord}
          forwardRef={forwardRef}
        />
      ))}

      <Sphere ref={forwardRef} args={[radius, 32, 32]}>
        <meshPhongMaterial
          specularMap={ocean}
          specular={0x404040}
          map={earthColor}
          shininess={30}
        />
      </Sphere>
    </group>
  );
}

useTexture.preload("/textures/albedo.jpg");
useTexture.preload("/textures/ocean-mask.jpg");
