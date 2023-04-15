import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import Controls from './OrbitControls';
import Sphere from './Sphere';

export default function Scene() {

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Sphere />
                <Controls />
            </Canvas>
        </div>
    )
}