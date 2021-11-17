import { Html } from "@react-three/drei";
import type { MutableRefObject } from "react";
import type { Vector3 } from "three";
import { Object3D } from "three";
import { Coord } from "./App";

export interface PointProps {
  forwardRef: MutableRefObject<Object3D | undefined>;
  coord: Coord;
  position: Vector3;
}

export function Point({
  forwardRef,
  coord,
  position
}: PointProps): JSX.Element {
  return (
    <Html
      className={`point  ${coord.hash ? "hasHash" : ""}`}
      position={position}
      occlude={[forwardRef]}
    >
      {coord.icon ? (
        <img
          onClick={(e) => (window.location.hash = coord.hash)}
          alt={coord.title}
          title={coord.title}
          src={coord.icon}
        />
      ) : (
        <button onClick={(e) => (window.location.hash = coord.hash)}>
          {coord.title}
        </button>
      )}

      <div className="text">{coord.description}</div>
    </Html>
  );
}
