import { useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [mensaje, setMensaje] = useState('Haz clic para probar la conexión')

  const probarBaseDeDatos = async () => {
    setMensaje('Enviando datos...')
    
    // Usamos 'titulo' y 'guion_texto' porque así están en tu tabla de Supabase
    const { error } = await supabase
      .from('scripts')
      .insert([{ 
        titulo: 'Mi primer guion', 
        guion_texto: 'Este contenido ahora sí coincide con la tabla' 
      }])

    if (error) {
      setMensaje('Ups, algo falló: ' + error.message)
    } else {
      setMensaje('¡Perfecto! Conexión exitosa y datos guardados en Supabase.')
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6' }}>
      <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h1 style={{ color: '#4f46e5' }}>Estudio HablaIA</h1>
        <p style={{ marginBottom: '25px', color: '#666', fontSize: '1.1rem' }}>{mensaje}</p>
        <button 
          onClick={probarBaseDeDatos}
          style={{ padding: '12px 24px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Probar Conexión
        </button>
      </div>
    </div>
  )
}

export default App