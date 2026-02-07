import {
  Heart,
  Activity,
  Zap,
  CircleDot,
  ShieldAlert,
  Stethoscope,
  HeartPulse,
  AlertCircle,
  ShieldCheck,
  Apple,
  Bike,
  Ban,
  Moon,
  Smile,
} from 'lucide-react';

export function Pathologies() {
  const pathologies = [
    {
      icon: Heart,
      title: 'Insuffisance cardiaque',
      titleAr: 'قصور القلب',
      description: 'Prise en charge du cœur affaibli avec suivi régulier et traitement adapté.',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      icon: Activity,
      title: 'Maladie coronarienne',
      titleAr: 'مرض الشرايين التاجية',
      description: 'Diagnostic et suivi des artères du cœur pour prévenir les complications.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'Troubles du rythme',
      titleAr: 'اضطرابات نظم القلب',
      description: 'Arythmies, fibrillation auriculaire et autres troubles du rythme cardiaque.',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      icon: CircleDot,
      title: 'Valvulopathies',
      titleAr: 'أمراض صمامات القلب',
      description: 'Suivi des maladies des valves cardiaques et évaluation de leur sévérité.',
      gradient: 'from-rose-500 to-red-600',
    },
    {
      icon: ShieldAlert,
      title: 'Hypertension artérielle',
      titleAr: 'ارتفاع ضغط الدم الشرياني',
      description: 'Diagnostic et traitement de la tension artérielle élevée.',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      icon: Stethoscope,
      title: 'Péricardites',
      titleAr: 'التهاب التامور',
      description: 'Inflammation du péricarde avec prise en charge adaptée.',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      icon: HeartPulse,
      title: 'Suivi post-infarctus',
      titleAr: 'متابعة ما بعد الجلطة القلبية',
      description: 'Accompagnement et réadaptation après un infarctus du myocarde.',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      icon: AlertCircle,
      title: 'Maladies vasculaires',
      titleAr: 'أمراض الأوعية الدموية',
      description: 'Pathologies des artères et veines périphériques.',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  const preventionTips = [
    {
      icon: Apple,
      title: 'Alimentation équilibrée',
      titleAr: 'تغذية متوازنة',
      description: 'Privilégiez fruits, légumes, poissons et réduisez sel, sucre et graisses saturées.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Bike,
      title: 'Activité physique',
      titleAr: 'نشاط بدني منتظم',
      description: '30 minutes de marche ou exercice modéré par jour protègent votre cœur.',
      gradient: 'from-cyan-500 to-teal-600',
    },
    {
      icon: Ban,
      title: 'Arrêt du tabac',
      titleAr: 'الإقلاع عن التدخين',
      description: 'Le tabac multiplie par 3 le risque cardiovasculaire. Arrêter est essentiel.',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Activity,
      title: 'Contrôle du poids',
      titleAr: 'مراقبة الوزن',
      description: 'Maintenir un poids santé réduit la pression sur votre système cardiovasculaire.',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      icon: Moon,
      title: 'Sommeil de qualité',
      titleAr: 'نوم جيد',
      description: '7 à 8 heures de sommeil réparateur pour un cœur en bonne santé.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Smile,
      title: 'Gestion du stress',
      titleAr: 'إدارة التوتر',
      description: 'Relaxation, méditation et loisirs aident à réduire le stress chronique.',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="pathologies" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-pink-50/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6">
            <Heart className="w-4 h-4" />
            Notre expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Pathologies prises en charge
          </h2>
          <p className="text-xl font-arabic text-rose-500/80 mb-4" dir="rtl">
            الأمراض المعالجة
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-red-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Pathologies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pathologies.map((patho, index) => {
            const Icon = patho.icon;
            return (
              <div
                key={index}
                className="reveal group bg-white rounded-3xl p-6 border border-rose-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${patho.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">
                  {patho.title}
                </h3>
                <p className="text-rose-500/80 font-arabic text-sm mb-3" dir="rtl">
                  {patho.titleAr}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {patho.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conseils de Prévention - Special section */}
        <div className="reveal bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-emerald-200 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-10">
            <ShieldCheck className="w-32 h-32 text-emerald-500" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10">
            <HeartPulse className="w-24 h-24 text-teal-500" />
          </div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0 animate-pulse">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <div>
                <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Votre santé, notre priorité
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Conseils de Prévention
                </h3>
                <p className="text-xl font-arabic text-emerald-600/80 mt-1" dir="rtl">
                  نصائح للوقاية من أمراض القلب
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-emerald max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                La prévention reste le meilleur moyen de protéger votre cœur. Adoptez ces habitudes 
                simples au quotidien pour réduire significativement vos risques cardiovasculaires 
                et vivre en meilleure santé.
              </p>
              <p className="text-emerald-600/80 font-arabic text-lg leading-relaxed" dir="rtl">
                الوقاية هي أفضل وسيلة لحماية قلبك. اتبع هذه العادات البسيطة يومياً لتقليل مخاطر 
                الإصابة بأمراض القلب والأوعية الدموية والعيش بصحة أفضل.
              </p>
            </div>

            {/* Key prevention tips */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionTips.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-emerald-600/70 font-arabic text-sm mb-2" dir="rtl">{item.titleAr}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white text-center">
              <p className="text-lg font-medium italic mb-2">
                "Prévenir vaut mieux que guérir - Un cœur en bonne santé commence par de bonnes habitudes"
              </p>
              <p className="font-arabic text-white/90" dir="rtl">
                "الوقاية خير من العلاج - قلب سليم يبدأ بعادات صحية"
              </p>
            </div>
          </div>
        </div>

        {/* Emergency info */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 text-white text-center shadow-xl relative overflow-hidden reveal">
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <p className="font-heading font-bold text-xl mb-1">
                En cas d'urgence cardiaque, appelez le 1021 (Protection Civile)
              </p>
              <p className="text-white/80 font-arabic text-lg" dir="rtl">
                في حالة طوارئ قلبية، اتصل بالحماية المدنية 1021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
