import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Lights from './Lights'
import Model from './TestModel'
import Header from './Header'
import { PerspectiveCamera, OrbitControls} from '@react-three/drei'
import MenuButton from './MenuButton'
import Project from './Project'
import Team from './Team'
import Blog from './Blog'

export default function Home() {

  const [showNav, setShowNav] = useState(false)
  const [currentView, setCurrentView] = useState(0)

  return (
    <div className = 'ultimate-container'>
      <div className='main-container' id='home'>
        <MenuButton showNav={showNav} setShowNav={setShowNav} currentView={currentView} setCurrentView={setCurrentView}/>
        <Header headline='TEAM7' info='WORKS LIKE A MACHINE!'/>
        <main>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <PerspectiveCamera makeDefault position={[0, 4, 0]}/>
            <Lights/>
            <Suspense fallback={null}>
              <Model position={[0,0,0]}/>
            </Suspense>
          </Canvas>
        </main>

        <footer>
        </footer>
      </div>

      <Project/>
      <Team/>
      <Blog/>

    </div>
  )
}
