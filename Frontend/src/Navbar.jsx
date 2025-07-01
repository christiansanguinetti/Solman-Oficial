import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoSolman from "./assets/logo-solman.jpeg";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "rounded-md bg-gray-900 px-3 py-2 text-[17px] font-medium tracking-wide text-white"
      : "rounded-md px-3 py-2 text-[17px] font-medium tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block rounded-md bg-gray-900 px-3 py-2 text-[17px] font-medium tracking-wide text-white"
      : "block rounded-md px-3 py-2 text-[17px] font-medium tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white";

  const token = localStorage.getItem("token");
  let usuario = "";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      usuario = decoded.usuario;
    } catch (err) {
      console.error("Token inválido", err);
    }
  }

  const cerrarMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800 shadow-md z-50 font-[Poppins,sans-serif]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Botón menú mobile */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <svg className="block size-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + enlaces */}
          <div className="flex flex-1 items-center justify-start sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img className="h-8 w-auto" src={logoSolman} alt="Logo" />
              <div className="hidden sm:flex items-center space-x-4">
                <NavLink to="/" className={linkClass}>Electricidad</NavLink>
                <NavLink to="/seguridad" className={linkClass}>Seguridad</NavLink>
                <NavLink to="/quienes-somos" className={linkClass}>Quiénes Somos</NavLink>
              </div>
            </div>

            {/* Usuario + redes */}
            <div className="hidden sm:flex items-center gap-6">
              {usuario && (
                <span className="text-sm text-gray-300 whitespace-nowrap">
                  Bienvenido, <span className="font-semibold text-white">{usuario}</span>
                </span>
              )}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/tuempresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-transform hover:scale-110"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512">
                    <path d="M224,202.7A53.3,53.3,0,1,0,277.3,256,53.38,53.38,0,0,0,224,202.7ZM398.8,129.3a54.2,54.2,0,0,0-30.6-30.6C344.4,88,297.4,86.1,224,86.1S103.6,88,79.8,98.7A54.2,54.2,0,0,0,49.2,129.3C38.5,153.1,36.6,200.1,36.6,273.5S38.5,393.9,49.2,417.7a54.2,54.2,0,0,0,30.6,30.6c23.8,10.7,70.8,12.6,144.2,12.6s120.4-1.9,144.2-12.6a54.2,54.2,0,0,0,30.6-30.6c10.7-23.8,12.6-70.8,12.6-144.2S409.5,153.1,398.8,129.3ZM224,338.7A82.7,82.7,0,1,1,306.7,256,82.8,82.8,0,0,1,224,338.7Zm85.3-148.5a19.3,19.3,0,1,1,19.3-19.3A19.3,19.3,0,0,1,309.3,190.2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/tuempresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-transform hover:scale-110"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9c0-2.3 1.4-3.5 3.5-3.5 1 0 2 .2 2 .2v2.4h-1.1C14.6 8.1 14 8.7 14 9.5V12h2.7l-.4 3H14v7c4.8-.8 8-5 8-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="/" className={mobileLinkClass} onClick={cerrarMenu}>Electricidad</NavLink>
            <NavLink to="/seguridad" className={mobileLinkClass} onClick={cerrarMenu}>Seguridad</NavLink>
            <NavLink to="/quienes-somos" className={mobileLinkClass} onClick={cerrarMenu}>Quiénes Somos</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
