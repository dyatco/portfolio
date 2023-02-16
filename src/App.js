import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Skills from './pages/Skills';
import PortfolioPage from './pages/PortfolioPage';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element= {<><Home /><Skills /><Projects /><AboutMe /></>} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

