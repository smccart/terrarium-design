import { Box } from 'lucide-react'

export function Editor() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/30">
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <Box className="size-12 opacity-50" />
        <p className="text-sm">3D Canvas</p>
        <p className="text-xs opacity-60">
          React Three Fiber scene will render here
        </p>
      </div>
    </div>
  )
}
