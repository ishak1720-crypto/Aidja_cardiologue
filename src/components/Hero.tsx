import { Phone, ChevronDown, Heart, Activity, Stethoscope, Monitor, Clock } from 'lucide-react';

export function Hero() {
  const services = [
    { icon: Heart, label: 'Echodoppler cardiaque', labelAr: 'إيكو دوبلر القلب' },
    { icon: Activity, label: 'Echodoppler vasculaire', labelAr: 'إيكو دوبلر الأوعية' },
    { icon: Monitor, label: 'MAPA', labelAr: 'مراقبة ضغط الدم' },
    { icon: Stethoscope, label: 'Holter ECG', labelAr: 'هولتر تخطيط القلب' },
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 hero-mesh" />
      
      {/* Aurora effect */}
      <div className="aurora" />
      
      {/* Particles */}
      <div className="absolute inset-0 particles-bg opacity-60" />
      
      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-pink-500/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-purple-500/10 rounded-full blur-3xl float-medium" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-rose-500/10 rounded-full blur-3xl float-fast" style={{ animationDelay: '-4s' }} />
      </div>
      
      {/* ECG line animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg className="w-full h-40" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0" />
              <stop offset="20%" stopColor="#f43f5e" stopOpacity="1" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
              <stop offset="80%" stopColor="#f43f5e" stopOpacity="1" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 L200,50 L220,50 L240,20 L260,80 L280,10 L300,90 L320,50 L340,50 L600,50 L620,50 L640,25 L660,75 L680,15 L700,85 L720,50 L740,50 L1000,50 L1020,50 L1040,30 L1060,70 L1080,20 L1100,80 L1120,50 L1200,50"
            fill="none"
            stroke="url(#ecgGradient)"
            strokeWidth="3"
            className="ecg-line"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 animate-[fadeIn_1s_ease-out]">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg glow-rose">
              <Heart className="w-5 h-5 text-white heartbeat" fill="currentColor" />
            </div>
            <span className="text-white/90 font-medium">Cabinet Médical de Cardiologie</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 animate-[slideInUp_0.8s_ease-out]">
            Dr. F-AIDJA
          </h1>
          
          {/* Arabic name */}
          <p 
            className="text-2xl sm:text-3xl md:text-4xl font-arabic text-rose-300 mb-6 animate-[slideInUp_0.8s_ease-out_0.1s_both]" 
            dir="rtl"
          >
            د. ف. عيجة
          </p>

          {/* Subtitle */}
          <div className="animate-[slideInUp_0.8s_ease-out_0.2s_both]">
            <p className="text-xl sm:text-2xl text-white/90 font-light mb-2">
              Spécialiste en <span className="text-rose-300 font-medium">Cardiologie</span> & <span className="text-pink-300 font-medium">Médecine Cardiovasculaire</span>
            </p>
            <p className="text-lg sm:text-xl font-arabic text-white/70" dir="rtl">
              طبيبة أمراض القلب وطب القلب والأوعية الدموية
            </p>
          </div>

          {/* Services badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12 animate-[slideInUp_0.8s_ease-out_0.3s_both]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group glass-card px-5 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-400/30 to-pink-400/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-rose-300" />
                    </div>
                    <div className="text-left">
                      <span className="text-white font-medium text-sm block">{service.label}</span>
                      <span className="text-white/50 font-arabic text-xs">{service.labelAr}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideInUp_0.8s_ease-out_0.4s_both]">
            <a
              href="tel:0799935486"
              className="group btn-primary text-white px-8 py-4 rounded-2xl font-heading font-semibold text-lg flex items-center gap-3 min-w-[280px] justify-center"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>0799 93 54 86</span>
            </a>
            <a
              href="tel:0554120494"
              className="btn-secondary text-white px-8 py-4 rounded-2xl font-heading font-semibold text-lg flex items-center gap-3 min-w-[280px] justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>0554 12 04 94</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-[slideInUp_0.8s_ease-out_0.5s_both]">
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-5 h-5 text-rose-400" />
              <span className="text-sm">Tous les jours sauf Vendredi</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Activity className="w-5 h-5 text-rose-400" />
              <span className="text-sm">Examens sur place</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Stethoscope className="w-5 h-5 text-rose-400" />
              <span className="text-sm">Eucalyptus, Alger</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#docteur" 
          className="glass-card p-3 rounded-full block hover:bg-white/20 transition-colors"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#ffffff"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
