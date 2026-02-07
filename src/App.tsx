import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Consultations } from './components/Consultations';
import { Pathologies } from './components/Pathologies';
import { PracticalInfo } from './components/PracticalInfo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Heart } from 'lucide-react';

export function App() {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Consultations />
      <Pathologies />
      <PracticalInfo />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById('back-to-top');
    const handleScroll = () => {
      if (btn) {
        btn.style.opacity = window.scrollY > 500 ? '1' : '0';
        btn.style.pointerEvents = window.scrollY > 500 ? 'auto' : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      id="back-to-top"
      href="#accueil"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0"
      aria-label="Retour en haut"
    >
      <Heart className="w-6 h-6" fill="currentColor" />
    </a>
  );
}
