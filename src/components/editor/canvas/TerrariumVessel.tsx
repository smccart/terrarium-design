import { useMemo } from 'react'
import * as THREE from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'

export function TerrariumVessel() {
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector2(0.001, 0.0),   // center bottom (offset to avoid normal issues)
      new THREE.Vector2(1.2, 0.0),     // bottom edge
      new THREE.Vector2(1.3, 0.05),    // slight lip at bottom
      new THREE.Vector2(1.3, 0.1),     // bottom corner
      new THREE.Vector2(1.3, 2.0),     // straight side
      new THREE.Vector2(1.28, 2.3),    // start of shoulder curve
      new THREE.Vector2(1.15, 2.6),    // shoulder
      new THREE.Vector2(0.9, 2.85),    // upper shoulder
      new THREE.Vector2(0.5, 3.05),    // near top
      new THREE.Vector2(0.2, 3.12),    // dome
      new THREE.Vector2(0.001, 3.15),  // top center
    ]
    const geo = new THREE.LatheGeometry(points, 64)
    geo.computeVertexNormals()
    return geo
  }, [])

  return (
    <mesh geometry={geometry}>
      <MeshTransmissionMaterial
        transmission={0.95}
        thickness={0.5}
        roughness={0.05}
        chromaticAberration={0.03}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0}
        color="#f0f8f0"
        samples={6}
        resolution={512}
        backside
        backsideThickness={0.3}
        backsideEnvMapIntensity={0.5}
      />
    </mesh>
  )
}
