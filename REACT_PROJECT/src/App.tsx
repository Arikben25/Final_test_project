import './App.css'
import {Route ,Routes} from "react-router"
import Layout from './pages/layoutPage'
import HomePage from './pages/HomePage'
import GetPost from "./pages/getPost"
import AddPost from "./pages/addPost"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/getPost" element={<GetPost />} />
          <Route path="/addPost" element={<AddPost />} />
        </Route>
      </Routes>
    </div>
  )
}
