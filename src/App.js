import './tailwind.css';
import './App.css';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CustomTitle from './components/CustomTitle';

function App() {
  return (
    <div className="App">
      <p className='text-green-500'>PORTFOLIO</p>
      <Main />
      <Skills />
      <Projects />
      voir text
    </div>
  );
}

export default App;