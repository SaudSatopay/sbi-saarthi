import Background from './components/Background'
import Nav from './components/Nav'
import Hero from './components/Hero'
import DemoStage from './components/DemoStage'
import Impact from './components/Impact'
import Architecture from './components/Architecture'
import WhyAgentic from './components/WhyAgentic'
import ProcessTech from './components/ProcessTech'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <DemoStage />
        <Impact />
        <Architecture />
        <WhyAgentic />
        <ProcessTech />
      </main>
      <Footer />
    </div>
  )
}
