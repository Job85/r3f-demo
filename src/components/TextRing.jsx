import React, { useRef, useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Cylinder, MeshWobbleMaterial, Icosahedron } from "@react-three/drei";

function text(children, color) {
    const fontSize = 450

    const canvas = document.createElement('textCanvas')
    canvas.width = 2048
    canvas.height = 2048
    const context = canvas.getContext('2d')

    context.fillStyle = 'transparent'
    context.fillReact(0, 0, canvas.width, canvas.height)

    context.font = `italic ${fontSize}px `
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = color
    context.fillTexxt(children, 1024, canvas.height / 2)

    return textCanvas
}

function TextRing({ children }) {

    const canvas = useMemo(() => {
        return text(children, 'white')
    }, [children])

    const backCanvas = useMemo(() => {
        return text(children, 'white')
    }, [children])

    const texture = useRef()
    const texture2 = useRef()

    useFrame(({ clock }) => {
        texture.current.offset.x = clock.getElapsedTime() / 2
        texture2.current.offset.x = clock.getElapsedTime() / 2
    })

    const cylArgs = [1, 1, 1, 64, 1, true]

    return (
        <group rotation-y={Math.PI / 4} scale={[1, 1, 1]}>
            <Cylinder args={cylArgs} side={THREE.FrontSide}>
                <meshStandardMaterial transparent attach='material'>
                    <canvasTexture
                        attach='map'
                        repeat={[4, 1]}
                        image={canvas}
                        premultiplyAlpha
                        ref={texture}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        onUpdate={(s) => (s.needsUpdate) = true}
                    />
                </meshStandardMaterial>
            </Cylinder>

            <Cylinder args={cylArgs}>
                <meshStandardMaterial
                    attach='material'
                    side={THREE.BackSide}
                >
                    <canvasTexture
                        attach='map'
                        repeat={[8, 1]}
                        image={backCanvas}
                        premultiplyAlpha
                        ref={texture2}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        onUpdate={(s) => (s.needsUpdate = true)}
                    />
                </meshStandardMaterial>
            </Cylinder>
        </group>
    )
}

export default TextRing