import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import "./App.css";
import { Physics } from "@react-three/cannon";
import World from "./components/World";
import Box from "./components/Box";

function App() {
  return (
    <Canvas>
      <OrbitControls /> 
      <Stars />
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <World />
      </Physics>
    </Canvas>
  );
}

export default App;
