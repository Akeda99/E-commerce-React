import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from'./store'
// pasos: Hashrouter encerrando App, Provider encerrando Hashrouter y app
// Poner en provider store={store} con el corchete deberia de importar por si solo la carpeta store pero sino importar por ti mismo
// Luego de hacer lo de provider y store, necesitamos crear nuestras variables globales y lo haremos en la carpeta slices,
//creando un js llamada products.slice.js y la carpeta slices estara dentro de store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
)
