import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import ModernContainer from "./ModernContainer";
import CarruselPorRuta from "./CarruselPorRuta";
import UploadModal from "./UploadModal";
import ChatBot from "./ChatBot";

const Layout = () => {
  const location = useLocation();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUsuarioLogueado(!!token);
  }, []);

  return (
    <div className="bg-purple-100 min-h-screen relative">
      <Navbar />

      {/* ✅ Mostrar solo si hay token */}
      {usuarioLogueado && (
        <>
          <button
            onClick={() => setModalAbierto(true)}
            className="fixed bottom-6 right-6 z-40 bg-purple-700 text-white px-4 py-3 rounded-full shadow-xl hover:bg-purple-800 transition-all"
          >
            📤 Subir imagen
          </button>

          <UploadModal
            isOpen={modalAbierto}
            onClose={() => setModalAbierto(false)}
          />
        </>
      )}

      <section className="w-full px-6 md:px-12 py-12 min-h-screen">
        <div className="container mx-auto max-w-screen-lg">
          <ModernContainer title="Bienvenido a Solman">
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
          <ChatBot />

        </div>
      </section>
    </div>
  );
};

export default Layout;
