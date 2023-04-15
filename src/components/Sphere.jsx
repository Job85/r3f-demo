import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

function Sphere(props) {
    const myPurple = "#be12fb";
    const myBlue = "#12c3fb";
    const myGreen = "#4ffb12";

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += delta))
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
            <sphereGeometry args={[3, 40, 20]} />
            {/* <sphereGeometry args={[3, 16, 15]} />  creates sun like sphere with useFrame motion*/}
            <meshBasicMaterial>
                <GradientTexture
                    stops={[0.0, 0.5, 1.0]}
                    colors={[myPurple, myBlue, myGreen]}
                />
            </meshBasicMaterial>

        </mesh>
    )
}

export default Sphere;