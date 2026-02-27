import { Outlet } from 'react-router'
import { EditorToolbar } from '@/components/editor/EditorToolbar'
import { EditorSidebar } from '@/components/editor/EditorSidebar'
import { EditorPropertiesPanel } from '@/components/editor/EditorPropertiesPanel'

export function EditorShell() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <EditorToolbar />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        <main className="relative flex-1 overflow-hidden">
          <Outlet />
        </main>
        <EditorPropertiesPanel />
      </div>
    </div>
  )
}
