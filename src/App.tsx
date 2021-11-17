import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraLight } from "./CameraLight";
import { Earth } from "./Earth";
import { Stars } from "./Stars";

export type Coord = {
  title: string;
  lat: number;
  lon: number;
  hash?: string;
  icon?: string;
  description?: string;
};

const coords: Coord[] = [
  {
    title: "London",
    lat: 51.525437,
    lon: -0.127108,
    hash: "#london",
    icon: "/me.png",
    description: "Lorem ipsum, dolor"
  },

  {
    title: "Indonesia",
    lat: -2.44314,
    lon: 133.139,
    hash: "#indonesia",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
  },

  {
    title: "Brazil",
    lat: -21.811314,
    lon: -40.981673,
    hash: "#brazil",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
  }
];

export function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <p>Spinner</p>
        </div>
      }
    >
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={[0x000000]} />

        <CameraLight />
        <Stars />
        <Earth coords={coords} />
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.1}
          autoRotate
          minDistance={2}
          maxDistance={3}
        />
      </Canvas>
    </Suspense>
  );
}
