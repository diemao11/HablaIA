
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      color: 'primary',
      title: 'Escribe tu guion',
      description: 'Ingresa el texto que quieres que diga el avatar o usa nuestra IA para generar ideas creativas.'
    },
    {
      num: 2,
      color: 'secondary',
      title: 'Selecciona tu actor',
      description: 'Elige entre +50 actores colombianos con diferentes edades, estilos y acentos regionales.'
    },
    {
      num: 3,
      color: 'success',
      title: 'Descarga y publica',
      description: 'En minutos tu video estará renderizado en 4K listo para ser compartido en TikTok, Instagram o YouTube.'
    }
  ];

  return (
    <section className="py-20 bg-surface-dark border-y border-border-dark" id="como-funciona">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crea tu video en 3 pasos simples</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">No necesitas equipos, cámaras ni estudios de grabación. Solo tu creatividad.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border-dark to-transparent z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full bg-background-dark border-4 border-surface-dark flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                <span className={`text-4xl font-black text-${step.color}`}>{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
