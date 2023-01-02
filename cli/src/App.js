import React, { useEffect, useRef, useState } from "react"
import {useBox} from "@react-three/cannon"
import { MeshNormalMaterial, BoxBufferGeometry } from 'three'
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:3001")

const speed = 2

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
