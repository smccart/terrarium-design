import {
  Leaf, Mountain, Layers, Wrench,
  PanelLeftClose, PanelLeftOpen,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/stores/editorStore'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'plants', label: 'Plants', icon: Leaf },
  { id: 'rocks', label: 'Rocks', icon: Mountain },
  { id: 'soil', label: 'Soil', icon: Layers },
  { id: 'tools', label: 'Tools', icon: Wrench },
] as const

export function EditorSidebar() {
  const open = useEditorStore((s) => s.leftSidebarOpen)
  const toggle = useEditorStore((s) => s.toggleLeftSidebar)

  return (
    <aside
      className={cn(
        'flex shrink-0 flex-col border-r bg-sidebar-background overflow-hidden transition-[width] duration-200 ease-in-out',
        open ? 'w-56' : 'w-12'
      )}
    >
      {/* Toggle button */}
      <div className="flex h-10 items-center justify-end px-2">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={toggle}
          title={open ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {open ? (
            <PanelLeftClose className="size-4" />
          ) : (
            <PanelLeftOpen className="size-4" />
          )}
        </Button>
      </div>

      {/* Category list */}
      <nav className="flex flex-col gap-1 px-2">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={cn(
              'flex items-center gap-3 rounded-md px-2 py-2 text-sm text-sidebar-foreground',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              'transition-colors'
            )}
            title={label}
          >
            <Icon className="size-4 shrink-0" />
            {open && <span className="truncate">{label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  )
}
