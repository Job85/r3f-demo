import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Sphere({ args, colors, stops, ...props }) {

    const colorMap = useLoader(TextureLoader, '../Terrain/Terrain001_4K_Color.jpg')
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.y += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
        // scale={active ? 2.5 : 1}
        // onClick={(event) => setActive(!active)}
        // onPointerOver={(event) => setHover(true)}
        // onPointerOut={(event) => setHover(false)}
        >
            <ambientLight color={'white'} intensity={0.9} />
            <sphereGeometry args={args} />
            <meshBasicMaterial map={colorMap}>
                <GradientTexture
                    stops={stops}
                    colors={colors}
                />
            </meshBasicMaterial>
        </mesh>
    )
}

export default Sphere;