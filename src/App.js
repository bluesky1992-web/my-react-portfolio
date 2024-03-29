import { Routes, Route} from "react-router-dom";

import './index.css'
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./components /Navbar";
import Footer from "./components /Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactMe from "./pages/ContactMe";


function App() {
  return (
    <div className="m-0 p-0 flex flex-col w-full h-auto ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
