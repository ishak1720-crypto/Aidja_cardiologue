import { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, Activity } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil', labelAr: 'الرئيسية' },
    { href: '#docteur', label: 'Le Docteur', labelAr: 'الطبيبة' },
    { href: '#consultations', label: 'Consultations', labelAr: 'الفحوصات' },
    { href: '#pathologies', label: 'Pathologies', labelAr: 'الأمراض' },
    { href: '#infos', label: 'Infos Pratiques', labelAr: 'معلومات' },
    { href: '#contact', label: 'Contact', labelAr: 'اتصل بنا' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'navbar-glass py-2'
          : 'bg-gradient-to-b from-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group"
          >
            <div className={`relative p-3 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 shadow-lg shadow-rose-500/30' 
                : 'bg-white/10 backdrop-blur-md border border-white/30'
            }`}>
              <Heart 
                className={`w-6 h-6 transition-all duration-300 ${scrolled ? 'text-white' : 'text-white'}`} 
                fill="currentColor"
              />
              <Activity className={`absolute -bottom-1 -right-1 w-4 h-4 ${scrolled ? 'text-amber-300' : 'text-rose-300'} animate-pulse`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg tracking-wide transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent' 
                  : 'text-white drop-shadow-lg'
              }`}>
                Dr. F-AIDJA
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Cardiologue
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            <ul className={`flex items-center gap-1 p-1.5 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'bg-gray-100/80' 
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden ${
                      scrolled
                        ? 'text-gray-600 hover:text-white'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {/* Hover background */}
                    <span className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      scrolled 
                        ? 'bg-gradient-to-r from-rose-500 via-red-500 to-pink-500' 
                        : 'bg-white/20'
                    }`} />
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="tel:0799935486"
              className="flex items-center gap-2 ml-4 bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span>Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
              scrolled 
                ? 'text-rose-600 bg-rose-50 hover:bg-rose-100' 
                : 'text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`rounded-3xl p-6 ${
            scrolled 
              ? 'bg-white shadow-2xl shadow-gray-200/50' 
              : 'bg-white/10 backdrop-blur-xl border border-white/30'
          }`}>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-500 hover:to-pink-500'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`text-sm font-arabic ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                      {link.labelAr}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200/20 space-y-3">
              <a
                href="tel:0799935486"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-rose-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>0799 93 54 86</span>
              </a>
              <a
                href="tel:0554120494"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-pink-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>0554 12 04 94</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
