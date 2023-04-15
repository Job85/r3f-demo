import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

function Sphere({ args, colors, stops, ...props }) {

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
            scale={active ? 2.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <sphereGeometry args={args} />
            <meshBasicMaterial>
                <GradientTexture
                    stops={stops}
                    colors={colors}
                />
            </meshBasicMaterial>
        </mesh>
    )
}

export default Sphere;