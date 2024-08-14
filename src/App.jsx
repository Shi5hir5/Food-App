import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
