import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx"
// import HomePage from "./pages/HomePage.tsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      {/* <Route path="/home" element={<HomePage/>} /> */}
      </Routes>
      </BrowserRouter>
  )
}
export default App2
