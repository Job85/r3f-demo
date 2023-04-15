import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import rubik from "../assets/Rubik Medium_Italic.json";

extend({ TextGeometry })

export default function Text() {
    const font = new FontLoader().parse(rubik);

    return (
        <mesh>
            <pointLight color="white" position={[10, 10, 10]} />
            <directionalLight color="red" position={[0, 20, 0]} />
            <textGeometry args={['How Cool Is This!?!', { font, size: .5, height: .5 }]} />
            <meshNormalMaterial attach="material" color={"pink"} />
        </mesh>
    )
}