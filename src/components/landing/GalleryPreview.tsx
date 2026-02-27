import { Leaf, Fish, Monitor } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const previews = [
  {
    icon: Leaf,
    label: 'Tropical Terrarium',
    gradient: 'from-emerald-500/20 to-green-900/20',
  },
  {
    icon: Fish,
    label: 'Planted Aquarium',
    gradient: 'from-sky-500/20 to-blue-900/20',
  },
  {
    icon: Monitor,
    label: '3D Editor',
    gradient: 'from-primary/20 to-emerald-900/20',
  },
]

export function GalleryPreview() {
  const headerRef = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See What You Can Build
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From lush tropical terrariums to vibrant aquascapes — bring your vision to life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {previews.map((preview, i) => (
            <PreviewCard key={preview.label} preview={preview} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PreviewCard({
  preview,
  index,
}: {
  preview: (typeof previews)[number]
  index: number
}) {
  const ref = useScrollAnimation<HTMLDivElement>()
  const Icon = preview.icon

  return (
    <div
      ref={ref}
      className={`animate-on-scroll stagger-${index + 1}`}
    >
      <div
        className={`group relative flex aspect-[4/3] items-center justify-center rounded-xl border bg-gradient-to-br ${preview.gradient} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
      >
        <div className="text-center space-y-3">
          <Icon className="size-10 mx-auto text-muted-foreground/60 group-hover:text-primary transition-colors" />
          <p className="text-sm font-medium text-muted-foreground">{preview.label}</p>
        </div>
      </div>
    </div>
  )
}
