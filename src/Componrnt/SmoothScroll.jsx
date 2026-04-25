import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // --- ANCHOR LINK CLICK HANDLER ---
    // Jab koi Navbar link pe click karega, Lenis smooth scroll karega
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (target && target.hash && target.origin === window.location.origin) {
        const element = document.querySelector(target.hash)
        if (element) {
          e.preventDefault()
          lenis.scrollTo(element)
        }
      }
    }

    window.addEventListener('click', handleAnchorClick)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll