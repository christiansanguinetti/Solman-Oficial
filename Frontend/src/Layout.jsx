import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import ModernContainer from "./ModernContainer";
import CarruselPorRuta from "./CarruselPorRuta";
import UploadModal from "./UploadModal";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [showLogoutMsg, setShowLogoutMsg] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsuarioLogueado(true);
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setNombreUsuario(payload.usuario || "Usuario");
      } catch {
        setNombreUsuario("Usuario");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsuarioLogueado(false);
    setNombreUsuario("");
    setShowLogoutMsg(true);

    setTimeout(() => {
      setShowLogoutMsg(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen relative">
      {/* 🌄 Fondo de imagen (debe estar en carpeta public como public/fondo2.png) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/fondo2.png')" }}
      />

      <Navbar />

      {usuarioLogueado && (
        <>
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
            <button
              onClick={() => setModalAbierto(true)}
              className="bg-purple-700 text-white px-4 py-3 rounded-full shadow-xl hover:bg-purple-800 transition-all"
            >
              📤 Subir imagen
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 text-sm"
            >
              🔒 Cerrar sesión
            </button>
          </div>

          <UploadModal
            isOpen={modalAbierto}
            onClose={() => setModalAbierto(false)}
          />
        </>
      )}

      {showLogoutMsg && (
        <div className="fixed bottom-6 left-6 z-50 bg-green-600 text-white px-4 py-2 rounded-xl shadow-xl animate-fade">
          🔓 Sesión cerrada correctamente
        </div>
      )}

      <section className="w-full px-6 md:px-12 py-12 min-h-screen">
        <div className="container mx-auto max-w-screen-lg">
          <ModernContainer title={`Bienvenido a Solman${nombreUsuario ? ", " + nombreUsuario : ""}`}>
            <div className="mt-6">
              <CarruselPorRuta />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </ModernContainer>

          <WhatsAppButton />
        </div>
      </section>
    </div>
  );
};

export default Layout;