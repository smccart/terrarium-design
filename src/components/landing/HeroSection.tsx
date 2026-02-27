import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, oklch(0.85 0.08 145 / 0.5), transparent 60%), radial-gradient(ellipse at 70% 60%, oklch(0.7 0.06 200 / 0.3), transparent 50%)',
        }}
      />
      <div
        className="dark:block hidden absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, oklch(0.3 0.08 145 / 0.6), transparent 60%), radial-gradient(ellipse at 70% 60%, oklch(0.25 0.06 200 / 0.4), transparent 50%)',
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/5 -z-10 size-96 rounded-full bg-primary/10 blur-3xl" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/5 -z-10 size-72 rounded-full blur-3xl" style={{ background: 'oklch(0.6 0.1 200 / 0.1)', animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/3 right-1/3 -z-10 size-48 rounded-full bg-primary/5 blur-2xl" style={{ animation: 'float 10s ease-in-out infinite' }} />

      {/* Content */}
      <div className="text-center max-w-3xl">
        <h1
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up"
        >
          Design Your{' '}
          <span className="text-primary">Living World</span>
        </h1>
        <p
          className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          Create stunning terrariums and aquariums with an intuitive designer.
          Choose plants, arrange hardscaping, and preview your creation in real-time 3D.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button size="lg" className="gap-2" asChild>
            <Link to="/signup">
              Get Started <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
