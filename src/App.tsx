
import './App.css'

import HeroSection from './HeroSection'
import AboutSection from "./AboutMe.tsx";
import MissionStatement from "./MissionStatement.tsx";
import ProjectsSection from "./ProjectsSection.tsx";
import TestimonialsSection from "./TestimonialsSection.tsx";
import Footer from './Footer.tsx';

function App() {


  return (

    <>
      <main className="bg-slate-900 text-white w-full">
        <HeroSection />
          <MissionStatement />
          <AboutSection/>
          <ProjectsSection/>
          <TestimonialsSection />
          <Footer />
      </main>
    </>
  )
}

export default App
