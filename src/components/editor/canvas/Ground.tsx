export function Ground({ isDark }: { isDark: boolean }) {
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-0.01} receiveShadow>
      <circleGeometry args={[8, 64]} />
      <meshStandardMaterial
        color={isDark ? '#1a1a1a' : '#e8e4df'}
        roughness={0.8}
        metalness={0}
      />
    </mesh>
  )
}
