import PageTransition from '@/components/layout/PageTransition'
import HeroSection from '@/components/organisms/HeroSection'
import AboutSection from '@/components/organisms/AboutSection'
import WorkSection from '@/components/organisms/WorkSection'
import ExperienceSection from '@/components/organisms/ExperienceSection'
import SkillsSection from '@/components/organisms/SkillsSection'
import ContactSection from '@/components/organisms/ContactSection'
import Footer from '@/components/organisms/Footer'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </PageTransition>
  )
}
