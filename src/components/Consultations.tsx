import {
  HeartPulse,
  Activity,
  Stethoscope,
  Clock,
  Zap,
  Wind,
  Shield,
  Heart,
} from 'lucide-react';

export function Consultations() {
  const motifs = [
    { icon: HeartPulse, title: 'Douleur thoracique', titleAr: 'ألم في الصدر', color: 'from-rose-500 to-pink-600' },
    { icon: Wind, title: 'Essoufflement', titleAr: 'ضيق التنفس', color: 'from-pink-500 to-rose-600' },
    { icon: Zap, title: 'Palpitations', titleAr: 'خفقان القلب', color: 'from-red-500 to-rose-600' },
    { icon: Activity, title: 'Hypertension', titleAr: 'ارتفاع ضغط الدم', color: 'from-rose-500 to-red-600' },
    { icon: Shield, title: 'Bilan préventif', titleAr: 'فحص وقائي', color: 'from-pink-500 to-purple-600' },
    { icon: Stethoscope, title: 'Suivi cardiaque', titleAr: 'متابعة القلب', color: 'from-rose-500 to-pink-600' },
  ];

  const examens = [
    {
      icon: Heart,
      title: 'Echodoppler Cardiaque',
      titleAr: 'إيكو دوبلر القلب',
      description: "Échographie du cœur permettant d'évaluer la structure et le fonctionnement cardiaque. Examen indolore et non invasif.",
      duration: '30-45 min',
      gradient: 'from-rose-500 to-pink-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Activity,
      title: 'Echodoppler Vasculaire',
      titleAr: 'إيكو دوبلر الأوعية',
      description: "Exploration des vaisseaux sanguins (artères et veines) pour détecter d'éventuelles anomalies de circulation.",
      duration: '30-40 min',
      gradient: 'from-pink-500 to-rose-600',
      bg: 'bg-pink-50',
    },
    {
      icon: HeartPulse,
      title: 'Électrocardiogramme (ECG)',
      titleAr: 'تخطيط كهربية القلب',
      description: "Enregistrement de l'activité électrique du cœur pour détecter les troubles du rythme et autres anomalies.",
      duration: '10-15 min',
      gradient: 'from-red-500 to-rose-600',
      bg: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'MAPA',
      titleAr: 'مراقبة ضغط الدم المتنقل',
      description: "Monitoring ambulatoire de la pression artérielle sur 24h pour évaluer l'hypertension dans votre vie quotidienne.",
      duration: '24 heures',
      gradient: 'from-rose-500 to-red-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Zap,
      title: 'Holter ECG',
      titleAr: 'هولتر تخطيط القلب',
      description: "Enregistrement continu de l'ECG sur 24h pour détecter les troubles du rythme intermittents.",
      duration: '24 heures',
      gradient: 'from-pink-500 to-purple-600',
      bg: 'bg-pink-50',
    },
  ];

  return (
    <section id="consultations" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50/50 to-white" />
      
      {/* Decorative orbs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6">
            <Stethoscope className="w-4 h-4" />
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Consultations & Examens
          </h2>
          <p className="text-xl font-arabic text-rose-500/80 mb-4" dir="rtl">
            الاستشارات والفحوصات
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-red-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Motifs de consultation */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3 text-center reveal">
            Motifs de consultation
          </h3>
          <p className="text-center text-rose-500/80 font-arabic mb-10 reveal" dir="rtl">
            أسباب الاستشارة
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {motifs.map((motif, index) => {
              const Icon = motif.icon;
              return (
                <div
                  key={index}
                  className="reveal group bg-white rounded-2xl p-6 text-center border border-rose-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${motif.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-gray-800 text-sm mb-1">
                    {motif.title}
                  </h4>
                  <span className="text-xs text-rose-400 font-arabic">{motif.titleAr}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Examens pratiqués */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3 text-center reveal">
            Examens pratiqués au cabinet
          </h3>
          <p className="text-center text-rose-500/80 font-arabic mb-10 reveal" dir="rtl">
            الفحوصات المتوفرة في العيادة
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examens.map((examen, index) => {
              const Icon = examen.icon;
              return (
                <div
                  key={index}
                  className="reveal group bg-white rounded-3xl p-8 border border-rose-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${examen.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`${examen.bg} text-rose-600 px-4 py-2 rounded-full text-sm font-medium border border-rose-200`}>
                      <Clock className="w-3 h-3 inline-block mr-1" />
                      {examen.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="font-heading font-bold text-xl text-gray-800 mb-2">
                    {examen.title}
                  </h4>
                  <p className="text-rose-500/80 font-arabic text-sm mb-4" dir="rtl">
                    {examen.titleAr}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {examen.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${examen.gradient} opacity-30 group-hover:opacity-60 transition-opacity`} />
                </div>
              );
            })}
          </div>

          {/* Info box */}
          <div className="mt-12 bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 rounded-3xl p-8 text-center text-white shadow-xl shadow-rose-500/30 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">
                Tous les examens sont réalisés sur place
              </h3>
              <p className="text-lg font-arabic text-white/90 mb-4" dir="rtl">
                جميع الفحوصات تجرى في العيادة
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Notre cabinet est équipé de matériel médical moderne pour réaliser tous vos examens cardiologiques 
                dans les meilleures conditions de confort et de précision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
