import React from 'react'
import {usePlane} from "@react-three/cannon"
export default function World() {
    const [ref] = usePlane(() => ({
        rotation:[-Math.PI /2,0,0],
    }));
  return (
    <mesh rotation = {[-Math.PI /2,0,0]}>
        <planeBufferGeometry attach= "geometry" args ={[100,100]}  />
        <meshLambertMaterial attach = "material" color = "white" />
    </mesh>
  )
}
