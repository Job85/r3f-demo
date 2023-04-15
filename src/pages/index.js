import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'baseUrl/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Controls from 'baseUrl/components/OrbitControls'
import Scene from 'baseUrl/components/Scene'
import ThreeJsScene from 'baseUrl/components/ThreeJsScene';


export default function Home() {
  return (
    <>

      <>
        {/* <ThreeJsScene /> */}
        <Scene />
      </>
    </>
  )
}
