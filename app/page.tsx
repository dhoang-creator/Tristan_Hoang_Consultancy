'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyMe from '@/components/WhyMe'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Gallery from '@/components/Gallery'
import Journal from '@/components/Journal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const SECTION_IDS = ['top', 'about', 'services', 'work', 'gallery', 'journal', 'contact']

function jump(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Page() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, opts)

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <main>
      <Nav active={active} onJump={jump} />
      <Hero onJump={jump} />
      <About />
      <WhyMe />
      <Services onJump={jump} />
      <Work />
      <Gallery />
      <Journal />
      <Contact />
      <Footer />
    </main>
  )
}
