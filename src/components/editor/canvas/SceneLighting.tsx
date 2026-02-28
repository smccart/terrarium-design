import { Environment } from '@react-three/drei'

export function SceneLighting({ isDark }: { isDark: boolean }) {
  return (
    <>
      <Environment
        preset="lobby"
        environmentIntensity={isDark ? 0.3 : 0.8}
        backgroundBlurriness={1}
        backgroundIntensity={0}
      />

      <ambientLight intensity={isDark ? 0.15 : 0.4} />

      {/* Key light */}
      <directionalLight
        position={[5, 8, 3]}
        intensity={isDark ? 0.6 : 1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />

      {/* Fill light */}
      <directionalLight
        position={[-3, 4, -2]}
        intensity={isDark ? 0.15 : 0.3}
      />
    </>
  )
}
