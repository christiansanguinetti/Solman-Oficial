import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaUser, FaRobot, FaPaperPlane, FaCommentDots } from "react-icons/fa";

const respuestasBot = {
  horario: "Nuestro horario de atención es de lunes a viernes de 10:00 a 18:00 hs 🕐",
  contacto: "Podés escribirnos por WhatsApp al +598 XXX XXX XXX 📱",
  whatsapp: "Este es nuestro número de WhatsApp: +598 XXX XXX XXX 📞",
  categorias: "Ofrecemos productos en las categorías: Tecnología, Seguridad, Herramientas y más.",
  saludo: "¡Hola! Soy el asistente virtual 🤖 ¿En qué puedo ayudarte?",
  desconocido: "No entendí tu mensaje 🤔. Si querés, podés escribirnos por WhatsApp directamente.",
};

const ChatBot = () => {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([{ autor: "bot", texto: respuestasBot.saludo }]);
  const [input, setInput] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let ultimaPos = window.scrollY;

    const manejarScroll = () => {
      const actualPos = window.scrollY;
      setVisible(actualPos < ultimaPos || actualPos < 100);
      ultimaPos = actualPos;
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const manejarPregunta = (pregunta) => {
    const lower = pregunta.toLowerCase();
    let respuesta = respuestasBot.desconocido;

    if (lower.includes("hora") || lower.includes("atención")) respuesta = respuestasBot.horario;
    else if (lower.includes("whatsapp") || lower.includes("número") || lower.includes("contacto"))
      respuesta = respuestasBot.contacto;
    else if (lower.includes("categoría") || lower.includes("producto")) respuesta = respuestasBot.categorias;
    else if (lower.includes("hola") || lower.includes("buenas")) respuesta = respuestasBot.saludo;

    setMensajes((prev) => [...prev, { autor: "user", texto: pregunta }]);
    setEscribiendo(true);

    setTimeout(() => {
      setMensajes((prev) => [...prev, { autor: "bot", texto: respuesta }]);
      setEscribiendo(false);
    }, 1000);
  };

  const manejarEnviar = () => {
    if (input.trim() === "") return;
    manejarPregunta(input.trim());
    setInput("");
  };

  return (
    <>
      {visible && (
        <button
          onClick={() => setAbierto(!abierto)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-xl transition-opacity duration-300"
          title="Chat"
        >
          <FaCommentDots size={20} />
        </button>
      )}

      {abierto && (
        <div className="fixed bottom-24 right-6 md:bottom-28 md:right-8 w-[90vw] max-w-xs z-[9999] bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
            <FaRobot /> Asistente Virtual
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 h-72 bg-white">
            {mensajes.map((msg, i) => (
              <div
                key={i}
                className={`text-sm max-w-[80%] px-3 py-2 rounded-lg shadow flex items-start gap-2 ${
                  msg.autor === "user"
                    ? "bg-purple-100 self-end ml-auto text-gray-800"
                    : "bg-gray-100 self-start mr-auto text-gray-700"
                }`}
              >
                {msg.autor === "user" ? <FaUser className="mt-1" /> : <FaRobot className="mt-1" />}
                <span>{msg.texto}</span>
              </div>
            ))}

            {escribiendo && (
              <div className="flex items-center gap-2 text-sm text-gray-500 animate-pulse">
                <FaRobot className="mt-1" />
                <span>Escribiendo...</span>
              </div>
            )}
          </div>

          <div className="border-t px-2 py-2 bg-gray-50 flex gap-1">
            <input
              type="text"
              placeholder="Escribí tu pregunta..."
              className="flex-1 px-3 py-1 text-sm rounded-md border border-gray-300 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && manejarEnviar()}
            />
            <button
              onClick={manejarEnviar}
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 rounded-md"
            >
              <FaPaperPlane />
            </button>
          </div>

          <div className="text-center text-xs text-gray-500 py-2 bg-gray-100">
            ¿Querés hablar con alguien?{" "}
            <a
              href="https://wa.me/598XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-600 font-medium"
            >
              <FaWhatsapp size={14} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
