
import React from 'react';

interface DashboardProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login' | 'dashboard' | 'studio') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark font-display">
      {/* SideNavBar */}
      <aside className="w-64 flex-shrink-0 border-r border-border-dark bg-background-dark flex flex-col justify-between hidden md:flex">
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col gap-6">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 px-2 py-2 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold leading-tight">HablaIA</h1>
                <span className="text-slate-400 text-xs">Video Creator SaaS</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 w-full text-left"
              >
                <span className="material-symbols-outlined filled">dashboard</span>
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              <button 
                onClick={() => onNavigate('studio')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-dark transition-colors w-full text-left"
              >
                <span className="material-symbols-outlined">movie_edit</span>
                <span className="text-sm font-medium">HablaIA Studio</span>
              </button>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-dark transition-colors" href="#">
                <span className="material-symbols-outlined">credit_card</span>
                <span className="text-sm font-medium">Mis Créditos</span>
              </a>
              <button 
                onClick={() => onNavigate('actors')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-dark transition-colors w-full text-left"
              >
                <span className="material-symbols-outlined">face</span>
                <span className="text-sm font-medium">Actores IA</span>
              </button>
            </nav>
          </div>
          <div className="flex flex-col gap-2 mt-auto">
            <div 
              onClick={() => onNavigate('login')}
              className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-surface-dark rounded-lg transition-colors"
            >
              <div 
                className="w-8 h-8 rounded-full bg-cover bg-center ring-2 ring-primary/30" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop")' }}
              ></div>
              <div className="flex flex-1 flex-col overflow-hidden">
                <span className="text-sm text-white font-medium truncate">Carlos Ruiz</span>
                <span className="text-xs text-slate-400 truncate">Plan Pro</span>
              </div>
              <span className="material-symbols-outlined text-slate-500 text-sm">logout</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#0f1115]">
        <header className="h-16 flex items-center justify-between border-b border-border-dark px-6 md:px-8 bg-background-dark/50 backdrop-blur-md z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-64 hidden sm:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              <input 
                className="w-full bg-surface-dark border-none rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:ring-1 focus:ring-primary" 
                placeholder="Buscar proyectos..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-surface-dark">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-background-dark"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Bienvenido a HablaIA 👋</h2>
                <p className="text-slate-400 text-base">¿Listo para crear tu próximo anuncio ganador con IA?</p>
              </div>
              <div>
                <button 
                  onClick={() => onNavigate('studio')}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/25 transition-all transform active:scale-95"
                >
                  <span className="material-symbols-outlined">video_call</span>
                  Ir al Studio
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-dark border border-border-dark rounded-xl p-5 relative overflow-hidden group hover:border-primary/40 transition-colors">
                <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">token</span>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-slate-400 text-sm font-medium">Créditos Disponibles</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">120</span>
                    <span className="text-xs text-slate-500">de 200</span>
                  </div>
                  <div className="w-full bg-background-dark h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-primary h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-dark border border-border-dark rounded-xl p-5 relative overflow-hidden group hover:border-secondary/40 transition-colors">
                <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-secondary">movie_creation</span>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-slate-400 text-sm font-medium">Videos Generados</span>
                  <span className="text-3xl font-bold text-white">24</span>
                  <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +4 esta semana
                  </p>
                </div>
              </div>
              <div className="bg-surface-dark border border-border-dark rounded-xl p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-sm font-medium">Plan Actual</span>
                    <span className="text-2xl font-bold text-white">Pro Creator</span>
                  </div>
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded border border-secondary/30">Activo</span>
                </div>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="mt-4 w-full py-2 border border-border-dark rounded-lg text-sm text-slate-300 hover:bg-background-dark hover:text-white transition-colors"
                >
                  Gestionar suscripción
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Actividad Reciente</h3>
              </div>
              <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
                <ProjectItem title="Campaña Café Colombiano" actor="Mateo (Bogotá)" status="processing" progress={45} date="Hace 2 min" />
                <ProjectItem title="Promo Black Friday" actor="Sofia (Medellín)" status="ready" date="Ayer, 14:30" thumb="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface ProjectItemProps {
  title: string;
  actor: string;
  status: 'processing' | 'ready';
  progress?: number;
  date: string;
  thumb?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, actor, status, progress, date, thumb }) => (
  <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border-dark last:border-0 hover:bg-background-dark/50 transition-colors group">
    <div className="col-span-6 md:col-span-5 flex items-center gap-3">
      <div className="w-16 h-10 rounded bg-slate-800 flex items-center justify-center overflow-hidden relative border border-border-dark">
        {status === 'processing' ? (
          <span className="material-symbols-outlined text-slate-600 animate-pulse">smart_display</span>
        ) : (
          <img src={thumb} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <p className="text-sm font-medium text-white truncate group-hover:text-primary transition-colors">{title}</p>
        <p className="text-xs text-slate-500">{actor}</p>
      </div>
    </div>
    <div className="col-span-3 md:col-span-2 flex justify-center">
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status === 'processing' ? 'bg-secondary/10 text-secondary' : 'bg-success/10 text-success'}`}>
        {status === 'processing' ? 'Generando...' : 'Listo'}
      </span>
    </div>
    <div className="hidden md:block md:col-span-2 text-center text-sm text-slate-400">{date}</div>
    <div className="col-span-3 md:col-span-3 flex justify-end">
      {status === 'ready' && <button className="p-2 text-white bg-primary hover:bg-primary-hover rounded-lg"><span className="material-symbols-outlined text-[20px]">download</span></button>}
    </div>
  </div>
);

export default Dashboard;
