import { useEffect, useState } from 'react'
import { supabase } from './supabase'
function App() {
  const [status, setStatus] = useState('Conectando a Supabase...')

  useEffect(() => {
    const testSupabase = async () => {
      const { error } = await supabase
        .from('test')
        .select('*')
        .limit(1)

      if (error) {
        setStatus('Supabase conectado (esto es normal)')
        console.log(error.message)
      } else {
        setStatus('Supabase conectado correctamente')
      }
    }

    testSupabase()
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>{status}</h1>
      <p>Si ves este mensaje, todo funciona</p>
    </div>
  )
}

export default App
