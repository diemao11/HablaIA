
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-3xl text-primary">smart_display</span>
              <span className="text-xl font-bold">HablaIA</span>
            </div>
            <p className="text-slate-400 text-sm">
              La plataforma líder en generación de video con IA especializada en acentos y cultura colombiana.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Producto</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Características</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Voces</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Precios</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Para Empresas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Recursos</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Comunidad</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Ayuda</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Privacidad</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Términos</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Ética de IA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {currentYear} HablaIA Inc. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-slate-400">
            <a className="hover:text-white transition-colors" href="#">Twitter</a>
            <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-white transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
