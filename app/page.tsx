import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Services } from '@/components/services'
import { InsurancePlans } from '@/components/insurance-plans'
import { Team } from '@/components/team'
import { HoursLocation } from '@/components/hours-location'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <InsurancePlans />
        <Team />
        <HoursLocation />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  )
}
