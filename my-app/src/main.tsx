
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'

createRoot(document.getElementById('root')!).render(
  
    <ShoppingCartProvider>
       <App />
    </ShoppingCartProvider>
  
)
