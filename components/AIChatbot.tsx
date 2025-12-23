
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: '¡Hola! Soy el asistente creativo de HablaIA. 🇨🇴 ¿En qué puedo ayudarte a planificar tu próximo anuncio hoy? Recuerda que aquí diseñamos tu estrategia ganadora.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: [...messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `
            Eres el experto comercial de HablaIA. 
            Identidad: Colombiano, experto en marketing digital, cercano, profesional y creativo.
            Reglas:
            1. No puedes generar video ni audio real. Eres un motor de PREVISUALIZACIÓN CONCEPTUAL.
            2. Ayuda a los usuarios a escribir guiones, elegir el acento colombiano ideal para su producto y estructurar storyboards.
            3. Si preguntan por qué no pueden ver el video, explícales que están en el modo de diseño creativo y que el renderizado hiperrealista es parte de los planes Pro.
            4. Usa un tono que motive al usuario a escalar su negocio con acento local.
          `,
          temperature: 0.7
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "Lo siento, tuve un problema procesando tu estrategia creativa." }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Ocurrió un error en la conexión. Por favor intenta de nuevo." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-display">
      {isOpen ? (
        <div className="w-[400px] h-[580px] bg-surface-dark border border-border-dark rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <header className="bg-primary p-5 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
              </div>
              <div>
                <h3 className="font-black text-sm tracking-tight">HABLAIA ASSISTANT</h3>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 bg-success rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white/70 uppercase">Online - Modo Creativo</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-background-dark/20 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-background-dark text-slate-200 border border-border-dark rounded-bl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-background-dark/50 text-slate-400 p-4 rounded-2xl border border-border-dark flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest ml-2">Pensando Estrategia</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-background-dark border-t border-border-dark">
            <div className="relative flex items-center group">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu consulta creativa..."
                className="w-full bg-surface-dark border-border-dark rounded-2xl text-white text-sm py-4 pl-5 pr-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
              <button 
                onClick={handleSendMessage}
                className={`absolute right-3 p-2 rounded-xl transition-all ${input.trim() ? 'text-primary scale-110' : 'text-slate-600'}`}
              >
                <span className="material-symbols-outlined text-3xl">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 rounded-[1.5rem] bg-primary hover:bg-primary-hover text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          <span className="material-symbols-outlined text-3xl relative z-10">bolt</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-background-dark"></span>
          </span>
          <div className="absolute right-full mr-4 bg-white text-primary text-xs font-black px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl pointer-events-none translate-x-4 group-hover:translate-x-0">
            ¿PLANIFICAMOS TU ANUNCIO?
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
