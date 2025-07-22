import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <UserContext>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-center" />
    </BrowserRouter>
  </UserContext>
)