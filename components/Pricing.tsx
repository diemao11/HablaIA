
import React, { useState } from 'react';

interface PricingProps {
  onNavigate?: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup') => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden min-h-[80vh] flex flex-col justify-center" id="precios">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]"></div>
      </div>

      <div className="container px-4 mx-auto max-w-[1280px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-top-8 duration-700">
          <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Planes y Precios</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            Planes simples, <span className="text-gradient">precios claros (COP)</span>
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Crea anuncios en video con actores de IA colombianos y monetiza tu contenido. Escala tu producción sin estudios ni cámaras.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Mensual</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-surface-dark border border-border-dark relative flex items-center px-1 transition-all"
            >
              <div className={`w-5 h-5 rounded-full bg-primary shadow-lg transform transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>Anual</span>
              <span className="text-[10px] font-bold bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full uppercase">ahorra 20%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto items-start animate-in zoom-in-95 duration-700">
          {/* Free Plan */}
          <div className="flex flex-col rounded-3xl border border-border-dark bg-surface-dark/50 backdrop-blur-sm p-8 hover:border-slate-700 transition-all group">
            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-2">Gratis</h3>
              <p className="text-slate-500 text-sm">Perfecto para probar la tecnología.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-white text-4xl font-black">$0 COP</span>
                <span className="text-slate-500 text-sm">/mes</span>
              </div>
            </div>

            <button 
              onClick={() => onNavigate?.('signup')}
              className="w-full rounded-xl h-12 px-4 border border-border-dark bg-transparent hover:bg-surface-dark text-white text-sm font-bold transition-all mb-8"
            >
              Empezar Gratis
            </button>

            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Incluye</p>
              <FeatureItem text="1 video generado al mes" />
              <FeatureItem text="Acceso limitado a avatares" />
              <FeatureItem text="Marca de agua incluida" />
              <FeatureItem text="Sin derechos comerciales" disabled />
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-3xl border-2 border-primary bg-surface-dark p-8 shadow-2xl shadow-primary/10 relative transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Recomendado
            </div>
            
            <div className="mb-8">
              <h3 className="text-primary text-xl font-bold mb-2">Pro</h3>
              <p className="text-slate-500 text-sm">Para creadores y pequeños negocios.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-white text-4xl font-black">
                  {isAnnual ? '$159.999' : '$199.999'} COP
                </span>
                <span className="text-slate-500 text-sm">/mes</span>
              </div>
              {isAnnual && <p className="text-green-500 text-xs mt-2 font-medium">Facturado anualmente ($1.919.988 COP)</p>}
            </div>

            <button 
              onClick={() => onNavigate?.('signup')}
              className="w-full rounded-xl h-12 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all mb-8"
            >
              Suscribirse a Pro
            </button>

            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Todo lo de Gratis, más:</p>
              <FeatureItem text="10 videos generados al mes" highlight />
              <FeatureItem text="Acceso completo a todos los avatares" highlight />
              <FeatureItem text="Sin marca de agua" highlight />
              <FeatureItem text="Soporte prioritario 24/7" highlight />
              <FeatureItem text="Monetización activada" highlight success />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-slate-500 text-sm">Pagos seguros procesados por</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="material-symbols-outlined">credit_card</span> VISA
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="material-symbols-outlined">payments</span> PSE
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="material-symbols-outlined">lock</span> SSL SECURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string; highlight?: boolean; disabled?: boolean; success?: boolean }> = ({ text, highlight, disabled, success }) => (
  <div className={`flex items-start gap-3 text-sm ${disabled ? 'text-slate-600 line-through' : 'text-slate-300'}`}>
    <span className={`material-symbols-outlined text-[20px] ${disabled ? 'text-slate-600' : success ? 'text-success' : highlight ? 'text-primary' : 'text-slate-500'}`}>
      {disabled ? 'cancel' : 'check_circle'}
    </span>
    <span className={highlight ? 'font-medium text-white' : ''}>{text}</span>
  </div>
);

export default Pricing;
