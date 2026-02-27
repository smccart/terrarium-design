import { Leaf, Fish, Rotate3d } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    icon: Leaf,
    title: 'Terrarium Designer',
    description:
      'Design closed and open terrariums with a library of mosses, ferns, succulents, and decorative stones. Drag and drop into a glass vessel.',
    accent: 'bg-primary/10 text-primary',
  },
  {
    icon: Fish,
    title: 'Aquarium Designer',
    description:
      'Plan freshwater and saltwater aquariums. Select fish species, corals, substrate, and equipment. Check compatibility automatically.',
    accent: 'text-sky-600 dark:text-sky-400',
    accentBg: 'bg-sky-100 dark:bg-sky-900/30',
  },
  {
    icon: Rotate3d,
    title: '3D Preview',
    description:
      'See your design come to life in an interactive 3D preview. Rotate, zoom, and fine-tune every detail before building.',
    accent: 'bg-primary/10 text-primary',
  },
]

export function FeatureShowcase() {
  const ref = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Create
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, Terrarium.design gives you the tools to build your perfect ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  const ref = useScrollAnimation<HTMLDivElement>()
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`animate-on-scroll stagger-${index + 1}`}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div
            className={`mb-3 inline-flex size-12 items-center justify-center rounded-xl ${feature.accentBg ?? 'bg-primary/10'}`}
          >
            <Icon className={`size-6 ${feature.accent}`} />
          </div>
          <CardTitle className="text-xl">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
