import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface EditorState {
  // Sidebar
  leftSidebarOpen: boolean
  toggleLeftSidebar: () => void
  setLeftSidebarOpen: (open: boolean) => void

  // Properties panel
  rightPanelOpen: boolean
  toggleRightPanel: () => void
  setRightPanelOpen: (open: boolean) => void

  // Project name
  projectName: string
  setProjectName: (name: string) => void
}

export const useEditorStore = create<EditorState>()(
  immer((set) => ({
    leftSidebarOpen: true,
    toggleLeftSidebar: () => set((s) => { s.leftSidebarOpen = !s.leftSidebarOpen }),
    setLeftSidebarOpen: (open) => set((s) => { s.leftSidebarOpen = open }),

    rightPanelOpen: true,
    toggleRightPanel: () => set((s) => { s.rightPanelOpen = !s.rightPanelOpen }),
    setRightPanelOpen: (open) => set((s) => { s.rightPanelOpen = open }),

    projectName: 'Untitled Terrarium',
    setProjectName: (name) => set((s) => { s.projectName = name }),
  }))
)
