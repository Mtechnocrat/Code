import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import func from './func.jsx';


// const reactApp=(
//   <a href="https://www.google.com" target='_blank'>Click me to vist</a>
// )

// const secondEle=React.createElement(
//   "a",
//   {
//     href :"https://google.com",
//     target:"_blank"
//   },
//   "click here to redirect"

// )

createRoot(document.getElementById('root')).render(
    // reactApp
    <App/>
    // secondEle
)
