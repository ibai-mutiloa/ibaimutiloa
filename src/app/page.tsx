import Topbar from '@/components/layout/Topbar'
import Hero from '@/components/home/Hero'
import StackStrip from '@/components/home/StackStrip'
import ProjectsSection from '@/components/projects/ProjectsSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import AboutSection from '@/components/about/AboutSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Topbar />
      <Hero />
      <StackStrip />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}