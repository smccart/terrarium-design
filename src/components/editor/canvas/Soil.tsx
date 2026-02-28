import { useMemo } from 'react'
import * as THREE from 'three'

export function Soil() {
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(1.15, 0.0),
      new THREE.Vector2(1.15, 0.3),
      new THREE.Vector2(1.0, 0.45),
      new THREE.Vector2(0.5, 0.5),
      new THREE.Vector2(0.001, 0.55),
    ]
    const geo = new THREE.LatheGeometry(points, 64)
    geo.computeVertexNormals()
    return geo
  }, [])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#5c3a1e" roughness={0.95} metalness={0} />
    </mesh>
  )
}
