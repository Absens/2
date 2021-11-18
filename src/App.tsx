import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraLight } from "./CameraLight";
import { Earth } from "./Earth";

export type Coord = {
  title: string;
  lat: number;
  lon: number;
  hash?: string;
  icon?: string;
  link?: string;
  location?: string;
  description?: string;
};

const coords: Coord[] = [
  {
    title: "Энергомикс",
    lat: 54.890536,
    lon: 20.599515,
    hash: "#energomiks",
    icon: "/logo_small.png",
    link: "/portfolio/energomiks/",
    location: "Аэропорт Храброво, Калининград, Россия",
    description: "Авиационный ангар для стоянки и обслуживания вертолетов"
  },
  {
    title: "СМТ",
    lat: 55.753215,
    lon: 37.622504,
    hash: "#energomiks",
    icon: "/logo_small.png",
    link: "/portfolio/energomiks/",
    location: "Аэропорт Храброво, Калининград, Россия",
    description: "Авиационный ангар для стоянки и обслуживания вертолетов"
  },
  {
    title: "Алерс Рус",
    lat: 51.525437,
    lon: -0.127108,
    hash: "#london",
    icon: "/logo_small.png",
    link: "/test/",
    location: "Санкт-Петербург, Россия",
    description:
      "Мобильный надувной склад для хранения медицинского оборудования стоимостью около 40 миллиардов рублей"
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
      <Canvas dpr={[1, 1]}>
        <color attach="background" args={[0x111111]} />
        <CameraLight />
        <Earth coords={coords} />
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.2}
          autoRotate
          minDistance={2}
          maxDistance={3}
        />
      </Canvas>
    </Suspense>
  );
}
