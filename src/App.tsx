//import { useState } from 'react'
import './App.css'
import './components/Navbar'
import {NavBar} from './components/Navbar'
import {Main} from './components/MainSection'
import {Header} from './components/HeaderSection'

//funcion que renderizara todos los componentes a main.tsx

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
