import { Outlet } from 'react-router'
import { Navbar } from './Navbar'

export function LandingShell() {
  return (
    <div className="relative min-h-screen">
      <Navbar transparent />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
