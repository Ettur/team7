import React, { useRef, useState } from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import Navbar from './Navbar'
import Lights from './Lights'
import Model from './TestModel'

export default function Home() {
  return (
    <div>
      <div className='flex-center header-container'>

          <h1>Martin</h1>

      </div>

      <Navbar/>


      <main>

        <Canvas colorManagement camera={{ position: [0,1,5]}} className=''>
          <Lights/>
          <Suspense fallback={null}>
            <Model position={[0,0,0]}/>
          </Suspense>
        </Canvas>

      </main>

      <footer>

      </footer>
    </div>
  )
}
