import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
