import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { useAppStore } from '@/stores'
import { LandingShell } from '@/components/layout/LandingShell'
import { PublicShell } from '@/components/layout/PublicShell'
import { EditorShell } from '@/components/layout/EditorShell'
import { Landing } from '@/routes/Landing'
import { Login } from '@/routes/Login'
import { Signup } from '@/routes/Signup'
import { Editor } from '@/routes/Editor'

function App() {
  const theme = useAppStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      root.classList.toggle('dark', mq.matches)
      const handler = (e: MediaQueryListEvent) =>
        root.classList.toggle('dark', e.matches)
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingShell />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route element={<PublicShell />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<EditorShell />}>
          <Route path="/editor" element={<Editor />} />
          <Route path="/editor/:projectId" element={<Editor />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
