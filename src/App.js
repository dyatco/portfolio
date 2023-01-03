import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <AboutMe/>
    </>
  );
}

export default App;

