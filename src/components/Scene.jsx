import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import Controls from './OrbitControls';
import Sphere from './Sphere';
import SphereDisplay from './SphereDisplay';
import TextRing from './TextRing';
import TextSphere from './TextSphere';
import { Model } from '../../Forest_leaves_02_1k';

export default function Scene() {

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas}
                camera={{ position: [0, 0, 150], fov: 40 }}
            >
                {/* <ambientLight intensity={0.5} /> */}
                {/* <pointLight position={[10, 10, 10]} /> */}
                {/* <SphereDisplay /> */}
                {/* <Sphere
                    args={[3, 64, 32]}
                    stops={[0.2, 0.5, 1.0]}
                    colors={['orange', 'red', 'orange']}
                    position={[-5, 5, 5]}
                /> */}
                {/* <Model /> */}
                {/* <Sphere
                    args={[3, 64, 32]}
                    stops={[0.0, 0.5, 0.8]}
                    colors={['yellow', 'orange', 'green']}
                    position={[5, 5, 5]}
                >
                    Text Goes Here
                </Sphere> */}
                {/* <TextSphere> */}
                {/* JavaScript */}
                {/* </TextSphere> */}
                <Controls />
            </Canvas>
        </div>
    )
}