import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartApp } from './CartApp';
import { BrowserRouter } from 'react-router-dom';

// añadimos el BrowserRouter para poder añadir rutas a nuestra pagina web
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <CartApp />

    </BrowserRouter> 
  </React.StrictMode>,
)
