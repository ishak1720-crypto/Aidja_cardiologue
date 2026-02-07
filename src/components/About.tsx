import {
  GraduationCap,
  Heart,
  Users,
  Stethoscope,
  Award,
  HeartHandshake,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

export function About() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Écoute attentive',
      titleAr: 'الاستماع اليقظ',
      description: 'Chaque patient mérite du temps et une attention particulière pour comprendre ses préoccupations.',
      gradient: 'from-rose-500 to-pink-600',
      bg: 'from-rose-50 to-pink-50',
    },
    {
      icon: UserCheck,
      title: 'Suivi personnalisé',
      titleAr: 'متابعة شخصية',
      description: 'Un accompagnement adapté à votre situation et vos besoins spécifiques.',
      gradient: 'from-pink-500 to-rose-600',
      bg: 'from-pink-50 to-rose-50',
    },
    {
      icon: ShieldCheck,
      title: 'Prévention',
      titleAr: 'الوقاية',
      description: 'Anticiper pour mieux protéger votre cœur grâce à des bilans préventifs réguliers.',
      gradient: 'from-red-500 to-rose-600',
      bg: 'from-red-50 to-rose-50',
    },
  ];

  return (
    <section id="docteur" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6">
            <Stethoscope className="w-4 h-4" />
            Votre Cardiologue
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Dr. F-AIDJA
          </h2>
          <p className="text-2xl font-arabic text-rose-500 mb-4" dir="rtl">
            د. ف. عيجة
          </p>
          <p className="text-lg text-gray-600">
            Spécialiste en Cardiologie & Médecine Cardiovasculaire
          </p>
          <p className="text-base font-arabic text-gray-500 mt-1" dir="rtl">
            طبيبة أمراض القلب وطب القلب والأوعية الدموية
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-red-400 to-pink-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Photo placeholder */}
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-rose-100 via-pink-50 to-white rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 aspect-[4/5]">
                {/* Placeholder with icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl glow-rose">
                      <Stethoscope className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-500 font-medium">Dr. F-AIDJA</p>
                    <p className="text-rose-400 text-sm">Cardiologue</p>
                  </div>
                </div>
                
                {/* Decorative border */}
                <div className="absolute inset-0 border-4 border-white/50 rounded-3xl" />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-rose-500/30 transform hover:-translate-y-1 transition-transform">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <span className="block text-sm opacity-90">Médecin Spécialiste</span>
                  <span className="block text-xs font-arabic opacity-80">طبيبة متخصصة</span>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-rose-200 rounded-full" />
              <div className="absolute -bottom-8 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-60 float-slow" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bio card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-100 reveal">
              <h3 className="font-heading font-bold text-2xl text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                Parcours & Formation
              </h3>
              <div className="prose prose-rose max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Le Dr. F-AIDJA est une cardiologue expérimentée, spécialisée en médecine cardiovasculaire. 
                  Elle exerce au sein de son cabinet situé à Eucalyptus, Alger, où elle offre une prise en charge 
                  complète des pathologies cardiaques.
                </p>
                <p className="font-arabic text-gray-500" dir="rtl">
                  الدكتورة ف. عيجة طبيبة قلب ذات خبرة، متخصصة في طب القلب والأوعية الدموية. تمارس في عيادتها 
                  الكائنة بالكاليتوس، الجزائر، حيث تقدم رعاية شاملة لأمراض القلب.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
                <h4 className="font-heading font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" />
                  Spécialisations
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { fr: 'Echodoppler cardiaque', ar: 'إيكو دوبلر القلب' },
                    { fr: 'Echodoppler vasculaire', ar: 'إيكو دوبلر الأوعية' },
                    { fr: 'MAPA (Monitoring ambulatoire)', ar: 'مراقبة ضغط الدم المتنقل' },
                    { fr: 'Holter ECG', ar: 'هولتر تخطيط القلب' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-rose-100">
                      <div className="w-2 h-2 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-medium text-sm block">{item.fr}</span>
                        <span className="text-gray-400 font-arabic text-xs">{item.ar}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Approach card */}
            <div className="bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl shadow-rose-500/30 relative overflow-hidden reveal">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8" />
                  <h3 className="font-heading font-bold text-xl">Mon approche</h3>
                </div>
                <blockquote className="text-white/95 text-lg italic leading-relaxed mb-3">
                  "Je mets un point d'honneur à prendre le temps d'écouter mes patients pour 
                  comprendre leur histoire et leurs préoccupations. Une bonne relation 
                  médecin-patient est essentielle pour un suivi cardiologique optimal."
                </blockquote>
                <p className="text-white/80 font-arabic text-base" dir="rtl">
                  "أحرص على أخذ الوقت الكافي للاستماع إلى مرضاي لفهم قصتهم ومخاوفهم. العلاقة الجيدة 
                  بين الطبيب والمريض ضرورية لمتابعة قلبية مثلى."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`reveal group bg-gradient-to-br ${value.bg} rounded-3xl p-8 border border-rose-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-rose-500/80 font-arabic text-sm mb-3" dir="rtl">
                  {value.titleAr}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
