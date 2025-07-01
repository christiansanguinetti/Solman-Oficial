import React from "react";

const HomePage = () => {
  return (
    <>
      <h3 className="text-xl font-bold text-gray-800 mt-10">
        Electricidad, Domótica y Automatismos para tu hogar y empresa.
      </h3>

      <p className="text-gray-700 mt-4">
        En Solman, ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades eléctricas y de automatización. Desde instalaciones eléctricas hasta sistemas de domótica avanzados, nuestro equipo de expertos está aquí para ayudarte a crear un entorno más eficiente y cómodo.
      </p>

      <h4 className="text-lg font-semibold text-gray-800 mt-6">Servicios que ofrecemos:</h4>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900">Domótica 🏠⚡</h3>
        <p className="text-gray-700 mt-2">
          La domótica se enfoca en la automatización del hogar para mejorar la eficiencia energética, la seguridad y la comodidad. Algunas áreas importantes que trabajamos son:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Sistemas de control inteligente:</strong> Iluminación, climatización, persianas motorizadas.</li>
          <li><strong>Seguridad:</strong> Cámaras de vigilancia, cerraduras electrónicas, sensores de movimiento.</li>
          <li><strong>Protocolos de comunicación:</strong> Zigbee, Z-Wave, Wi-Fi, Bluetooth, KNX.</li>
          <li><strong>Integración con asistentes virtuales:</strong> Alexa, Google Assistant, HomeKit.</li>
          <li><strong>Automatización avanzada:</strong> Uso de sensores y escenarios programados.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-900">Electricidad básica 🔌⚡</h3>
        <p className="text-gray-700 mt-2">
          Este tema cubre principios fundamentales para entender cómo funciona la electricidad en el hogar y en aplicaciones industriales:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Conceptos clave:</strong> Voltaje, corriente, resistencia, potencia.</li>
          <li><strong>Circuitos eléctricos:</strong> Tipos de conexión (serie, paralelo), cálculo de cargas.</li>
          <li><strong>Protección:</strong> Uso de disyuntores, fusibles, puesta a tierra.</li>
          <li><strong>Tipos de cableado:</strong> Secciones de cables, materiales, normas de seguridad.</li>
          <li><strong>Medición y herramientas:</strong> Multímetros, amperímetros, pinzas de corriente.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-900">Automatismo 🤖⚙️</h3>
        <p className="text-gray-700 mt-2">
          El automatismo industrial se basa en el uso de dispositivos electrónicos y mecánicos para controlar procesos sin intervención humana:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>PLC (Controladores Lógicos Programables):</strong> Son el cerebro de la automatización.</li>
          <li><strong>Sensores y actuadores:</strong> De temperatura, presión, proximidad.</li>
          <li><strong>Interfaces HMI:</strong> Pantallas táctiles para supervisión de procesos.</li>
          <li><strong>Motores y variadores de frecuencia:</strong> Control de velocidad y eficiencia energética.</li>
          <li><strong>Comunicación industrial:</strong> Modbus, Profibus, Ethernet industrial.</li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
