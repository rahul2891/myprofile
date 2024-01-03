import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
