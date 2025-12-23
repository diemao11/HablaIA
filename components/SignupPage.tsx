
import React from 'react';

interface SignupPageProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login') => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white font-display antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-background-dark/80 backdrop-blur-md px-6 py-4 md:px-10">
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-white cursor-pointer select-none group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">graphic_eq</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">HablaIA</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:block">¿Ya tienes cuenta?</span>
          <button 
            onClick={() => onNavigate('login')}
            className="flex h-9 items-center justify-center rounded-lg bg-surface-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            <span className="truncate">Iniciar sesión</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-[1024px] space-y-10">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Crea tu cuenta en HablaIA
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">
              Selecciona tu perfil para comenzar. Únete a la plataforma líder de videos con IA en Colombia, ya sea para potenciar tu negocio o monetizar tu imagen.
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Card: Cliente */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-dark bg-surface-dark p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute right-0 top-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100"></div>
              <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-background-dark relative border border-white/5">
                <div className="absolute top-3 left-3 z-10 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/10">
                  Para Negocios
                </div>
                {/* Imagen profesional de negocios / marketing digital */}
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col justify-between relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">storefront</span>
                    <h3 className="text-xl font-bold text-white">Registrarme como Cliente</h3>
                  </div>
                  <p className="text-slate-400">
                    Busco crear videos con IA para mi negocio. Genera contenido publicitario en minutos con avatares colombianos hiperrealistas.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-success">check_circle</span>
                      Videos publicitarios en minutos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-success">check_circle</span>
                      Catálogo de voces locales
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => onNavigate('home')}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                >
                  <span>Crear cuenta de Cliente</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card: Creador */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-dark bg-surface-dark p-6 shadow-sm transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1">
              <div className="absolute right-0 top-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-secondary/5 blur-3xl transition-opacity group-hover:opacity-100"></div>
              <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-background-dark relative border border-white/5">
                <div className="absolute top-3 left-3 z-10 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/10">
                  Para Talentos
                </div>
                {/* Imagen de creadora de contenido profesional */}
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col justify-between relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">face</span>
                    <h3 className="text-xl font-bold text-white">Registrarme como Creador</h3>
                  </div>
                  <p className="text-slate-400">
                    Quiero monetizar mi imagen como avatar IA. Únete a nuestro catálogo de talentos y gana regalías cada vez que te usen.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-success">check_circle</span>
                      Ingresos pasivos por uso de imagen
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-success">check_circle</span>
                      Control total de tu clon digital
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => onNavigate('creators')}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-slate-600 hover:shadow-lg active:scale-[0.98]"
                >
                  <span>Crear cuenta de Creador</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer / Legal */}
          <div className="border-t border-border-dark pt-8 text-center">
            <p className="text-sm text-slate-500">
              Al registrarte, aceptas nuestros 
              <a className="font-medium text-primary hover:text-blue-500 hover:underline mx-1" href="#">Términos y Condiciones</a> 
              y la 
              <a className="font-medium text-primary hover:text-blue-500 hover:underline mx-1" href="#">Política de Privacidad</a>.
            </p>
            <p className="mt-4 text-xs text-slate-600">
              © 2024 HablaIA. Todos los derechos reservados. Tecnología hecha con ❤️ en Colombia.
            </p>
          </div>
        </div>
      </main>

      {/* Background decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]"></div>
      </div>
    </div>
  );
};

export default SignupPage;
