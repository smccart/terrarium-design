import { Outlet } from 'react-router'
import { Navbar } from './Navbar'

export function PublicShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  )
}
