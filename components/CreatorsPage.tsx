
import React, { useState } from 'react';

interface CreatorsPageProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators') => void;
}

const CreatorsPage: React.FC<CreatorsPageProps> = ({ onNavigate }) => {
  const [videoCount, setVideoCount] = useState(50);
  
  // Base calculation: 30,000 COP per video
  const estimatedEarnings = (videoCount * 30000).toLocaleString('es-CO');

  return (
    <div className="bg-background-dark text-white font-display overflow-x-hidden antialiased">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary/10 blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] pointer-events-none -z-10 translate-y-1/2"></div>
        
        <div className="flex justify-center py-10 md:py-20 px-4 md:px-10">
          <div className="flex flex-col max-w-[1100px] flex-1">
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center md:justify-start gap-2">
                    <span className="bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full border border-success/20 uppercase tracking-wider">Nuevo en Colombia</span>
                  </div>
                  <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                    Monetiza tu voz y tu imagen <span className="text-gradient">con IA</span>
                  </h1>
                  <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-[540px] mx-auto md:mx-0">
                    Conviértete en uno de los primeros actores digitales colombianos. Deja que la IA trabaje por ti generando videos publicitarios mientras tú recibes ingresos pasivos recurrentes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                  <button 
                    onClick={() => onNavigate('pricing')}
                    className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-lg shadow-primary/25"
                  >
                    Quiero ser creador
                  </button>
                  <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-surface-dark hover:bg-slate-800 border border-border-dark text-white text-base font-bold transition-all">
                    Ver demo
                  </button>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm mt-2">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  <span>Tus datos y derechos están 100% protegidos</span>
                </div>
              </div>
              
              {/* Right Image - Updated to close-up face with recording UI */}
              <div className="flex-1 w-full max-w-[500px]">
                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-border-dark shadow-2xl bg-surface-dark group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10"></div>
                  
                  {/* The face image */}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop')" }}
                  ></div>
                  
                  {/* Recording UI Overlays */}
                  <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                        <div className="size-2.5 rounded-full bg-red-600 animate-pulse"></div>
                        <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">REC</span>
                      </div>
                      <div className="text-white/40">
                         <span className="material-symbols-outlined text-3xl">crop_free</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                       <div className="text-white/40 rotate-180">
                         <span className="material-symbols-outlined text-3xl">crop_free</span>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono text-white/80 border border-white/10">
                        4K / 60 FPS
                      </div>
                    </div>
                  </div>

                  {/* Scanning Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-30 animate-[scan_3s_ease-in-out_infinite]"></div>
                  
                  {/* Floating UI Element simulating AI scanning */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background-dark/90 backdrop-blur-md border border-border-dark p-4 rounded-xl z-20 flex items-center gap-4">
                    <div className="size-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">face_retouching_natural</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-border-dark rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-success w-3/4 rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Digitalizando rostro...</span>
                        <span className="text-success font-bold">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-border-dark bg-background-dark/50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-10 py-8 flex flex-wrap justify-center md:justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-black text-white">+500</span>
            <span className="text-slate-500 text-sm">Creadores registrados</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-black text-white">$2M COP</span>
            <span className="text-slate-500 text-sm">Ingreso promedio mensual</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-slate-500 text-sm">Control de imagen</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-black text-white">24/7</span>
            <span className="text-slate-500 text-sm">Generación de ingresos</span>
          </div>
        </div>
      </div>

      {/* Feature Section: How You Earn */}
      <div className="relative py-20 px-4 md:px-10 flex justify-center bg-background-dark">
        <div className="max-w-[1100px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center max-w-[720px] mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Cómo ganas dinero
            </h2>
            <p className="text-slate-400 text-lg font-normal leading-relaxed">
              Nuestro modelo de monetización está diseñado para que generes ingresos recurrentes con un único esfuerzo inicial. Tú pones la cara, nosotros la tecnología.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="attach_money" 
              title="Regalías por uso" 
              description="Recibe un pago cada vez que una marca genere un video utilizando tu avatar o tu voz. Cuanto más popular sea tu perfil, más ganas."
              color="primary"
            />
            <FeatureCard 
              icon="all_inclusive" 
              title="Ingresos Pasivos" 
              description="Graba en nuestro estudio una sola vez y sigue ganando dinero indefinidamente. Tu avatar trabaja para ti mientras duermes o viajas."
              color="secondary"
            />
            <FeatureCard 
              icon="verified_user" 
              title="Control Total" 
              description="Tú tienes la última palabra. Aprueba o rechaza las marcas que quieren usar tu imagen. Nada se publica sin tu configuración previa."
              color="success"
            />
          </div>
        </div>
      </div>

      {/* Earnings Calculator Section */}
      <div className="py-20 px-4 md:px-10 flex justify-center bg-background-dark border-y border-border-dark">
        <div className="max-w-[900px] w-full bg-surface-dark rounded-2xl border border-border-dark p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 flex flex-col gap-6 w-full text-left">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Calculadora de Ingresos</h3>
                <p className="text-slate-400 text-sm">Estima cuánto podrías ganar basado en la demanda de videos.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium text-slate-300">
                  <span>Videos generados al mes</span>
                  <span className="text-primary font-bold">{videoCount} videos</span>
                </div>
                <input 
                  className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer accent-primary" 
                  max="200" 
                  min="0" 
                  type="range" 
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value))}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0</span>
                  <span>200+</span>
                </div>
              </div>
              <div className="p-4 bg-background-dark rounded-lg border border-border-dark flex gap-3 items-start">
                <span className="material-symbols-outlined text-success mt-0.5">trending_up</span>
                <p className="text-xs text-slate-400">Los creadores top están generando más de 150 videos mensuales con marcas reconocidas.</p>
              </div>
            </div>
            <div className="w-full md:w-auto min-w-[300px] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-primary/20 to-primary/5 rounded-xl border border-primary/30 text-center shadow-2xl">
              <span className="text-slate-300 text-sm font-medium mb-1 uppercase tracking-widest">Ganancias estimadas</span>
              <h4 className="text-5xl font-black text-white tracking-tight mb-2">${estimatedEarnings}</h4>
              <span className="text-slate-400 text-xs">Pesos Colombianos / mes</span>
              <button 
                onClick={() => onNavigate('pricing')}
                className="mt-6 w-full py-3 px-4 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
              >
                Empezar ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative py-20 px-4 md:px-10 flex justify-center bg-background-dark">
        <div className="flex flex-col max-w-[800px] flex-1">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-bold leading-tight">Pasos para creadores</h2>
            <p className="text-slate-400 mt-3">El proceso es simple, rápido y guiado.</p>
          </div>
          <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4">
            <TimelineStep 
              num={1} 
              icon="person_check" 
              title="Registro y Verificación" 
              description="Crea tu cuenta y valida tu identidad con tu documento colombiano. Firmamos un acuerdo digital para proteger tu imagen." 
              isFirst
            />
            <TimelineStep 
              num={2} 
              icon="mic" 
              title="Grabación de Estudio" 
              description="Sube un video de 2 minutos hablando frente a cámara y graba 30 frases de audio para entrenar nuestro modelo de voz." 
            />
            <TimelineStep 
              num={3} 
              icon="memory" 
              title="Entrenamiento de IA" 
              description="Nuestros servidores procesan tu información durante 24-48 horas para crear un clon digital hiperrealista." 
            />
            <TimelineStep 
              num={4} 
              icon="savings" 
              title="Publicación y Ganancias" 
              description="Tu perfil aparece en el marketplace. Las marcas te eligen, generan videos y tú recibes notificaciones de pago." 
              isLast
              iconColor="success"
            />
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-t from-background-dark to-surface-dark py-24 px-4 border-t border-border-dark">
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-8 items-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">¿Listo para ser parte del futuro?</h2>
          <p className="text-slate-400 text-lg max-w-[600px]">Únete a la comunidad de creadores que están revolucionando la publicidad en Colombia.</p>
          <button 
            onClick={() => onNavigate('pricing')}
            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-16 px-10 bg-primary hover:bg-primary-hover text-white text-lg font-bold shadow-[0_0_20px_rgba(19,91,236,0.4)] transition-all transform hover:-translate-y-1"
          >
            Crear mi cuenta gratis
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
  <div className="group flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors relative overflow-hidden text-left">
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-${color}`}>
      <span className="material-symbols-outlined text-8xl">{icon}</span>
    </div>
    <div className={`size-12 rounded-lg bg-${color}/20 flex items-center justify-center text-${color} mb-2`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <h3 className="text-white text-xl font-bold">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const TimelineStep: React.FC<{ 
  num: number; 
  icon: string; 
  title: string; 
  description: string; 
  isFirst?: boolean; 
  isLast?: boolean; 
  iconColor?: string 
}> = ({ icon, title, description, isFirst, isLast, iconColor }) => (
  <>
    <div className="flex flex-col items-center gap-1 pt-1">
      <div className={`size-10 rounded-full ${iconColor === 'success' ? 'bg-success' : 'bg-primary'} flex items-center justify-center shadow-lg z-10`}>
        <span className="material-symbols-outlined text-white text-xl">{icon}</span>
      </div>
      {!isLast && <div className="w-[2px] bg-border-dark h-full grow min-h-[60px]"></div>}
    </div>
    <div className={`flex flex-1 flex-col ${!isLast ? 'pb-12' : 'pb-4'} pt-1 text-left`}>
      <h3 className="text-white text-lg font-bold leading-normal mb-1">{title}</h3>
      <p className="text-slate-400 text-base font-normal leading-relaxed">
        {description}
      </p>
    </div>
  </>
);

export default CreatorsPage;
