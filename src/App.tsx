import { useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [mensaje, setMensaje] = useState('Haz clic para probar la conexión')

  // Esta función intentará guardar algo sencillo en tu tabla 'scripts'
  const probarBaseDeDatos = async () => {
    setMensaje('Enviando datos a Supabase...')
    
    // Intentamos insertar una fila de prueba
    const { error } = await supabase
      .from('scripts')
      .insert([{ title: 'Prueba desde mi Studio', content: 'Esto funciona' }])

    if (error) {
      setMensaje('Ups, algo falló: ' + error.message)
      console.error(error)
    } else {
      setMensaje('¡Perfecto! Tu Studio ya está guardando datos.')
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f7f6',
      color: '#333'
    }}>
      <div style={{ 
        padding: '40px', 
        backgroundColor: 'white', 
        borderRadius: '15px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h1 style={{ marginBottom: '10px' }}>HablaIA Studio</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#666' }}>{mensaje}</p>
        
        <button 
          onClick={probarBaseDeDatos}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.3s'
          }}
        >
          Probar Conexión
        </button>
      </div>
    </div>
  )
}

export default App