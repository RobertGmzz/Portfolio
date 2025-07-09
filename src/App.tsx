//import { useState } from 'react'
import './components/Header'
import { Main } from './components/Main'
import { Header } from './components/Header'
import {Footer} from './components/Footer'

//funcion que renderizara todos los componentes a main.tsx

function App() {
  return (
    <>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App
