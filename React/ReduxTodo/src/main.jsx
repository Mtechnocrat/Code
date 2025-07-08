import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'



// provider always have an argument values here it is called store where as in ContextApi it called value where we have to provide the method , variables names
createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>,
)
