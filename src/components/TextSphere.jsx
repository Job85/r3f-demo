import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { createPortal, useFrame } from '@react-three/fiber';
import { Text, Shadow, OrthographicCamera, OrbitControls } from '@react-three/drei';


const TextSphere = ({ children }) => {
    const cam = useRef()
    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color('white')
        const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {
            format: THREE.RGBFormat,
            stencilBuffer: false
        })
        target.samples = 8
        return [scene, target]
    }, [])

    useFrame(state => {
        state.gl.setRenderTarget(target)
        state.gl.render(scene, cam.current)
        state.gl.setRenderTarget(null)
    })

    return (
        <>
            <OrthographicCamera
                ref={cam}
                position={[0, 0, 10]}
                zoom={10}
            />
            {createPortal(
                <Text
                    color="#be12fb"
                    fontSize={4}
                    mmaxWidth={60}
                    lineHeight={1}
                    letterSpacing={-0.1}
                    textAlign='left'
                    text={children}
                    anchorX="center"
                    anchorY="middle"
                    {...children}
                >
                </Text>,
                scene
            )}
            <mesh>
                <sphereBufferGeometry attach='geometry' args={[3, 64, 32]} />
                <meshStandardMaterial attach='material' map={target.texture} />
            </mesh>
        </>
    )
}

export default TextSphere