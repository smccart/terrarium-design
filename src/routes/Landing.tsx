import { HeroSection } from '@/components/landing/HeroSection'
import { FeatureShowcase } from '@/components/landing/FeatureShowcase'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { GalleryPreview } from '@/components/landing/GalleryPreview'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/layout/Footer'

export function Landing() {
  return (
    <>
      <HeroSection />
      <FeatureShowcase />
      <HowItWorks />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </>
  )
}
