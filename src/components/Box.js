import React from 'react'
import { useBox } from '@react-three/cannon'
export default function Box() {
    const [ref] = useBox(() => ({mass:1}))
  return (
    <mesh ref = {ref} position = {[0,2,0]}>
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color="blue" />
  </mesh>
)
  
}
