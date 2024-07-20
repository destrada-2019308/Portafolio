import React from 'react'
import './App.css'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'

function App () {

  const elemet = useRoutes(routes)

  return (
    <>
      {elemet}
      <Toaster position ='bottom-left' reverseOrder={false}/>
    </>
  )
}

export default App;