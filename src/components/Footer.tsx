import { Heart, Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Echodoppler cardiaque',
    'Echodoppler vasculaire',
    'MAPA',
    'Holter ECG',
    'ECG',
  ];

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#docteur', label: 'Le Docteur' },
    { href: '#consultations', label: 'Consultations' },
    { href: '#pathologies', label: 'Pathologies' },
    { href: '#infos', label: 'Infos Pratiques' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">Dr. F-AIDJA</span>
                <span className="text-rose-300 text-sm">Cardiologue</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Cabinet Medical de Cardiologie specialise en medecine cardiovasculaire.
            </p>
            <p className="text-rose-400/80 font-arabic text-sm" dir="rtl">
              عيادة طب القلب المتخصصة في طب القلب والأوعية الدموية
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Nos Examens</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+213799935486" className="flex items-center gap-3 text-gray-400 hover:text-rose-400 transition-colors">
                  <Phone className="w-5 h-5 text-rose-500" />
                  0799 93 54 86
                </a>
              </li>
              <li>
                <a href="tel:+213554120494" className="flex items-center gap-3 text-gray-400 hover:text-rose-400 transition-colors">
                  <Phone className="w-5 h-5 text-pink-500" />
                  0554 12 04 94
                </a>
              </li>
              <li>
                <a href="mailto:aidjafatiha@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-rose-400 transition-colors">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <span className="break-all">aidjafatiha@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Cite Ouled El Hadj N 63 N 02, Eucalyptus, Alger</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-pink-500" />
                <span>Tous les jours sauf Vendredi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency bar */}
        <div className="py-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Urgence cardiaque:</span>
            </div>
            <span className="text-white font-bold text-xl">1021</span>
            <span className="text-gray-400">(Protection Civile)</span>
            <span className="text-rose-400/70 font-arabic text-sm">الحماية المدنية</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Cabinet Medical de Cardiologie - Dr. F-AIDJA. Tous droits reserves.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-rose-400 text-sm transition-colors">
                Mentions legales
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-400 text-sm transition-colors">
                Politique de confidentialite
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
