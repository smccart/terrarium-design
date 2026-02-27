import { GlassWater, TreePine, Rotate3d } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    icon: GlassWater,
    title: 'Choose Your Vessel',
    description:
      'Start by selecting from terrariums, fish tanks, or custom containers. Set dimensions and glass type.',
  },
  {
    icon: TreePine,
    title: 'Fill Your World',
    description:
      'Browse our library of plants, fish, substrates, and decorations. Drag and drop to arrange your design.',
  },
  {
    icon: Rotate3d,
    title: 'Preview in 3D',
    description:
      'Spin your creation in an interactive 3D view. Adjust lighting, camera angles, and share with friends.',
  },
]

export function HowItWorks() {
  const headerRef = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From Idea to Reality in Three Steps
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Getting started is simple — no design experience required.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const ref = useScrollAnimation<HTMLDivElement>()
  const Icon = step.icon

  return (
    <div
      ref={ref}
      className={`animate-on-scroll stagger-${index + 1} relative flex gap-6 md:gap-12 ${
        index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      {/* Step number / icon */}
      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
        <Icon className="size-5" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <p className="text-sm font-medium text-primary mb-1">Step {index + 1}</p>
        <h3 className="text-xl font-semibold">{step.title}</h3>
        <p className="mt-2 text-muted-foreground">{step.description}</p>
      </div>
    </div>
  )
}
