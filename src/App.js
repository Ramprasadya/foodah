import {  Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./screens/Login";


function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/login" element={<Login/>} />
    </Routes>
     
     <Footer/>
    </>
  );
}

export default App;
