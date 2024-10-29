import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"
import Navbar from "./Components/Navbar"

function App() {
  return (

    <>
      <BrowserRouter>
        <RoutesIndex />
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App