/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations, useCubeTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/gears.gltf')
  const { actions } = useAnimations(animations, group)

  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();

  const envMap = useCubeTexture(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'], { path: 'hdr3/' })


  const texture = useLoader(TextureLoader, 'metal.jpg')
  const material = <meshPhysicalMaterial attach='material' metalness={1} roughness={0.1} envMap={envMap} />



  return (
    <group ref={group} {...props} dispose={null} scale='0.5'>

      <mesh ref={six} name="Cylinder" geometry={nodes.Cylinder.geometry}>
        {material}
      </mesh>

      <mesh ref={one} geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[-2.21, 0, 0.39]}>
        {material}
      </mesh>

      <mesh ref={two} geometry={nodes.Cylinder002.geometry} position={[3.18, -0.48, -0.95]}>
        {material}
      </mesh>

      <mesh ref={three} geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} position={[0, -0.31, 0]}>
        {material}
      </mesh>

      <mesh ref={four} geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} position={[0.28, -0.99, -2.62]}>
        {material}
      </mesh>


      <mesh ref={five} geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} position={[3.18, -0.99, -0.95]}>
        {material}
      </mesh>

      <AnimateFrame meshRef={one} speed={-0.004}/>
      <AnimateFrame meshRef={two} speed={-0.008}/>
      <AnimateFrame meshRef={three} speed={0.004}/>
      <AnimateFrame meshRef={four} speed={0.008}/>
      <AnimateFrame meshRef={five} speed={-0.004}/>
      <AnimateFrame meshRef={six} speed={0.004}/>
    </group>
  )
}

useGLTF.preload('/gears.gltf')


const AnimateFrame = (props) => {
  useFrame(({ clock }) => {
    props.meshRef.current.rotation.y += props.speed;
    props.meshRef.current.rotation.z = 0.00;
    props.meshRef.current.rotation.x = 0.00;
  });
  return null;
}