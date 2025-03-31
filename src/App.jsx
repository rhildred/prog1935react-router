import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Hello from "./Hello"
import Navigation from "./Navigation";
export default function App(){
  return <>
  <BrowserRouter>
  <Navigation />  
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="about" element={<About />}></Route>
    <Route path="user/:username" element={<Hello />}></Route>
  </Routes>
  </BrowserRouter>
  </>
}