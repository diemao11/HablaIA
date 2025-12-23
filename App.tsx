import { useEffect } from 'react'
import { supabase } from './services/supabase'

function App() {
  useEffect(() => {
    const testSupabase = async () => {
      const { data, error } = await supabase
        .from('test')
        .select('*')

      console.log('DATA:', data)
      console.log('ERROR:', error)
    }

    testSupabase()
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>Supabase conectado</h1>
      <p>Abre la consola del navegador (F12)</p>
    </div>
  )
}

export default App
