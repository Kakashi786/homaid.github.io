import React from "react";
import Home from "./pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
     <>
       <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/about" exact element = {<About/>}/>
        <Route path="/work" exact element = {<Work/>}/>
        <Route path="/contact" exact element = {<Contact/>}/>

       </Routes>
      
     </>
  );
}

export default App;
