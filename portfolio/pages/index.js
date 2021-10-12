import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Lights from './Lights'
import Model from './TestModel'
import Header from './Header'
import { PerspectiveCamera, OrbitControls} from '@react-three/drei'
import MenuButton from './MenuButton'
import Project from './Project'
import Team from './Team'
import Blog from './Blog'
import MadeWith from './MadeWith'

export default function Home() {

  const [showNav, setShowNav] = useState(false)
  const [currentView, setCurrentView] = useState(0)

  const cameraRef = useRef();

  let y = 0;

  return (
    <div className = 'ultimate-container'>
      <div className='main-container' id='home'>
        <MenuButton showNav={showNav} setShowNav={setShowNav} currentView={currentView} setCurrentView={setCurrentView}/>
        <Header headline='TEAM7' info='WORKS LIKE A MACHINE!'/>
        <MadeWith path='nextjs.png' top='calc(18% - 50px)' />
        <MadeWith path='threejs.png' top='calc(18% + 50px)'/>
        <main>
          <Canvas style={{cursor:'pointer'}}>
            <OrbitControls enableZoom={false}/>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[-2.654673, 2.4060176, -1.7786442]}/>
            <Lights/>
            <Suspense fallback={null}>
              <Model position={[0,0,0]}/>
            </Suspense>
            <AnimateFrame cameraRef={cameraRef} speed={0.1}/>
          </Canvas>
        </main>
      </div>

      <Project/>
      <Team/>
      <Blog/>

    </div>
  )
}

const AnimateFrame = (props) => {
  useFrame((state) => {
    //console.log(props.cameraRef.current.position)
    console.log(state)
  });
  return null;
}