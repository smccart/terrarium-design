import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { ACESFilmicToneMapping } from 'three'
import { TerrariumVessel } from './TerrariumVessel'
import { Soil } from './Soil'
import { Ground } from './Ground'
import { SceneLighting } from './SceneLighting'
import { useDarkMode } from '@/hooks/useDarkMode'

export function TerrariumCanvas() {
  const isDark = useDarkMode()

  return (
    <div
      className="h-full w-full"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse at center, #1a1f1a 0%, #0d0f0d 100%)'
          : 'radial-gradient(ellipse at center, #f5f5f0 0%, #e8e4df 100%)',
      }}
    >
      <Canvas
        camera={{
          position: [0, 2.5, 5],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
        shadows
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: isDark ? 0.8 : 1.0,
        }}
      >
        <SceneLighting isDark={isDark} />

        <group position={[0, 0, 0]}>
          <TerrariumVessel />
          <Soil />
        </group>

        <Ground isDark={isDark} />

        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={isDark ? 0.3 : 0.5}
          scale={10}
          blur={2}
          far={4}
          resolution={256}
          frames={1}
        />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          minDistance={2}
          maxDistance={12}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2 - 0.05}
          target={[0, 1.5, 0]}
          enablePan
          panSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
