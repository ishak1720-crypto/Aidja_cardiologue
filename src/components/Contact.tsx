import {
  Send,
  Phone,
  Mail,
  AlertTriangle,
  Clock,
} from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-rose-300 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6 border border-white/20">
            <Mail className="w-4 h-4" />
            Nous contacter
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Prenez contact avec nous
          </h2>
          <p className="text-xl font-arabic text-rose-300/80 mb-4" dir="rtl">
            تواصل معنا
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-red-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-6 reveal">
            {/* Emergency warning */}
            <div className="bg-gradient-to-r from-red-600/90 to-rose-600/90 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    Urgence cardiaque ?
                  </h3>
                  <p className="text-white/90 mb-1">
                    Appelez immédiatement le <strong className="text-2xl">1021</strong> (Protection Civile)
                  </p>
                  <p className="text-white/70 font-arabic text-sm" dir="rtl">
                    في حالة الطوارئ، اتصل بالحماية المدنية 1021
                  </p>
                  <p className="text-white/70 text-sm mt-2">
                    Ce formulaire ne permet pas de répondre aux urgences médicales.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone cards */}
            <div className="grid gap-4">
              <a
                href="tel:+213799935486"
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg glow-rose group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-white/60 text-sm block mb-1">Téléphone principal</span>
                    <span className="text-white font-heading font-bold text-2xl block">0799 93 54 86</span>
                    <span className="text-rose-300/70 font-arabic text-sm">الهاتف الرئيسي</span>
                  </div>
                </div>
              </a>

              <a
                href="tel:+213554120494"
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-white/60 text-sm block mb-1">Téléphone secondaire</span>
                    <span className="text-white font-heading font-bold text-2xl block">0554 12 04 94</span>
                    <span className="text-rose-300/70 font-arabic text-sm">الهاتف الثانوي</span>
                  </div>
                </div>
              </a>

              <a
                href="mailto:aidjafatiha@gmail.com"
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-white/60 text-sm block mb-1">Email</span>
                    <span className="text-white font-heading font-semibold text-lg block">aidjafatiha@gmail.com</span>
                    <span className="text-rose-300/70 font-arabic text-sm">البريد الإلكتروني</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Hours reminder */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-rose-400" />
                <span className="text-white font-heading font-semibold">Horaires</span>
              </div>
              <p className="text-white/80">
                Consultations tous les jours <strong className="text-rose-300">sauf le Vendredi</strong>, sur rendez-vous uniquement.
              </p>
              <p className="text-rose-300/70 font-arabic text-sm mt-2" dir="rtl">
                الاستشارات كل يوم ما عدا الجمعة، بموعد مسبق فقط
              </p>
            </div>
          </div>

          {/* Contact form - Formspree */}
          <div className="reveal">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <form 
                action="https://formspree.io/f/xojnqpbq" 
                method="POST"
                className="space-y-5"
              >
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-1">
                    Formulaire de contact
                  </h3>
                  <p className="text-rose-500/80 font-arabic" dir="rtl">
                    نموذج الاتصال
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Prénom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Téléphone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                      placeholder="0XXX XX XX XX"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Objet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Objet
                  </label>
                  <select
                    name="objet"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                  >
                    <option value="">Sélectionnez un objet</option>
                    <option value="Demande de rendez-vous">Demande de rendez-vous</option>
                    <option value="Demande d'information">Demande d'information</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 bg-gray-50 transition-colors focus:outline-none focus:ring-0 resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {/* Hidden field for subject */}
                <input type="hidden" name="_subject" value="Nouveau message - Cabinet Cardiologie Dr. F-AIDJA" />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 hover:from-rose-600 hover:via-red-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-heading font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                  <span className="font-arabic text-sm opacity-80">إرسال</span>
                </button>

                {/* Privacy note */}
                <p className="text-center text-gray-500 text-xs mt-4">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
