
import React from 'react';

interface HowItWorksPageProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works') => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center w-full bg-background-dark">
      {/* Hero Section */}
      <section className="w-full px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-[960px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-primary text-xs font-bold uppercase tracking-wider">Nueva Tecnología V2.0</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 text-white">
          Crear anuncios nunca<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] text-gradient">fue tan fácil</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          Convierte texto en video con avatares colombianos hiperrealistas en cuestión de minutos. Automatiza tu contenido y escala tu negocio sin cámaras.
        </p>
      </section>

      {/* Process Timeline Section */}
      <section className="w-full max-w-[1024px] px-6 pb-24">
        <div className="relative flex flex-col gap-16 md:gap-24">
          {/* Vertical Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 w-full md:text-right order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Regístrate en HablaIA</h3>
              <p className="text-slate-400">Crea tu cuenta gratuita en segundos. Sin tarjetas de crédito para empezar a explorar la plataforma.</p>
            </div>
            <div className="relative z-10 flex items-center justify-center size-14 md:size-16 rounded-2xl bg-surface-dark border border-border-dark shadow-xl order-1 md:order-2 shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">person_add</span>
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">1</div>
            </div>
            <div className="flex-1 w-full order-3 hidden md:block">
              <div className="h-40 w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="p-6 flex flex-col gap-3 opacity-60">
                  <div className="h-2 w-1/3 bg-slate-600 rounded"></div>
                  <div className="h-8 w-full bg-slate-700 rounded"></div>
                  <div className="h-8 w-full bg-slate-700 rounded"></div>
                </div>
                <div className="absolute bottom-4 right-4 h-8 w-20 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">Sign Up</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 w-full order-3 md:order-1 hidden md:block">
              <div className="h-40 w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-4 p-4">
                <div className="size-16 rounded-full bg-slate-700 border-2 border-primary relative overflow-hidden">
                  <img alt="Latina woman" className="w-full h-full object-cover" src="https://picsum.photos/200/200?random=21"/>
                </div>
                <div className="size-12 rounded-full bg-slate-700 border border-transparent opacity-50 overflow-hidden">
                  <img alt="Man portrait" className="w-full h-full object-cover" src="https://picsum.photos/200/200?random=22"/>
                </div>
                <div className="size-12 rounded-full bg-slate-700 border border-transparent opacity-50 overflow-hidden">
                  <img alt="Woman portrait" className="w-full h-full object-cover" src="https://picsum.photos/200/200?random=23"/>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center size-14 md:size-16 rounded-2xl bg-surface-dark border border-border-dark shadow-xl order-1 md:order-2 shrink-0">
              <span className="material-symbols-outlined text-secondary text-3xl">face</span>
              <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">2</div>
            </div>
            <div className="flex-1 w-full md:text-left order-2 md:order-3">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">Elige un actor de IA</h3>
              <p className="text-slate-400">Selecciona entre más de 50 avatares con acento colombiano, neutro o internacional. Filtra por edad, estilo y tono.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 w-full md:text-right order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Escribe tu mensaje</h3>
              <p className="text-slate-400">Pega tu guion o usa nuestras plantillas de alta conversión. Nuestro editor te permite ajustar pausas y énfasis.</p>
            </div>
            <div className="relative z-10 flex items-center justify-center size-14 md:size-16 rounded-2xl bg-surface-dark border border-border-dark shadow-xl order-1 md:order-2 shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">3</div>
            </div>
            <div className="flex-1 w-full order-3 hidden md:block">
              <div className="h-40 w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300 p-6">
                <div className="flex gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-slate-600 rounded animate-pulse"></div>
                  <div className="h-2 w-full bg-slate-600 rounded animate-pulse delay-75"></div>
                  <div className="h-2 w-5/6 bg-slate-600 rounded animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 w-full order-3 md:order-1 hidden md:block">
              <div className="h-40 w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                <div className="relative z-10 size-12 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                <div className="absolute z-10 text-xs font-mono text-primary mt-20">RENDERING...</div>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center size-14 md:size-16 rounded-2xl bg-surface-dark border border-border-dark shadow-xl order-1 md:order-2 shrink-0">
              <span className="material-symbols-outlined text-success text-3xl">auto_videocam</span>
              <div className="absolute -top-2 -right-2 bg-success text-white text-xs font-bold px-2 py-0.5 rounded-full">4</div>
            </div>
            <div className="flex-1 w-full md:text-left order-2 md:order-3">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-success transition-colors">Generamos tu video</h3>
              <p className="text-slate-400">Nuestra IA sincroniza perfectamente los labios (lip-sync) y gestos con tu texto. El proceso toma solo unos minutos en la nube.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 w-full md:text-right order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Descárgalo y publícalo</h3>
              <p className="text-slate-400">Obtén tu video en alta definición (1080p o 4K) listo para redes sociales, anuncios de YouTube o presentaciones corporativas.</p>
            </div>
            <div className="relative z-10 flex items-center justify-center size-14 md:size-16 rounded-2xl bg-surface-dark border border-border-dark shadow-xl order-1 md:order-2 shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">download_for_offline</span>
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">5</div>
            </div>
            <div className="flex-1 w-full order-3 hidden md:block">
              <div className="h-40 w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                <button className="relative z-10 flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium shadow-lg transition-colors">
                  <span className="material-symbols-outlined text-sm">download</span> Descargar MP4
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-surface-dark border-t border-border-dark py-24">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 text-white tracking-tight">
            Sin estudios, sin cámaras,<br/>
            <span className="text-slate-500">sin actores reales.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Únete a más de 10,000 creadores y empresas que ya están ahorrando miles de dólares en producción de video.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all transform hover:scale-105 shadow-xl shadow-primary/25"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              <span>Crear mi primer video gratis</span>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-background-dark border border-border-dark text-white text-base font-bold hover:bg-surface-dark transition-colors">
              <span>Ver ejemplos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
