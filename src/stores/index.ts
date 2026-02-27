import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Theme = 'light' | 'dark' | 'system'

interface AppState {
  // UI
  theme: Theme
  setTheme: (theme: Theme) => void

  // Auth
  user: { id: string; email: string } | null
  setUser: (user: AppState['user']) => void

  // Projects
  currentProjectId: string | null
  setCurrentProjectId: (id: string | null) => void
}

export const useAppStore = create<AppState>()(
  immer((set) => ({
    theme: 'system',
    setTheme: (theme) => set((s) => { s.theme = theme }),

    user: null,
    setUser: (user) => set((s) => { s.user = user }),

    currentProjectId: null,
    setCurrentProjectId: (id) => set((s) => { s.currentProjectId = id }),
  }))
)
