import { CustomCursor } from './components/UI/CustomCursor';
import { ParticleBackground } from './components/UI/ParticleBackground';
import { Navbar } from './components/UI/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VideosSection } from './components/VideosSection';
import { GamesSection } from './components/GamesSection';
import { JourneySection } from './components/JourneySection';
import { StatsSection } from './components/StatsSection';
import { CollabsSection } from './components/CollabsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { EasterEggOverlay } from './hooks/useEasterEgg.tsx';
import { SmoothScroll } from './hooks/useSmoothScroll.tsx';
import './index.css';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Particle Background */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <VideosSection />
          <GamesSection />
          <JourneySection />
          <StatsSection />
          <CollabsSection />
          <GallerySection />
          <Footer />
        </main>

        {/* Easter Egg */}
        <EasterEggOverlay />
      </div>
    </SmoothScroll>
  );
}

export default App;
