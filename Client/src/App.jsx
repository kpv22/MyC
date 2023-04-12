import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Login from "./Components/Login/login";
import Projects from "./Components/Projects/projects";
import Footer from "./Components/Footer/footer";
import NavBar from "./Components/NavBar/navBar";
import News from "./Components/News/news";
import AreaPersonal from "./Components/Login/Area Personal/areaPersonal";
import "./App.css";
import { ReduxComponent } from "./Components/ReducComponent/ReduxComponent"
import { Register } from "./Components/Register/Register"


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/areaPersonal" element={<AreaPersonal />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
        <Route path="/redux" element={<ReduxComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;