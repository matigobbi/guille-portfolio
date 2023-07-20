import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
