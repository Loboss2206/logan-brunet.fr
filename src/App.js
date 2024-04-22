import './tailwind.css';
import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;