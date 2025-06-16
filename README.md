

🤖 Chat IA Local
Una aplicación de chat moderna y elegante que se conecta a tu modelo de IA local


Conecta, conversa y explora el poder de la IA local con una interfaz futurista y elegante


✨ Características Principales



🖌️ Interfaz Moderna
Diseño futurista con gradientes y glassmorphism


📱 Totalmente Responsive
Perfecto en desktop, tablet y móvil

System: 


🤖 Chat IA Local
Una aplicación de chat moderna y elegante que se conecta a tu modelo de IA local
![Vite](https://img shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Conecta, conversa y explora el poder de la IA local con una interfaz futurista y elegante


✨ Características Principales



🖌️ Interfaz Moderna
Diseño futurista con gradientes y glassmorphism


📱 Totalmente Responsive
Perfecto en desktop, tablet y móvil


💬 Chat en Tiempo Real
Conversaciones fluidas y naturales




🧠 Historial Inteligente
Mantiene el contexto de conversación


⏳ Indicadores Visuales
Estados de carga y error elegantes


♿ Accesible
Diseño inclusivo y navegable




🛠️ Stack Tecnológico





Tecnología
Versión
Propósito



⚛️ React
18.x
Framework de UI


⚡ Vite
5.x
Build tool ultra-rápido


🎨 CSS3
-
Estilos modernos


🤖 LM Studio
0.3.16+
Servidor de IA local


📦 pnpm
8.x
Gestor de paquetes




🚀 Inicio Rápido
📋 Requisitos Previos

⚠️ Importante: Asegúrate de tener todo instalado antes de continuar

# Verifica las versiones
node --version    # ≥ 16.0.0
pnpm --version    # ≥ 8.0.0


💾 Instalación de Dependencias


Node.js v16+ 
pnpm: npm install -g pnpm
LM Studio v0.3.16+



🔧 Configuración de LM Studio


graph TD
    A[📥 Descargar LM Studio] --> B[🤖 Descargar Modelo IA]
    B --> C[🚀 Iniciar Servidor Local]
    C --> D[✅ Verificar Conexión]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0







1️⃣ Configurar LM Studio
# 1. Descargar LM Studio 0.3.16+
# 2. Instalar y abrir la aplicación




2️⃣ Descargar Modelo
# Modelos recomendados:
# • Gemma 3 12B
# • Llama 3.1 8B
# • Phi 3 Medium






3️⃣ Iniciar Servidor
# En LM Studio:
# Local Server → Seleccionar modelo → Start Server
# Servidor: http://localhost:1234




4️⃣ Verificar API
# Endpoint disponible:
# http://localhost:1234/api/v1/chat/completions





🎯 Instalación del Proyecto
# 1️⃣ Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd chat-ia-local

# 2️⃣ Instalar dependencias
pnpm install

# 3️⃣ Ejecutar en desarrollo
pnpm dev

# 4️⃣ Abrir en el navegador
# 🌐 http://localhost:5173



🎉 ¡Listo! Tu chat IA local está funcionando


📁 Arquitectura del Proyecto
📦 chat-ia-local/
├── 📂 src/
│   ├── 🎨 App.jsx          # Componente principal del chat
│   ├── 💄 App.css          # Estilos principales
│   ├── 🌐 index.css        # Estilos globales
│   └── 🚀 main.jsx         # Punto de entrada
├── 📂 public/              # Archivos estáticos
├── 📄 package.json         # Configuración del proyecto
├── 📖 README.md           # Esta documentación
└── ⚙️ vite.config.js       # Configuración de Vite

🎨 Personalización Avanzada
🤖 Cambiar Modelo de IA
// En App.jsx
const modeloIA = "gemma-3-12b-instruct"; // 👈 Cambia aquí

🎭 Personalizar Estilos

Ver opciones de personalización

/* En App.css - Variables CSS personalizables */
:root {
  --primary-color: #6366f1;     /* Color principal */
  --secondary-color: #8b5cf6;   /* Color secundario */
  --accent-color: #06b6d4;      /* Color de acento */
  --background-dark: #0f172a;   /* Fondo oscuro */
  --glass-bg: rgba(255, 255, 255, 0.1); /* Efecto glass */
}



⚙️ Configurar Temperatura
// Ajustar creatividad de la IA
const data = {
  "model": modeloIA,
  "messages": mensajesParaAPI,
  "temperature": 0.8,  // 0.1 (conservador) - 1.0 (creativo)
  "max_tokens": 1000   // Límite de tokens
};

🔧 Scripts Disponibles





Comando
Descripción
Uso



pnpm dev
🚀 Desarrollo
Servidor local con hot-reload


pnpm build
📦 Producción
Build optimizado


pnpm preview
👀 Vista previa
Preview del build


pnpm lint
🔍 Linting
Verificar código




🐛 Solución de Problemas

🔌 Error de Conexión

# Verificaciones:
✅ LM Studio está ejecutándose
✅ Servidor local activo (puerto 1234)
✅ Modelo cargado correctamente
✅ Firewall no bloquea el puerto




🤖 Modelo No Responde

# Posibles soluciones:
✅ Verificar modelo cargado en LM Studio
✅ Confirmar nombre del modelo correcto
✅ Esperar a que el modelo se cargue completamente
✅ Reiniciar LM Studio si es necesario




⚡ Problemas de Rendimiento

# Optimizaciones:
✅ Usar modelo más pequeño (< 8GB RAM)
✅ Ajustar configuración de LM Studio
✅ Reducir temperatura para respuestas más rápidas
✅ Cerrar otras aplicaciones pesadas



📊 Compatibilidad





Sistema Operativo
Navegador
Estado



🪟 Windows 10/11
Chrome 90+
✅ Compatible


🍎 macOS 10.15+
Safari 14+
✅ Compatible


🐧 Linux Ubuntu
Firefox 88+
✅ Compatible


📱 iOS 14+
Safari Mobile
✅ Compatible


🤖 Android 8+
Chrome Mobile
✅ Compatible




🤝 Contribuir


¡Contribuciones bienvenidas! 🎉


# 1️⃣ Fork el proyecto
# 2️⃣ Crea tu rama de feature
git checkout -b feature/AmazingFeature

# 3️⃣ Commit tus cambios
git commit -m 'Add some AmazingFeature'

# 4️⃣ Push a la rama
git push origin feature/AmazingFeature

# 5️⃣ Abre un Pull Request

📄 Licencia


Este proyecto está bajo la Licencia MIT - ve el archivo LICENSE para más detalles.

⭐ Si te gusta este proyecto, ¡dale una estrella!
