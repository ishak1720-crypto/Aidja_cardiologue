import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Bus,
  Accessibility,
  CalendarCheck,
  Calendar,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export function PracticalInfo() {
  const schedule = [
    { day: 'Samedi', dayAr: 'السبت', open: true },
    { day: 'Dimanche', dayAr: 'الأحد', open: true },
    { day: 'Lundi', dayAr: 'الإثنين', open: true },
    { day: 'Mardi', dayAr: 'الثلاثاء', open: true },
    { day: 'Mercredi', dayAr: 'الأربعاء', open: true },
    { day: 'Jeudi', dayAr: 'الخميس', open: true },
    { day: 'Vendredi', dayAr: 'الجمعة', open: false },
  ];

  return (
    <section id="infos" className="py-20 md:py-28 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6">
            <MapPin className="w-4 h-4" />
            Venir au cabinet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-gray-800 via-rose-700 to-pink-700 bg-clip-text text-transparent mb-4">
            Informations pratiques
          </h2>
          <p className="text-xl font-arabic text-rose-600/80 mb-4" dir="rtl">
            معلومات عملية
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-red-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left column: Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-rose-100 shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/50 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Adresse</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    <strong className="text-gray-800">Cabinet Médical de Cardiologie</strong><br />
                    Cité Ouled El Hadj N° 63 N° 02<br />
                    Eucalyptus, Alger
                  </p>
                  <p className="text-rose-600/80 font-arabic text-base" dir="rtl">
                    حي أولاد الحاج رقم 63 رقم 02، الكاليتوس، الجزائر
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a href="tel:+213799935486" className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 group/link">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800 text-lg">0799 93 54 86</span>
                    </a>
                    <a href="tel:+213554120494" className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all duration-300 group/link">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800 text-lg">0554 12 04 94</span>
                    </a>
                    <a href="mailto:aidjafatiha@gmail.com" className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 group/link">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">aidjafatiha@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-rose-100 shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/50 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">Horaires de consultation</h3>
                  <p className="text-rose-600/80 font-arabic text-base mb-4" dir="rtl">
                    أوقات الاستشارة
                  </p>
                  
                  {/* Schedule grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {schedule.map((item) => (
                      <div 
                        key={item.day} 
                        className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          item.open 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
                            : 'bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`text-sm font-semibold ${item.open ? 'text-gray-800' : 'text-gray-400'}`}>
                            {item.day}
                          </span>
                          <span className={`text-xs font-arabic ${item.open ? 'text-gray-500' : 'text-gray-300'}`}>
                            {item.dayAr}
                          </span>
                        </div>
                        {item.open ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold text-sm">Sur rendez-vous uniquement</span>
                    </div>
                    <p className="text-amber-600/80 font-arabic text-sm mt-1" dir="rtl">
                      بموعد مسبق فقط
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Map + Extra info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-xl shadow-rose-100/50 h-80 md:h-[420px]">
              <iframe
                title="Cabinet Médical de Cardiologie - Dr F. AIDJA - Eucalyptus, Alger"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36740.01279717972!2d3.083565221679686!3d36.660508300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e530027bb6587%3A0x4f73073f381526a3!2zRHIgRi4gQWlkamEg4oCTIENhcmRpb2xvZ2llICYgbcOpZGVjaW5lIGNhcmRpb3Zhc2N1bGFpcmUgfCDYry4g2YEuINi52YrYrNipIOKAkyDYt9io2YrYqNipINij2YXYsdin2LYg2KfZhNmC2YTYqCDZiNi32Kgg2KfZhNmC2YTYqCDZiNin2YTYo9mI2LnZitipINin2YTYr9mF2YjZitip!5e1!3m2!1sfr!2sdz!4v1770480291216!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Access */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-100 shadow-lg shadow-blue-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Bus className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-800">Transports</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Accessible par bus<br />
                  Quartier Eucalyptus, Alger
                </p>
                <p className="text-blue-500/70 font-arabic text-sm mt-2" dir="rtl">
                  متاح عبر الحافلات
                </p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-purple-100 shadow-lg shadow-purple-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-800">En voiture</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Parking disponible<br />
                  à proximité du cabinet
                </p>
                <p className="text-purple-500/70 font-arabic text-sm mt-2" dir="rtl">
                  موقف سيارات متوفر
                </p>
              </div>
            </div>

            {/* Accessibility */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-teal-100 shadow-lg shadow-teal-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Accessibility className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 mb-1">Accessibilité</h4>
                  <p className="text-gray-600 text-sm">
                    Cabinet accessible aux personnes à mobilité réduite
                  </p>
                  <p className="text-teal-500/70 font-arabic text-sm mt-1" dir="rtl">
                    العيادة متاحة لذوي الاحتياجات الخاصة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RDV banner */}
        <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-rose-500/30 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <CalendarCheck className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">Réservation facile</span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                Prendre rendez-vous
              </h3>
              <p className="text-2xl font-arabic text-white/90 mb-4" dir="rtl">
                حجز موعد
              </p>
              <p className="text-white/80 leading-relaxed">
                Appelez-nous pour planifier votre consultation cardiologique. 
                Nous sommes disponibles tous les jours sauf le vendredi.
              </p>
              <p className="text-white/70 font-arabic mt-2" dir="rtl">
                اتصل بنا لتحديد موعد استشارتك. نحن متاحون كل يوم ما عدا الجمعة.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+213799935486"
                className="flex items-center justify-center gap-3 bg-white text-rose-600 px-8 py-5 rounded-2xl font-heading font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                0799 93 54 86
              </a>
              <a
                href="tel:+213554120494"
                className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-heading font-bold text-xl border-2 border-white/30 hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                0554 12 04 94
              </a>
              <a
                href="mailto:aidjafatiha@gmail.com"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-heading font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                aidjafatiha@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
