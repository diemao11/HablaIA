
import React from 'react';

const Voices: React.FC = () => {
  const avatars = [
    {
      region: 'Medellín',
      title: 'Acento Paisa',
      description: 'Cercano, amable y perfecto para ventas directas y servicio al cliente.',
      tag: 'Popular',
      image: 'https://picsum.photos/400/600?random=10'
    },
    {
      region: 'Barranquilla / Cartagena',
      title: 'Acento Costeño',
      description: 'Enérgico, alegre y directo. Ideal para promociones festivas y turismo.',
      tag: null,
      image: 'https://picsum.photos/400/600?random=11'
    },
    {
      region: 'Bogotá',
      title: 'Acento Rolo',
      description: 'Profesional, claro y neutro. Excelente para comunicados corporativos y noticias.',
      tag: null,
      image: 'https://picsum.photos/400/600?random=12'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="acentos">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 mx-auto max-w-[1280px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Diversidad de Voces Colombianas</h2>
            <p className="text-slate-400 text-lg">
              Elige el acento perfecto para tu audiencia objetivo. Desde la calidez paisa hasta la energía costeña.
            </p>
          </div>
          <button className="flex items-center text-primary font-bold hover:text-white transition-colors">
            Ver catálogo completo <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatars.map((avatar, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url('${avatar.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2 mb-2">
                  {avatar.tag && (
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-500 text-black">{avatar.tag}</span>
                  )}
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">{avatar.region}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{avatar.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{avatar.description}</p>
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-lg">play_arrow</span> Escuchar demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
