
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface StudioProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login' | 'dashboard' | 'studio') => void;
}

const Studio: React.FC<StudioProps> = ({ onNavigate }) => {
  const [activeTool, setActiveTool] = useState<'planner' | 'analyzer'>('planner');
  
  // Form States
  const [videoPrompt, setVideoPrompt] = useState('');
  const [selectedActor, setSelectedActor] = useState('Mateo');
  const [selectedAccent, setSelectedAccent] = useState('Paisa');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedConcept, setGeneratedConcept] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // API Config from User Request
  const SUPABASE_URL = "https://elgaajtpbehkortwbacn.supabase.co/functions/v1/generate-preview";
  const SUPABASE_KEY = "TU_ANON_PUBLIC_KEY"; // Placeholder solicitado

  const handleGenerateConcept = async () => {
    if (!videoPrompt.trim()) return;
    
    setIsGenerating(true);
    setGeneratedConcept(null);
    setApiResponse(null);
    
    try {
      // 1. Lógica Creativa con Gemini (Cerebro de HablaIA)
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Eres HablaIA, el motor creativo líder de Colombia para anuncios virales.
        
        REGLA DE ORO: 
        Trabaja SOLO con generación de texto y conceptos. NO intentes generar multimedia (audio/video).
        
        FORMATO DE RESPUESTA REQUERIDO:
        1. # Título del Anuncio
        2. **Actor IA seleccionado**: [Nombre]
        3. **Región / Acento**: [Acento]
        4. ## Guion Publicitario (TikTok/Reels Style)
           [Texto del guion con tiempos]
        5. ## Storyboard Detallado (Concepto Visual)
           - Escena 1: [Visual + Audio]
           - Escena 2: [Visual + Audio]
           ...
        6. ## Indicaciones Pro de Voz
           - Tono: [Tono]
           - Velocidad: [Velocidad]
           - Emoción: [Emoción]
        7. ### CTA Final: [Call to Action]

        LENGUAJE:
        Usa español colombiano comercial, natural, persuasivo y cercano. Enfócate en la conversión para redes sociales.
        Aclara SIEMPRE al final que esto es una PREVISUALIZACIÓN CONCEPTUAL.
      `;

      const userMessage = `
        Genera una propuesta creativa de anuncio para: "${videoPrompt}"
        Actor: ${selectedActor}
        Acento: ${selectedAccent}
        ${selectedImage ? 'He adjuntado una imagen de mi producto para que te bases en ella.' : ''}
      `;

      const geminiResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.85,
        },
      });

      const creativeText = geminiResponse.text || "";
      setGeneratedConcept(creativeText);

      // 2. Integración con la API de Supabase solicitada
      try {
        const response = await fetch(SUPABASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'apikey': SUPABASE_KEY
          },
          body: JSON.stringify({
            prompt: videoPrompt,
            actor: selectedActor,
            accent: selectedAccent,
            creative_script: creativeText,
            image_reference: selectedImage
          })
        });

        if (response.ok) {
          const data = await response.json();
          setApiResponse(data);
          console.log("Respuesta de la API de Previsualización:", data);
        } else {
          console.warn("La llamada a la API de Previsualización falló, continuando con modo conceptual.");
        }
      } catch (apiErr) {
        console.error("Error al llamar a la API de Supabase:", apiErr);
      }

    } catch (error: any) {
      console.error("HablaIA Studio Error:", error);
      alert("Error de conexión creativa. Revisa tu internet o intenta más tarde.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark font-display">
      {/* Sidebar Section */}
      <aside className="w-64 flex-shrink-0 border-r border-border-dark bg-[#0a0f1a] flex flex-col p-5">
        <div 
          onClick={() => onNavigate('dashboard')} 
          className="flex items-center gap-3 py-4 cursor-pointer group mb-10"
        >
          <div className="size-9 flex items-center justify-center rounded-xl bg-surface-dark text-slate-400 group-hover:text-white group-hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </div>
          <h1 className="text-white text-lg font-black tracking-tight">HABLAIA</h1>
        </div>
        
        <nav className="flex flex-col gap-3">
          <SideButton 
            active={activeTool === 'planner'} 
            onClick={() => setActiveTool('planner')} 
            icon="auto_awesome_motion" 
            label="Planificador Pro" 
          />
          <SideButton 
            active={activeTool === 'analyzer'} 
            onClick={() => setActiveTool('analyzer')} 
            icon="psychology" 
            label="Analizador IA" 
          />
        </nav>

        <div className="mt-auto p-5 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-2 text-primary mb-2">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Motor Conceptual v2.1</span>
          </div>
          <p className="text-[10px] text-slate-500 leading-snug">
            Generando estrategias y storyboards optimizados para el mercado colombiano.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[#0f1115] scroll-smooth">
        <div className="max-w-4xl mx-auto p-8 md:p-14 pb-24">
          {activeTool === 'planner' ? (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <header className="flex flex-col gap-2">
                <h2 className="text-4xl font-black text-white tracking-tight">Studio Creativo</h2>
                <p className="text-slate-500 text-lg">Tu idea transformada en un guion y storyboard ganador en segundos.</p>
              </header>

              {/* Creator Box */}
              <div className="bg-surface-dark border border-border-dark rounded-[2rem] p-8 space-y-8 shadow-2xl relative group">
                <div className="absolute -top-12 -right-12 size-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Actor de IA</label>
                    <div className="flex flex-wrap gap-2">
                      {['Mateo', 'Sofia', 'Andres', 'Camila'].map(actor => (
                        <button 
                          key={actor}
                          onClick={() => setSelectedActor(actor)}
                          className={`flex-1 min-w-[80px] h-11 rounded-xl font-bold text-xs border transition-all ${selectedActor === actor ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-background-dark border-border-dark text-slate-500 hover:text-slate-300'}`}
                        >
                          {actor}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Región / Acento</label>
                    <select 
                      value={selectedAccent} 
                      onChange={(e) => setSelectedAccent(e.target.value)} 
                      className="w-full bg-background-dark border-border-dark rounded-xl text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option>Paisa (Antioquia)</option>
                      <option>Rolo (Bogotá)</option>
                      <option>Costeño (Costa Caribe)</option>
                      <option>Caleño (Valle del Cauca)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">¿Qué vamos a vender hoy?</label>
                  <textarea 
                    value={videoPrompt} 
                    onChange={(e) => setVideoPrompt(e.target.value)} 
                    placeholder="Ej: Promo de hamburguesas 2x1 para delivery en Bogotá, tono urgente y antojador..."
                    className="w-full bg-background-dark border-border-dark rounded-2xl text-white p-6 h-44 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-700 font-medium" 
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-5 items-center">
                  <div className="w-full md:w-auto flex-1">
                    <div 
                      onClick={() => fileInputRef.current?.click()} 
                      className={`h-16 rounded-2xl border-2 border-dashed transition-all flex items-center justify-center cursor-pointer ${selectedImage ? 'bg-success/5 border-success/40 text-success' : 'bg-background-dark border-border-dark hover:border-primary/40 text-slate-500'}`}
                    >
                      <span className="material-symbols-outlined mr-3">
                        {selectedImage ? 'task_alt' : 'image_search'}
                      </span>
                      <span className="text-xs font-black uppercase tracking-widest">
                        {selectedImage ? 'Referencia Cargada ✓' : 'Subir Foto Producto'}
                      </span>
                    </div>
                    <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleFileChange} />
                  </div>
                  
                  <button 
                    onClick={handleGenerateConcept} 
                    disabled={isGenerating || !videoPrompt} 
                    className="w-full md:min-w-[280px] h-16 bg-primary hover:bg-primary-hover disabled:bg-slate-800 disabled:text-slate-600 text-white font-black rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                  >
                    {isGenerating ? (
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined animate-spin">refresh</span>
                        PENSANDO...
                      </span>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">rocket_launch</span>
                        CREAR STORYBOARD
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Result Area */}
              {(generatedConcept || apiResponse) && (
                <div className="animate-in fade-in zoom-in-95 duration-1000 space-y-8">
                  
                  {/* Visualización de la respuesta de la API (Si existe) */}
                  {apiResponse && (
                    <div className="bg-surface-dark border-2 border-primary/50 rounded-[2rem] p-6 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-primary">dynamic_feed</span>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Previsualización Técnica Generada</h4>
                      </div>
                      <div className="p-4 bg-background-dark/50 rounded-xl text-slate-300 text-sm font-mono overflow-auto max-h-[300px]">
                        <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
                      </div>
                    </div>
                  )}

                  <div className="bg-surface-dark border-l-8 border-primary rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
                    {/* Professional Header */}
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-5">
                        <div className="size-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 rotate-3">
                          <span className="material-symbols-outlined text-4xl">script</span>
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-white tracking-tighter">Propuesta de Guion</h3>
                          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            Concepto Listo para Producción
                          </div>
                        </div>
                      </div>
                      <button className="hidden md:flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">print</span>
                        <span className="text-xs font-bold">Imprimir</span>
                      </button>
                    </div>
                    
                    {/* Content Display */}
                    <div className="prose prose-invert max-w-none">
                      <div className="bg-background-dark/80 rounded-3xl p-10 border border-border-dark text-slate-200 leading-relaxed font-body text-lg shadow-inner">
                        {generatedConcept?.split('\n').map((line, i) => (
                          <p key={i} className={`mb-3 ${line.startsWith('#') ? 'text-primary font-black text-2xl mt-6 first:mt-0' : ''}`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Pro Disclaimer & Actions */}
                    <div className="mt-12 pt-10 border-t border-border-dark flex flex-col md:flex-row gap-8 items-center justify-between">
                      <div className="flex items-start gap-4 max-w-lg bg-primary/5 p-4 rounded-xl border border-primary/10">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <p className="text-[11px] text-slate-400 font-medium leading-normal italic">
                          MODO PREVISUALIZACIÓN: Esta es una PROPUESTA CREATIVA textual y técnica. 
                          Para generar el video hiperrealista final con el actor seleccionado y acento sincronizado, 
                          debes contar con una suscripción Pro activa.
                        </p>
                      </div>
                      <div className="flex gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none h-14 px-8 rounded-2xl bg-surface-dark border border-border-dark text-slate-300 font-black text-sm hover:text-white hover:border-slate-500 transition-all flex items-center justify-center gap-3">
                          <span className="material-symbols-outlined">content_copy</span>
                          Copiar Guion
                        </button>
                        <button 
                          onClick={() => onNavigate('pricing')} 
                          className="flex-1 md:flex-none h-14 px-10 rounded-2xl bg-success text-white font-black text-sm hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-success/20 animate-bounce"
                        >
                          <span className="material-symbols-outlined">movie_edit</span>
                          RENDERIZAR PRO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[65vh] text-center space-y-8 animate-in fade-in duration-500">
              <div className="size-32 rounded-full bg-surface-dark flex items-center justify-center border border-border-dark shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                <span className="material-symbols-outlined text-6xl text-primary relative z-10">smart_toy</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black text-white">Analizador de Marca IA</h2>
                <p className="text-slate-500 max-w-sm mx-auto text-lg leading-relaxed">
                  Pronto: Analiza tu producto desde una foto y deja que HablaIA decida la mejor estrategia de acento y actor para tu nicho.
                </p>
              </div>
              <button 
                onClick={() => setActiveTool('planner')}
                className="text-primary font-black hover:text-white transition-colors flex items-center gap-3 group px-6 py-2 border border-primary/20 rounded-full hover:bg-primary/5"
              >
                Volver al Studio
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const SideButton: React.FC<{ active: boolean; onClick: () => void; icon: string; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${active ? 'bg-primary text-white shadow-2xl shadow-primary/30 translate-x-2' : 'text-slate-500 hover:text-slate-300 hover:bg-surface-dark'}`}
  >
    <span className={`material-symbols-outlined ${active ? 'filled' : ''}`}>{icon}</span>
    <span className="text-sm font-black uppercase tracking-widest">{label}</span>
  </button>
);

export default Studio;
