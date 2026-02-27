import { Leaf } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Leaf className="size-4 text-primary" />
          <span>Terrarium.design</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Terrarium.design. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
