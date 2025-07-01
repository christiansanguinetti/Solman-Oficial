import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      setMensaje("✅ Login exitoso");

      // 🔁 Redirigir después de 1 segundo
      setTimeout(() => {
        window.location.href = "/panel";
      }, 1000);
    } catch (err) {
      console.error(err);
      setMensaje("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
      >
        Ingresar
      </button>
      {mensaje && (
        <p className="mt-4 text-sm text-gray-700 text-center">{mensaje}</p>
      )}
    </form>
  );
};

export default LoginForm;
