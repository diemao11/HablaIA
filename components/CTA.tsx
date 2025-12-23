
import React from 'react';

interface CTAProps {
  onNavigate?: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup') => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background-dark to-transparent"></div>
      <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Empieza a crear videos virales hoy mismo
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Únete a miles de creadores y marcas que ya están usando actores de IA colombianos para multiplicar su alcance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('signup')}
            className="w-full sm:w-auto flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover text-white text-lg font-bold transition-all shadow-xl shadow-primary/25"
          >
            Comenzar gratis
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-14 px-8 bg-surface-dark border border-border-dark hover:bg-background-dark text-white text-lg font-bold transition-all">
            Contactar ventas
          </button>
        </div>
        <p className="mt-6 text-sm text-slate-500">No se requiere tarjeta de crédito para la prueba gratuita.</p>
      </div>
    </section>
  );
};

export default CTA;
