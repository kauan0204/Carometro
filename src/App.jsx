import { usaState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Login from './login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>


    </div>
  )
}
export default App