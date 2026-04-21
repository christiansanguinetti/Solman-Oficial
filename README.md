# ⚡ Solman - Electricidad y Seguridad

Aplicación web fullstack para **Solman**, empresa de electricidad y seguridad. Permite gestionar y mostrar servicios, productos y contenido institucional con panel de administración y carga de imágenes en la nube.

🌐 **Demo en vivo:** [solmanfrontend.vercel.app](https://solmanfrontend.vercel.app)

---

## 🚀 Tecnologías

| Frontend | Backend |
|----------|---------|
| React 19 + Vite | Express 5 + Node.js |
| Tailwind CSS + Flowbite | MongoDB + Mongoose |
| Framer Motion | JWT + bcryptjs |
| React Router DOM v7 | Cloudinary + Multer |
| Swiper / React Icons | CORS + dotenv |

---

## 📁 Estructura

```
├── Frontend/   # React + Vite
└── Backend/    # Express + MongoDB
```

---

## ⚙️ Instalación

```bash
git clone https://github.com/christiansanguinetti/Solman-Oficial.git
cd Solman-Oficial
```

**Backend:**
```bash
cd Backend
npm install
```

Creá un `.env` con:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/solman
JWT_SECRET=tu_secreto
CLOUDINARY_CLOUD_NAME=tu_cloud
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

```bash
npm start
```

**Frontend:**
```bash
cd Frontend
npm install
npm run dev
```

---

## ✨ Funcionalidades

- 🔐 Autenticación con JWT
- 🖼️ Carga y gestión de imágenes con Cloudinary
- 📱 Diseño responsive con Tailwind CSS + Flowbite
- 🎞️ Animaciones con Framer Motion
- 🎠 Carrusel de contenido con Swiper
- 🛠️ Panel de administración protegido

---

## 👤 Autor

**Christian Sanguinetti** — [@christiansanguinetti](https://github.com/christiansanguinetti)

## 📄 Licencia

ISC
