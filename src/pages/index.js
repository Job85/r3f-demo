import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'baseUrl/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Controls from 'baseUrl/components/OrbitControls'
import Scene from 'baseUrl/components/Scene'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Scene />
      </>
    </>
  )
}
