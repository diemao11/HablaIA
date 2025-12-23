
import React, { useState } from 'react';
import { generateScript } from '../services/geminiService';

const ScriptGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const script = await generateScript(prompt);
      setResult(script);
    } catch (error) {
      console.error('Error generating script:', error);
      setResult('Lo sentimos, hubo un error al generar el guion. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background-dark/50" id="script-tool">
      <div className="container px-4 mx-auto max-w-[1000px]">
        <div className="bg-surface-dark border border-border-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-8xl text-primary">auto_awesome</span>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Generador de Guiones con IA</h2>
            <p className="text-slate-400 mb-8">
              Describe tu producto o idea y nosotros crearemos un guion optimizado para anuncios colombianos.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ej: Un anuncio para una heladería en Medellín que quiere destacar sus sabores frutales..."
                  className="w-full bg-background-dark border border-border-dark rounded-xl p-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px] transition-all"
                />
              </div>
              
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className={`flex items-center justify-center gap-2 rounded-xl h-14 px-8 font-bold text-white transition-all shadow-lg ${
                  loading || !prompt 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-hover shadow-primary/20'
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando con IA...
                  </span>
                ) : (
                  <>
                    <span className="material-symbols-outlined">magic_button</span>
                    Generar Guion Ganador
                  </>
                )}
              </button>
              
              {result && (
                <div className="mt-6 p-6 rounded-xl bg-background-dark border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Resultado de la IA</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(result)}
                      className="text-slate-500 hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                  </div>
                  <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {result}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptGenerator;
