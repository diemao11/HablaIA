
import React from 'react';

interface ActorsPageProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors') => void;
}

const ActorsPage: React.FC<ActorsPageProps> = ({ onNavigate }) => {
  const actors = [
    {
      name: 'Mateo',
      accent: 'Paisa',
      style: 'Venta Directa',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBABaS8Y-PUL0B55Ktcoo14tyAggjrSSxHMUXBRnONw8Uz74XT5uaMh6jCucNB4slJjqPtucoyyIgdtghrl7_cID-4bV-Gkk3HzxmDZJWg92V0ZggSILNR1pr6Rt328UCp2xE3o8z0k6CpXArOLp28--ZDRn2v6YjupGKVJPWTnAva5gz5_1YvrkaBcLgNWqI-wyckrFRAb3FvU6oOWG-gq8Cr31_THry1oV97MqBPkkxRVeBT5NzIua68AdZZQA2DWQUCyJRMWdnrz'
    },
    {
      name: 'Sofia',
      accent: 'Rola',
      style: 'Corporativo',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpRi2m6VV8f1JyUkrrEhmp84Drz8AbDl80UuP8TLsB-cBIMKoKOwQZ4jv2JA1Aqu9M-dNEDGFs6fuw3q2DTkraIDT3zNMvXqLzKqEUScytSd5dpYuNgr2lqbNR2GoTfdjxjqdZdNC0AxqJr_9h0Fp8oir3yWTvC_Km6Vc9sRmYafdRrq4PJpsMjcqQeUfPC4S13wvxQ0aBKSEXvL3eJH4TI5-yrsKGO2dZfyA3wV2WI6nG2Ql9rWVIZqpXj5GbTti_c7GuG2rh75RW'
    },
    {
      name: 'Andres',
      accent: 'Costeño',
      style: 'Alegre',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXECpKHTuEap_0I4V9n0g2sUzxExI_PRwuf_BlLGZHkA_t3bf20AfRS_x8L_OTbBYFG3Ibri0whDh4v7BQZYUuChVnjCZxKJRgykgoTYe6uz66DyQvXRkFP5EegjZVF_AkMKD9ro8-VyrBRn0a3_xw5nK4M13K8xqI6rrq97s95OzzXogvgT07fuqol-qlKzMWoxqMv-XwkuApOeTwDNK4aKYJnOHuuQSBVejFH7IxOh362nZJ11SNZl4nCTwuX_XO6LjwVlcIkv41'
    },
    {
      name: 'Camila',
      accent: 'Caleña',
      style: 'Lifestyle',
      rating: '4.7',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCihvBOMkjaPtYgp-wTt1TB5XXMziIuQjmFAV2FNAWSBdRoO1dZJ5Pt8Qk6nI1dre0puGGh8COdW2PvoekUOK0IlAybA6IDy9XPLLLVymxqdgY-tajL0Dvpne5yVnoSKXf9iwXWRZloGWfnkeZvlitxQmGF_fPVK_huabVUGft8wy7mn9f28eLGgFBbq4yFkG2lVWctQNf8TttvFgtPNLT8HiMryAzAC_vjj51FDHUIoNbfCWSodARIoe_cAigFDcSYo5EZKgQTtYEF'
    },
    {
      name: 'Juan',
      accent: 'Santandereano',
      style: 'Serio',
      rating: '4.6',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-z4wmQNvhuR8SMBKSBVW3DXI0x-bib-6SZOC9-PwoPhZDN7jVuZdnVtgxsUznZKgXmqAPfZkEbbt2qOgAJufHzh-WS9VzZZJbXbnyy4CrfLya8mo6hqaViokLpr9sotGWTfdGZBZDEscYMO_eoakklLVv7_ixhBdNLu916iE4hKC9tG5Uh0IlBABPcfkwe7qsfX5CAhtUx1qKKvaJ8z1CrdxmQYaWBP8Z1WeOjncpTSazmYvAj3bjoBu45hO27TP9YrUPP55L1qaX'
    },
    {
      name: 'Valentina',
      accent: 'Paisa',
      style: 'Amigable',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoTJiNqYKiUUJPShzicQidilNvTGS_u-s2ZMY1Wr2YyTXdQE8hSnOwzKyvulxn4zGFtmeBtb3Qjui9MjuptM8ppFssPA5GQcpx7U0Cexmhwc40XtTI6SWHr-eWCcw0kvhQrSXurrYEYQ2SJv1AEw6ee1FSuFr8XbgnAp9RYAxyDuSF9IW9rVZwvMfbf43ZS_JMRgK-zO4H_5-GUNj_lXofs9gfxpZRY2EsM9a7QssTKc8CydJfY62ptOFURG7smV61c_tArJBvriM3'
    },
    {
      name: 'Diego',
      accent: 'Rolo',
      style: 'Tech',
      rating: '4.5',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf8HESyuQEGg-D9O5XV50_OLHZFP38bdM-V2P3jEC7UhmFWbs2QVRpnvVEC-SUOmmGjrZYzVOC7zbL-gbJI0n3WJst54w6THR28_n1z5GnrS_E9Db3IbpycV4zzaQRGAyKDMP7Qpu2_UxZCYousT1OqUFNfGiaJMidiX8OJli2slaqO-4uRYF9sYbNsFhGXLIFvsz9E5IsqPExjg_r5SCVn_T4uYkkKZz_Fxsin-ZBNy4bzRDg3X8ssJ9EI126_4elNDfdeqFE8dnE'
    },
    {
      name: 'Mariana',
      accent: 'Costeño',
      style: 'Festivo',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-oW9UZ3YeJUKRcPuRpQiGaIzpLHai-ZHKxverpQFuqWyC2PamCkDWvCztjG7Tj7V2o5TiiRM_-Xf9rlbeZkcG-ouQwVP2UG3qchAiWcR9vqSPaJSd9pQDYnnlQ_o2PpDnIFoou84KfT1jF-ziO_0HPRWfrI38QvoJqfTMfBIkeGycP_7BvRgltMnXaa5ZkAzQie8jWuGxCLnFaO1_YWlwrgp_gEDfneXUQ3-ZrdBRbOuckRU-7NhFHcbS1MxrQ0TNFTadak3Rw1Kw'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-background-dark min-h-screen">
      <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10 lg:px-40 w-full">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          
          {/* Hero Section */}
          <div className="bg-surface-dark/50 rounded-2xl p-6 md:p-10 border border-border-dark">
            <div className="flex flex-col gap-8 md:flex-row items-center">
              <div className="flex-1 flex flex-col gap-6 text-left">
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                  Actores de IA colombianos <span className="text-primary">listos para vender</span>
                </h1>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                  Cada actor fue creado por un creador real colombiano. Escala tu producción de contenido con talento local digitalizado, acentos auténticos y tonos persuasivos.
                </p>
                <div className="flex gap-4 pt-2">
                  <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-lg shadow-primary/25">
                    Ver Demo
                  </button>
                  <button 
                    onClick={() => onNavigate('how-it-works')}
                    className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-border-dark text-white hover:bg-surface-dark text-base font-medium transition-all"
                  >
                    Cómo funciona
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[45%] aspect-video md:aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYaGxEe1RYIVLLpBpTJ84WGe9TSyDXVa0wLA40l5mbGqay78emc54TwGNyY2imaW4thkmZrTBerceDuvDj2YUxPO1CkgqBdmaGFQVKwnFdXPpEUKoDPM6pp5iTyoju2rX016dd7eO65w5tJNXPmD3KIEi1g14ZuvBo1cHiglff_VbcGtH27PFvQNJWvWXqDTjkZsA4DuDT45pIFD6yOMtFNdVy5aIQ1j8iETpcHZwBACl2ZZqT3VmFUXrpbXOhFmZkQwpGJbXEbrJl")' }}
                ></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-bold">Explorar Talento</h3>
              <span className="text-slate-500 text-sm">Mostrando {actors.length} de 42 actores</span>
            </div>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Acento', 'Tono', 'Género', 'Estilo'].map((filter) => (
                <div key={filter} className="relative group">
                  <button className="flex h-10 items-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary px-4 transition-colors">
                    <p className="text-slate-300 text-sm font-medium">{filter}: <span className="text-slate-500">Todos</span></p>
                    <span className="material-symbols-outlined text-slate-500 text-[20px]">keyboard_arrow_down</span>
                  </button>
                </div>
              ))}
              <div className="ml-auto flex items-center">
                <button className="text-primary text-sm font-semibold hover:underline">Limpiar filtros</button>
              </div>
            </div>
          </div>

          {/* Actor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {actors.map((actor, idx) => (
              <div key={idx} className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-dark border border-border-dark shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url("${actor.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-400 text-[14px]">verified</span>
                    <span className="text-xs text-white font-medium">Verificado</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-primary/90 hover:bg-primary text-white rounded-full p-3 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-end justify-between mb-1">
                      <div>
                        <h3 className="text-white text-xl font-bold">{actor.name}</h3>
                        <p className="text-slate-300 text-sm font-medium">{actor.accent} • {actor.style}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-md px-2 py-1">
                        <span className="text-xs text-white font-bold">{actor.rating} ★</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border-dark bg-surface-dark">
                  <button 
                    onClick={() => onNavigate('pricing')}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold h-10 transition-colors"
                  >
                    <span>Usar este actor</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="flex justify-center mt-8 pb-12">
            <button className="text-slate-400 hover:text-primary font-medium flex items-center gap-2 transition-colors group">
              Ver más actores
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActorsPage;
