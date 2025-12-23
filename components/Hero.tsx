
import React from 'react';
import AIPreviewVideo from './AIPreviewVideo';

interface HeroProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-40"></div>
      
      <div className="container px-4 md:px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark self-center lg:self-start w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">Nueva tecnología Veo 3.1 activa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Crea anuncios ganadores con <span className="text-gradient">actores de IA colombianos</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Genera videos hiperrealistas en segundos. Escala tu producción de contenido con acentos locales que conectan emocionalmente con tu audiencia.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-xl shadow-primary/25"
              >
                Probar gratis ahora
              </button>
              <button 
                onClick={() => onNavigate('pricing')}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-surface-dark border border-border-dark hover:border-slate-500 text-white text-base font-bold transition-all group"
              >
                <span className="material-symbols-outlined mr-2 group-hover:text-primary transition-colors">payments</span>
                Ver Planes y Precios
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-600 bg-cover bg-center" 
                    style={{ backgroundImage: `url('https://picsum.photos/100/100?random=${i + 10}')` }}
                  ></div>
                ))}
              </div>
              <p>Usado por +1,000 marcas en Latinoamérica</p>
            </div>
          </div>
          
          {/* Hero Visual - Now Using the Interactive AIPreviewVideo */}
          <div className="flex-1 w-full max-w-[700px] lg:max-w-none relative animate-in fade-in zoom-in-95 duration-1000">
            <AIPreviewVideo />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 lg:-right-6 bg-surface-dark border border-border-dark p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce hidden md:flex" style={{ animationDuration: '4s' }}>
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Conversión</p>
                <p className="text-sm font-bold text-white">+145% vs Video Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
