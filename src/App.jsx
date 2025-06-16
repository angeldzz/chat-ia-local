import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const modeloIA = "google/gemma-3-12b";
  const [inputTexto, setInputTexto] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const mensajesRef = useRef(null);

  // Auto-scroll hacia abajo cuando se agreguen nuevos mensajes
  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, [mensajes, cargando]);

  const manejarEnvio = async () => {
    if (!inputTexto.trim()) return;
    
    const mensajeUsuario = inputTexto.trim();
    
    // Agregar mensaje del usuario al historial
    const nuevosMensajes = [...mensajes, { tipo: 'usuario', contenido: mensajeUsuario }];
    setMensajes(nuevosMensajes);
    setInputTexto(""); // Limpia el input inmediatamente
    setCargando(true);
    setError(null);
    
    const url = "/api/v1/chat/completions";
    
    // Convertir el historial al formato que espera la API
    const mensajesParaAPI = nuevosMensajes
      .filter(msg => msg.tipo !== 'error') // Excluir mensajes de error
      .map(msg => ({
        role: msg.tipo === 'usuario' ? 'user' : 'assistant',
        content: msg.contenido
      }));
    console.log(mensajesParaAPI);
    const data = {
      "model": modeloIA,
      "messages": mensajesParaAPI, // Enviar todo el historial
      "temperature": 0.8
    };

    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      const resultado = await response.json();
      
      // Agregar respuesta de la IA al historial
      setMensajes(prev => [...prev, { 
        tipo: 'ia', 
        contenido: resultado.choices[0].message.content 
      }]);
      
    } catch (error) {
      const mensajeError = `Error: ${error.message}`;
      setError(mensajeError);
      // Agregar error al historial
      setMensajes(prev => [...prev, { 
        tipo: 'error', 
        contenido: mensajeError 
      }]);
      console.error('Error:', error);
    } finally {
      setCargando(false);
    }
  };

  const manejarKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      manejarEnvio();
    }
  };

  const manejarCambio = (event) => {
    setInputTexto(event.target.value);
  };

  const limpiarChat = () => {
    setMensajes([]);
    setError(null);
  };

  return (
    <>
      <div className="contenedor">
        <div className="chat">
          <div className="header-chat">
            <h1 className='titulo'>IA en local</h1>
            <button className="btn-limpiar" onClick={limpiarChat}>
              Limpiar
            </button>
          </div>
          
          <div className="mensajes" ref={mensajesRef}>
            {mensajes.length === 0 && !cargando && (
              <div className="mensaje-bienvenida">
                ¡Hola! Escribe tu primera pregunta para comenzar la conversación.
              </div>
            )}
            
            {mensajes.map((mensaje, index) => (
              <div key={index} className={`mensaje mensaje-${mensaje.tipo}`}>
                <div className="mensaje-autor">
                  {mensaje.tipo === 'usuario' ? 'Tú' : mensaje.tipo === 'error' ? 'Error' : modeloIA }
                </div>
                <div className="mensaje-contenido">
                  {mensaje.contenido}
                </div>
              </div>
            ))}
            
            {cargando && (
              <div className="mensaje mensaje-cargando">
                <div className="mensaje-autor">{ modeloIA }</div>
                <div className="mensaje-contenido">
                  <span>Escribiendo...</span>
                  <div className="spinner"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="entrada">
            <input
              type="text"
              placeholder='¿Qué necesitas hoy?'
              name="input_texto"
              id="input_texto"
              value={inputTexto}
              autoComplete="off"
              onChange={manejarCambio}
              onKeyDown={manejarKeyPress}
              disabled={cargando}
            />
            <button 
              className='btn-enviar' 
              onClick={manejarEnvio}
              disabled={cargando || !inputTexto.trim()}
            >
              {cargando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App