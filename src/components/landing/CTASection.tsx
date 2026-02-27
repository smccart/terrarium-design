import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function CTASection() {
  const ref = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, oklch(0.88 0.06 145 / 0.5), transparent 70%)',
        }}
      />
      <div
        className="dark:block hidden absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, oklch(0.25 0.06 145 / 0.5), transparent 70%)',
        }}
      />

      {/* Decorative orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[600px] rounded-full bg-primary/5 blur-3xl"
        style={{ animation: 'pulse-glow 6s ease-in-out infinite' }}
      />

      <div ref={ref} className="animate-on-scroll mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Build Your First Terrarium?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Join Terrarium.design and start creating beautiful living ecosystems today.
          Free to get started.
        </p>
        <div className="mt-8">
          <Button size="lg" className="gap-2">
            Create Your First Design <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
