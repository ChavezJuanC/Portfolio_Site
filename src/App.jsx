import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Skills from "./routes/skills/Skills";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
//navigation
import Navbar from "./routes/navigation/Navbar";
import Footer from "./routes/navigation/Footer";
//featured projects
import ProjectsF1 from "./routes/projects/ProjectsF1";
import ProjectsF2 from "./routes/projects/ProjectsF2";
import ProjectsF3 from "./routes/projects/ProjectsF3";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Router>
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        {/*Featured Projects*/}
                        <Route path="/projects/f1" element={<ProjectsF1 />} />
                        <Route path="/projects/f2" element={<ProjectsF2 />} />
                        <Route path="/projects/f3" element={<ProjectsF3 />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
