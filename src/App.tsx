import { useLayoutEffect, type ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { MobileNavbar, SideNavbar } from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import About from './pages/About'
import BuildABrain from './pages/BuildABrain'
import DmcCheckout from './pages/DmcCheckout'
import Village from './pages/Village'

function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="animate-[page-in_300ms_ease-out]">
      {children}
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-dvh bg-background md:flex">
      <ScrollToTop />
      <SideNavbar />
      <div className="min-w-0 flex-1">
        <MobileNavbar />
        <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/build-a-brain" element={<BuildABrain />} />
          <Route path="/projects/dmc-equipment-checkout" element={<DmcCheckout />} />
          <Route path="/projects/village" element={<Village />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </PageTransition>
      </div>
    </div>
  )
}
