
import { useEffect, useState } from 'react'
import clienteAxios from './api/axios'

function App() {
  const [mensaje, setMensaje] = useState('Conectando...')

  useEffect(() => {
    // Intentamos llamar a una ruta de prueba en Laravel
    clienteAxios.get('/test') 
      .then(res => setMensaje(res.data.message))
      .catch(err => setMensaje('Error: Revisa el CORS en Laravel'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Proyecto Laravel_ATHENA</h1>
      <p>Estado del Backend: <strong>{mensaje}</strong></p>
    </div>
  )
}

export default App


