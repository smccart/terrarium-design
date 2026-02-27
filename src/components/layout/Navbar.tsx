import { Leaf, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores'
import { cn } from '@/lib/utils'

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else if (theme === 'light') setTheme('system')
    else setTheme('dark')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6',
        transparent
          ? 'bg-transparent'
          : 'border-b bg-background/80 backdrop-blur-sm'
      )}
    >
      <div className="flex items-center gap-2">
        <Leaf className="size-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-primary">Terrarium</span>
          <span className="text-muted-foreground">.design</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
        </Button>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </div>
    </header>
  )
}
