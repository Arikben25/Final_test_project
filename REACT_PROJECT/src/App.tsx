import './App.css'
import {Route ,Routes} from "react-router"
import HomePage from "./pages/HomePage"

import React from 'react'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}
