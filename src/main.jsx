import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { _Container } from './container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <_Container />
  </StrictMode>,
)
