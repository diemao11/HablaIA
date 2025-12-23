
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login') => void;
  currentView: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="relative w-full z-50 border-b border-solid border-border-dark bg-background-dark/95 backdrop-blur-md sticky top-0">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
        <div className="layout-content-container flex w-full max-w-[1280px] items-center justify-between py-4">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-white cursor-pointer group"
          >
            <div className="size-9 text-primary group-hover:scale-110 transition-transform flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-3xl leading-none">smart_toy</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">HablaIA</h2>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate('home')}
                className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-primary font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className={`text-sm font-medium transition-colors ${currentView === 'how-it-works' ? 'text-primary font-bold border-b-2 border-primary' : 'text-slate-300 hover:text-white'}`}
              >
                Cómo Funciona
              </button>
              <button 
                onClick={() => onNavigate('actors')}
                className={`text-sm font-medium transition-colors ${currentView === 'actors' ? 'text-primary font-bold border-b-2 border-primary' : 'text-slate-300 hover:text-white'}`}
              >
                Actores IA
              </button>
              <button 
                onClick={() => onNavigate('creators')}
                className={`text-sm font-medium transition-colors ${currentView === 'creators' ? 'text-primary font-bold border-b-2 border-primary' : 'text-slate-300 hover:text-white'}`}
              >
                Para Creadores
              </button>
              <button 
                onClick={() => onNavigate('pricing')}
                className={`text-sm font-bold transition-all px-2 py-1 rounded ${currentView === 'pricing' ? 'text-primary bg-primary/10 border-b-2 border-primary' : 'text-slate-300 hover:text-white'}`}
              >
                Precios
              </button>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center gap-3">
               <button 
                onClick={() => onNavigate('login')}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
               >
                 Login
               </button>
               <button 
                onClick={() => onNavigate('signup')}
                className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all"
              >
                <span className="truncate">Regístrate</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
