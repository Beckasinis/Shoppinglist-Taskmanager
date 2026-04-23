import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './context/TaskContext'
import { ShoppingProvider } from './context/ShoppingContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </TaskProvider>
  </StrictMode>,
)
