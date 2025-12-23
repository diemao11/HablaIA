import { useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [mensaje, setMensaje] = useState('Haz clic para probar la conexión')

  const probarConexion = async () => {
    setMensaje('Enviando datos...')
    
    // Usamos los nombres que tú creaste en tus tablas
    const { error } = await supabase
      .from('scripts')
      .insert([{ 
        titulo: 'Prueba de conexión', 
        guion_texto: 'Si lees esto, tu Studio IA ya funciona' 
      }])

    if (error) {
      setMensaje('Error todavía: ' + error.message)
    } else {
      setMensaje('¡LO LOGRASTE! Ya está conectado correctamente.')
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Estudio HablaIA</h1>
      <p>{mensaje}</p>
      <button onClick={probarConexion} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Probar Conexión Real
      </button>
    </div>
  )
}

export default App