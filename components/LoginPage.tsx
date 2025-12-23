
import React from 'react';

interface LoginPageProps {
  onNavigate: (view: 'home' | 'pricing' | 'how-it-works' | 'actors' | 'creators' | 'signup' | 'login' | 'dashboard') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white font-display antialiased">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-border-dark px-6 lg:px-10 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="size-8 text-primary group-hover:scale-110 transition-transform">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight">HablaIA</h2>
        </div>
        <div className="hidden sm:flex text-sm text-slate-400 gap-2">
          ¿Necesitas ayuda? <a className="text-primary hover:underline" href="#">Soporte</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center px-4 py-8 relative">
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] mix-blend-screen opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] mix-blend-screen opacity-30"></div>
        </div>

        {/* Login Card */}
        <div className="relative w-full max-w-[480px] flex flex-col bg-surface-dark rounded-2xl border border-border-dark shadow-xl overflow-hidden z-10">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-[28px] font-bold text-white mb-2 tracking-tight">Inicia Sesión en HablaIA</h1>
              <p className="text-sm text-slate-400">Bienvenido de nuevo, creador.</p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200" htmlFor="email">
                  Correo electrónico
                </label>
                <input 
                  className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:ring-2 focus:ring-primary focus:border-primary h-12 px-4 placeholder-slate-600 transition-colors" 
                  id="email" 
                  placeholder="nombre@ejemplo.com" 
                  type="email"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200" htmlFor="password">
                  Contraseña
                </label>
                <div className="relative">
                  <input 
                    className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:ring-2 focus:ring-primary focus:border-primary h-12 px-4 pr-12 placeholder-slate-600 transition-colors" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                  />
                  <button 
                    className="absolute right-0 top-0 h-full px-4 text-slate-500 hover:text-white flex items-center justify-center transition-colors" 
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
                <div className="flex justify-end mt-1">
                  <a className="text-sm text-primary hover:text-blue-400 font-medium transition-colors" href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                onClick={() => onNavigate('dashboard')}
                className="mt-2 w-full bg-primary hover:bg-blue-600 text-white font-semibold h-12 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98]" 
                type="button"
              >
                Iniciar Sesión
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface-dark text-slate-500">o continúa con</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-surface-dark border border-border-dark hover:bg-[#232f48] text-white h-12 rounded-lg transition-colors font-medium text-sm group" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-surface-dark border border-border-dark hover:bg-[#232f48] text-white h-12 rounded-lg transition-colors font-medium text-sm group" type="button">
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <div className="bg-[#151c2a] border-t border-border-dark p-4 text-center">
            <p className="text-sm text-slate-400">
              ¿No tienes cuenta? 
              <button 
                onClick={() => onNavigate('signup')}
                className="text-primary font-semibold hover:underline ml-1"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
