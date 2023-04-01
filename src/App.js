import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css'
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./components /Navbar";
import Footer from "./components /Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="m-0 p-0 flex flex-col w-full h-auto fontar">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
