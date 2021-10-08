import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar'
import Lights from './Lights'
import Model from './TestModel'
import Header from './Header'
import { PerspectiveCamera, OrbitControls} from '@react-three/drei'
import MenuButton from './MenuButton'

export default function Home() {

  const [showNav, setShowNav] = useState(false)

  return (
    <div>
      <div className='main-container'>
        <MenuButton showNav={showNav} setShowNav={setShowNav}/>
        <Navbar showNav={showNav} />
        <Header/>
        <main>
          <Canvas>
            <OrbitControls />
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

      <div>

      </div>

    </div>
  )
}
