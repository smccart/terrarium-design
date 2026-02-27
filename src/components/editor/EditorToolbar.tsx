import { Leaf, Undo2, Redo2, Save, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/stores/editorStore'

export function EditorToolbar() {
  const projectName = useEditorStore((s) => s.projectName)

  return (
    <header className="flex h-12 shrink-0 items-center border-b bg-background px-3">
      {/* Left: Logo + project name */}
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Leaf className="size-5 text-primary" />
        </Link>
        <span className="max-w-48 truncate text-sm font-medium">
          {projectName}
        </span>
      </div>

      {/* Center: Undo/Redo */}
      <div className="flex flex-1 items-center justify-center gap-1">
        <Button variant="ghost" size="icon-sm" disabled title="Undo">
          <Undo2 className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm" disabled title="Redo">
          <Redo2 className="size-4" />
        </Button>
      </div>

      {/* Right: Save + Exit */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" disabled>
          <Save className="size-4" />
          Save
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="size-4" />
            Exit
          </Link>
        </Button>
      </div>
    </header>
  )
}
