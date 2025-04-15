import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import Home from "./routes/home/home";
import About from "./routes/about/About";
import Skills from "./routes/skills/Skills";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";

import Navbar from "./routes/navigation/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
