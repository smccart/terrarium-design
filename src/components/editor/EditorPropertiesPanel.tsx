import { PanelRightClose, PanelRightOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/stores/editorStore'
import { cn } from '@/lib/utils'

export function EditorPropertiesPanel() {
  const open = useEditorStore((s) => s.rightPanelOpen)
  const toggle = useEditorStore((s) => s.toggleRightPanel)

  return (
    <aside
      className={cn(
        'flex shrink-0 flex-col border-l bg-sidebar-background overflow-hidden transition-[width] duration-200 ease-in-out',
        open ? 'w-64' : 'w-12'
      )}
    >
      {/* Toggle button */}
      <div className="flex h-10 items-center px-2">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={toggle}
          title={open ? 'Collapse panel' : 'Expand panel'}
        >
          {open ? (
            <PanelRightClose className="size-4" />
          ) : (
            <PanelRightOpen className="size-4" />
          )}
        </Button>
      </div>

      {/* Placeholder content */}
      {open && (
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Select an item to view its properties
          </p>
        </div>
      )}
    </aside>
  )
}
