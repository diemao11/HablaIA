
import React, { useState, useEffect } from 'react';

const AIPreviewVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const script = [
    "¡Hola! Soy Mateo, tu nuevo actor de IA.",
    "Puedo hablar con un acento paisa auténtico...",
    "O un tono corporativo rolo muy profesional.",
    "Genera anuncios ganadores para tu marca hoy.",
    "HablaIA: El futuro del video está aquí."
  ];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % script.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full max-w-[720px] mx-auto group">
      {/* Glow Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl">
        {/* Video Stage */}
        <div className="aspect-video w-full bg-slate-900 relative overflow-hidden">
          {/* Main Video (Simulated with high-quality placeholder) */}
          <video 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Super_Slow_Motion_1080p_014_preview.mp4"
            loop
            muted={!isPlaying}
            playsInline
            id="preview-actor-video"
          />

          {/* Overlay Darkener */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          {/* AI Metadata Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 animate-in slide-in-from-left-4 duration-700">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="size-2 bg-success rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">AI Actor: Mateo (Active)</span>
            </div>
            <div className="bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px] text-primary">spatial_audio_off</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Acento: Paisa (Auténtico)</span>
            </div>
          </div>

          {/* Resolution Badge */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded text-[9px] font-mono text-white/70">
            4K / 60FPS / VEO 3.1
          </div>

          {/* Script Teleprompter */}
          <div className="absolute bottom-6 left-0 w-full px-8 text-center pointer-events-none">
            <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
              {script[currentTextIndex]}
            </p>
          </div>

          {/* Interaction Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer group/btn" onClick={() => setIsPlaying(true)}>
              <div className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
              </div>
            </div>
          )}

          {/* Mute/Unmute Toggle */}
          {isPlaying && (
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute bottom-4 right-4 size-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">pause</span>
            </button>
          )}
        </div>

        {/* Timeline Simulation Footer */}
        <div className="p-4 bg-background-dark border-t border-border-dark flex items-center gap-4">
          <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${((currentTextIndex + 1) / script.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Sincronizando Labios...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPreviewVideo;
