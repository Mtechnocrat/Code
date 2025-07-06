
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const[themeMode,setThemeMode]=useState("light");
  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    const dis=document.querySelector('html');
    dis.classList.remove("light","dark");
    dis.classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
      <h1 className='text-3xl text-center bg-amber-700 '>Theme Changer</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
