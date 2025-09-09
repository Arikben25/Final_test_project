import './App.css'
import {Route ,Routes} from "react-router"
import Layout from './pages/layoutPage'
import HomePage from './pages/HomePage'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< HomePage/>}></Route>
      </Routes>
    </div>
  )
}
