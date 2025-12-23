
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'mic',
      title: 'Acentos Auténticos',
      description: 'Voces Paisas, Costeñas y Rolas que suenan naturales, no robóticas. Entrenadas con miles de horas de audio local.',
      color: 'blue'
    },
    {
      icon: 'bolt',
      title: 'Renderizado Rápido',
      description: 'Crea videos en minutos, no en días. Nuestro motor de IA optimizado te permite iterar tus campañas rápidamente.',
      color: 'purple'
    },
    {
      icon: 'monetization_on',
      title: 'Monetización',
      description: '¿Eres creador? Sube tu imagen y voz a la plataforma y gana regalías cada vez que una marca use tu avatar.',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 bg-background-dark border-t border-border-dark" id="beneficios">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Características Principales</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Todo lo que necesitas para escalar</h3>
          <p className="text-slate-400 text-lg">
            Nuestra plataforma ofrece herramientas de vanguardia diseñadas específicamente para el mercado latino, eliminando la barrera del idioma y la cultura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className={`h-12 w-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-6 group-hover:bg-${feature.color}-500 group-hover:text-white transition-all`}>
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
